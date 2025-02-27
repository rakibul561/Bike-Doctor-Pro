 

/* eslint-disable @typescript-eslint/no-unused-vars */
import { connectDB } from "@/components/lib/connectDB"

import {  reviews } from "@/components/lib/review";
import { NextResponse } from "next/server";

 
  export const GET =  async () =>{
    const db = await connectDB();
    const reviewCollection = db.collection('reviews')
    
    try { 
        await reviewCollection.deleteMany();
        const res = await reviewCollection.insertMany(reviews)
        return NextResponse.json({message: " review added  succesfull"})
        
    } catch (error) {
         console.log(error);
         
    }

 }