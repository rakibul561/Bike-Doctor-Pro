/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { connectDB } from "@/components/lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
    try {
      
        const newBooking = await request.json();
        
    
        const { _id, ...bookingData } = newBooking; 

       
        const db = await connectDB();
        const bookingCollection = db.collection("bookings");

        
        const result = await bookingCollection.insertOne(bookingData);

       
        if (!result.acknowledged) {
            return NextResponse.json({ error: "Booking failed to insert" }, { status: 400 });
        }

        return NextResponse.json({ message: "Service booked successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error fetching service:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
};
