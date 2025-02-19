/* eslint-disable @typescript-eslint/no-unused-vars */
import { connectDB } from "@/components/lib/connectDB";
import NextAuth, { Awaitable, RequestInternal, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { MongoClient } from "mongodb";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

// Ensure Google environment variables are defined
const googleClientId = process.env.NEXT_GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.NEXT_GOOGLE_CLIENT_SECRET;

if (!googleClientId || !googleClientSecret) {
    throw new Error('Google Client ID or Client Secret is missing in environment variables.');
}

// Ensure GitHub environment variables are defined
const githubClientId = process.env.NEXT_GITHUB_ID;
const githubClientSecret = process.env.NEXT_GITHUB_SECRET;

if (!githubClientId || !githubClientSecret) {
    throw new Error('GitHub Client ID or Client Secret is missing in environment variables.');
}

const handler = NextAuth({
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials: Record<"email" | "password", string> | undefined, req: Pick<RequestInternal, "body" | "query" | "headers" | "method">): Promise<User | null> => {
                if (!credentials) {
                    return null;
                }

                const { email, password } = credentials;
                if (!email || !password) {
                    return null;
                }

                const db = await connectDB();
                const currentUser = await db.collection('users').findOne({ email });

                if (!currentUser) {
                    return null;
                }

                const passwordMatched = await bcrypt.compare(password, currentUser.password);
                if (!passwordMatched) {
                    return null;
                }

                return { id: currentUser._id.toString(), email: currentUser.email } as User;
            }
        }),
        GoogleProvider({
            clientId: googleClientId,
            clientSecret: googleClientSecret
        }),

        GitHubProvider({
            clientId: githubClientId, // Now guaranteed to be a string
            clientSecret: githubClientSecret // Now guaranteed to be a string
        }),
    ],
    callbacks: {
        async signIn({ user, account }) {
          if (account?.provider === 'google' || account?.provider === 'github') {
            const { name, email, image } = user;
            try {
              const db = await connectDB(); // Ensure connectDB is properly defined
              const userCollection = db.collection('users');
              const userExists = await userCollection.findOne({ email });
      
              if (!userExists) {
                // Insert the user if they don't exist
                await userCollection.insertOne({ name, email, image });
              }
      
              // Return true to allow sign-in
              return true;
            } catch (error) {
              console.error('Error during sign-in:', error);
              // Return false to deny sign-in in case of an error
              return false;
            }
          } else {
            // Allow sign-in for other providers
            return true;
          }
        },
      },


    pages: {
        signIn: '/login'
    }
});

export { handler as GET, handler as POST };