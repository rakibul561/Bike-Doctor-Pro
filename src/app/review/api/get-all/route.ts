
import { connectDB } from "@/components/lib/connectDB"
import { NextResponse } from "next/server";


 
  export const GET =  async () =>{
    const db = await connectDB();
    const reviewCollection = db.collection('reviews')
    
    try { 
     
        const reviews = await reviewCollection.find().toArray()
        return NextResponse.json({reviews})
        
    } catch (error) {
         console.log(error);
         
    }

 }

