/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { connectDB } from "@/components/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    // Extract booking ID safely
    const bookingId = params?.id;
    if (!bookingId) {
      return NextResponse.json(
        { error: "Booking ID parameter is required" },
        { status: 400 }
      );
    }

    // Convert ID to ObjectId
    const objectId = new ObjectId(bookingId);

    // Connect to the database
    const db = await connectDB();
    const bookingCollection = db.collection("bookings");

    // Delete the booking
    const resp = await bookingCollection.deleteOne({ _id: objectId });

    if (resp.deletedCount === 0) {
      return NextResponse.json(
        { error: "No booking found with the provided ID" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Booking deleted successfully", response: resp },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting booking:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

/* updated */


export const PATCH = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    // Extract booking ID safely
    const bookingId = params?.id;
    if (!bookingId) {
      return NextResponse.json(
        { error: "Booking ID parameter is required" },
        { status: 400 }
      );
    }

    // Convert ID to ObjectId
    const objectId = new ObjectId(bookingId);

    // Connect to the database
    const db = await connectDB();
    const bookingCollection = db.collection("bookings");

    // Get request body data
    const { date, phone, address } = await request.json();

    // Update the booking
    const resp = await bookingCollection.updateOne(
      { _id: objectId }, 
      { $set: { date, phone, address } } // ✅ Corrected update syntax
    );

    // Check if a document was modified
    if (resp.matchedCount === 0) {
      return NextResponse.json(
        { error: "Booking not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Booking updated successfully", response: resp },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating booking:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

