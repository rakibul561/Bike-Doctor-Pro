/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { connectDB } from "@/components/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const POST = async (request: any,  { params }: { params: { id: string } }) => {
    try {
        const booking = await request.json();
        const db = await connectDB();
        const bookingCollection = db.collection("bookings");



        const myBooking = await bookingCollection.insertOne(booking);

        if (!myBooking) {
            return NextResponse.json({ error: "Service not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Service boooked succesfully" }, { status: 200 });
    } catch (error) {
        console.error("Error fetching service:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
};
