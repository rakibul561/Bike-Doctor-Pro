/* eslint-disable @typescript-eslint/no-unused-vars */
import { connectDB } from "@/components/lib/connectDB"
import { products } from "@/components/lib/product";

 
  export const GET =  async () =>{
    const db = await connectDB();
    const productsCollection = db.collection('products')
    
    try { 
        await productsCollection.deleteMany();
        const res = await productsCollection.insertMany(products)
        return Response.json({message: "Seeded succesfull"})
        
    } catch (error) {
         console.log(error);
         
    }

 }