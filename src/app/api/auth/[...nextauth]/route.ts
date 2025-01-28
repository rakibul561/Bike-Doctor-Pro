/* eslint-disable @typescript-eslint/no-unused-vars */
import { connectDB } from "@/components/lib/connectDB";
import NextAuth, { Awaitable, RequestInternal, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { MongoClient } from "mongodb";

const handler = NextAuth({
    session: {
        strategy: "jwt",
        maxAge: 3600 * 24 * 60 * 60,
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
        })
    ],
    callbacks: {},
    pages: {
        signIn: '/login'
    }
});

export { handler as GET, handler as POST };