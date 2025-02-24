/* eslint-disable @typescript-eslint/no-unused-vars */
import { connectDB } from "@/components/lib/connectDB"


 
  export const GET =  async () =>{
    const db = await connectDB();
    const reviewCollection = db.collection('reviews')
    
    try { 
     
        const reviews = await reviewCollection.find().toArray()
        return Response.json({reviews})
        
    } catch (error) {
         console.log(error);
         
    }

 }

