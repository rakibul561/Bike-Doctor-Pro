/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { connectDB } from "@/components/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (request: any,{ params }: { params: {
    email: unknown; id: string 
} } ) => {
    try {
     
        const db = await connectDB();
        const bookingCollection = db.collection("bookings");



        const newBooking = await bookingCollection.find({email: params.email}).toArray();

        if (!newBooking) {
            return NextResponse.json({ error: "Service not found" }, { status: 404 });
        }

        return NextResponse.json({}, { status: 200 });
    } catch (error) {
        console.error("Error fetching service:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
};
