/* eslint-disable @typescript-eslint/no-explicit-any */

import { connectDB } from "@/components/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (request: any, { params }: { params: { id: string } }) => {
    try {
        const db = await connectDB();
        const servicesCollection = db.collection("services");

        if (!params || !params.id) {
            return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
        }

        // Ensure params.id is a valid ObjectId
        const objectId = new ObjectId(params.id);

        const service = await servicesCollection.findOne({ _id: objectId });

        if (!service) {
            return NextResponse.json({ error: "Service not found" }, { status: 404 });
        }

        return NextResponse.json({ service }, { status: 200 });
    } catch (error) {
        console.error("Error fetching service:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
};
