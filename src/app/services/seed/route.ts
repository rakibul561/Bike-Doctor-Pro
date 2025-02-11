/* eslint-disable @typescript-eslint/no-unused-vars */
import { connectDB } from "@/components/lib/connectDB"
import { services } from "@/components/lib/servise";
 



  export const GET = async () => {
    const db = await connectDB();
    const servicesCollection = db.collection('services');

    try {
     await servicesCollection.deleteMany();
     const resp = await servicesCollection.insertMany(services);
     return Response.json( { message: 'seeded succesfully'})
    } catch (error) {
        console.log(error)
        
    }
  }