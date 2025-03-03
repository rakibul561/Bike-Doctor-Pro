/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { connectDB } from "@/components/lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
    try {
        // রিকোয়েস্ট বডি থেকে নতুন বুকিং ডেটা সংগ্রহ করা
        const newBooking = await request.json();
        
        // নতুন বুকিং থেকে _id বাদ দেওয়া, MongoDB এটি স্বয়ংক্রিয়ভাবে যোগ করবে
        const { _id, ...bookingData } = newBooking; 

        // ডেটাবেস কানেকশন স্থাপন
        const db = await connectDB();
        const bookingCollection = db.collection("bookings");

        // নতুন বুকিং ইনসার্ট করা
        const result = await bookingCollection.insertOne(bookingData);

        // ইনসার্ট সফল হলে চেক করা
        if (!result.acknowledged) {
            return NextResponse.json({ error: "Booking failed to insert" }, { status: 400 });
        }

        // সফল হলে রেসপন্স প্রদান
        return NextResponse.json({ message: "Service booked successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error fetching service:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
};
