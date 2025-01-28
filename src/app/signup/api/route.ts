import { connectDB } from "@/components/lib/connectDB";

import bcrypt from "bcrypt";

export const POST = async (req: Request) => {
  try {
    const newUser = await req.json();  // রিকোয়েস্ট বডি প্যার্স করা
    console.log("New User:", newUser);  // লগ দেখুন

    const db = await connectDB();
    const userCollection = db.collection('users');
    
    const exists = await userCollection.findOne({ email: newUser.email });
    if (exists) {
      console.log("User already exists:", exists);
      return new Response(
        JSON.stringify({ message: "User already exists" }),
        { status: 304 }
      );
    }
    
    const hashPassword = bcrypt.hashSync(newUser.password, 14);

    const resp = await userCollection.insertOne({...newUser, password: hashPassword});
    console.log("Inserted User:", resp);  

    return new Response(
      JSON.stringify({ message: 'User created successfully' }),
      { status: 200 }
    );
    
  } catch (error) {
    console.error("Error:", error);  // এখানে কনসোল লগ
    return new Response(
      JSON.stringify({ message: 'Something went wrong', error: error.message }),
      { status: 500 }
    );
  }
};
