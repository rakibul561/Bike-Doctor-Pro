/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { connectDB } from "@/components/lib/connectDB";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: { email: string } }
) => {
  try {
    // Ensure params are accessed safely
    const email = params?.email;
    if (!email) {
      return NextResponse.json(
        { error: "Email parameter is required" },
        { status: 400 }
      );
    }

    // Connect to the database
    const db = await connectDB();
    const bookingCollection = db.collection("bookings");

    // Fetch bookings based on email
    const myBooking = await bookingCollection.find({ email }).toArray();

    return NextResponse.json({ bookings: myBooking }, { status: 200 });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
