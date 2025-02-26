/* eslint-disable @typescript-eslint/no-unused-vars */
import { connectDB } from "@/components/lib/connectDB"


 
  export const GET =  async () =>{
    const db = await connectDB();
    const productsCollection = db.collection('products')
    
    try { 
     
        const products = await productsCollection.find().toArray()
        return Response.json({products})
        
    } catch (error) {
         console.log(error);
         
    }

 }