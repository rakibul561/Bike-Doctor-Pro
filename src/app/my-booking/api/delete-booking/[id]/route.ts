import { connectDB } from "@/components/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

/**
 * @desc Get a single booking by ID
 * @route GET /my-booking/api/delete-booking/[id]
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { id?: string } }
) {
  try {
    // Validate if the ID exists and is a valid ObjectId
    if (!params?.id || !ObjectId.isValid(params.id)) {
      return NextResponse.json(
        { error: "Invalid or missing booking ID" },
        { status: 400 }
      );
    }

    const db = await connectDB();
    const bookingsCollection = db.collection("bookings");

    const booking = await bookingsCollection.findOne({
      _id: new ObjectId(params.id),
    });

    if (!booking) {
      return NextResponse.json(
        { error: "No booking found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Booking found", data: booking });
  } catch (error) {
    console.error("Error fetching booking:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

/**
 * @desc Update a booking by ID
 * @route PATCH /my-booking/api/delete-booking/[id]
 */
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id?: string } }
) {
  try {
    // Validate if the ID exists and is a valid ObjectId
    if (!params?.id || !ObjectId.isValid(params.id)) {
      return NextResponse.json(
        { error: "Invalid or missing booking ID" },
        { status: 400 }
      );
    }

    const db = await connectDB();
    const bookingCollection = db.collection("bookings");

    const {phone, date, address} = await request.json();

    const resp = await bookingCollection.updateOne(
      { _id: new ObjectId(params.id) },
      { $set: { 
        phone, date, address
       } }
    );

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
}

/**
 * @desc Delete a booking by ID
 * @route DELETE /my-booking/api/delete-booking/[id]
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id?: string } }
) {
  try {
    // Validate if the ID exists and is a valid ObjectId
    if (!params?.id || !ObjectId.isValid(params.id)) {
      return NextResponse.json(
        { error: "Invalid or missing booking ID" },
        { status: 400 }
      );
    }

    const db = await connectDB();
    const bookingCollection = db.collection("bookings");

    const resp = await bookingCollection.deleteOne({
      _id: new ObjectId(params.id),
    });

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
}