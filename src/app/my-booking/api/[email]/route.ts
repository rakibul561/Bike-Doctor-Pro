import { connectDB } from "@/components/lib/connectDB";
import { NextRequest, NextResponse } from "next/server";

/**
 * @desc Get bookings by email
 * @route GET /my-booking/api/[email]
 */
export const GET = async (
  request: NextRequest,
  { params }: { params: { email: string } }
) => {
  try {
    // Access the email from params
    const email = params.email;

    // Validate if the email exists
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

    // If no bookings are found, return a 404 error
    if (!myBooking || myBooking.length === 0) {
      return NextResponse.json(
        { error: "No bookings found for the provided email" },
        { status: 404 }
      );
    }

    // Return the bookings
    return NextResponse.json({ bookings: myBooking }, { status: 200 });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};