/* eslint-disable @typescript-eslint/no-explicit-any */

import { connectDB } from "@/components/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (request: any, { params }: { params: { id: string } }) => {
  try {
    if (!params?.id) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    const db = await connectDB();
    const productsCollection = db.collection("products");

    // Ensure params.id is a valid ObjectId
    const objectId = new ObjectId(params.id);

    const product = await productsCollection.findOne({ _id: objectId });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ product }, { status: 200 });
  } catch (error) {
    console.error("Error fetching service:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
};
