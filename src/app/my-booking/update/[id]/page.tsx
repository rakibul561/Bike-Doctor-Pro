"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface Booking {
  date: string;
  price: string;
  phone: string;
  address: string;
}

interface PageProps {
  params: {
    id: string;
  };
}

const Page: React.FC<PageProps> = ({ params }) => {
  const { data: session } = useSession();
  const [booking, setBooking] = useState<Booking | null>(null);

  const loadBooking = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/my-booking/api/delete-booking/${params.id}`
      );
      const result = await response.json();
      setBooking(result.data);
    } catch (error) {
      console.error("Error loading booking:", error);
    }
  };

  const handleUpdateBooking = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const updatedBooking = {
      date: formData.get("date") as string,
      phone: formData.get("phone") as string,
      address: formData.get("address") as string,
    };

    try {
      const response = await fetch(
        `http://localhost:3000/my-booking/api/delete-booking/${params.id}`,
        {
          method: "PATCH",
          body: JSON.stringify(updatedBooking),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        toast.success("Updated Successfully");
      } else {
        toast.error("Failed to update booking");
      }
    } catch (error) {
      console.error("Error updating booking:", error);
      toast.error("An error occurred");
    }
  };

  useEffect(() => {
    loadBooking();
  }, [params.id]);

  return (
    <div className="container mx-auto">
      <div className="relative h-72">
        <Image
          className="absolute h-72 w-full left-0 top-0 object-cover"
          src="/default-image.jpg" // Replace with actual dynamic source
          alt="service"
          width={1920}
          height={1080}
          style={{ width: "90vw" }}
        />
        <div className="absolute h-full left-0 top-0 flex items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <h1 className="text-white text-3xl font-bold flex justify-center items-center ml-8">
            Update Booking
          </h1>
        </div>
      </div>
      <div className="my-12 bg-slate-300 p-12">
        <form onSubmit={handleUpdateBooking}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                defaultValue={session?.user?.name || ""}
                type="text"
                name="name"
                className="input input-bordered"
                disabled
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                defaultValue={booking?.date || ""}
                type="date"
                name="date"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                defaultValue={session?.user?.email || ""}
                type="email"
                name="email"
                className="input input-bordered"
                disabled
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due Amount</span>
              </label>
              <input
                defaultValue={booking?.price || ""}
                readOnly
                type="text"
                name="price"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                defaultValue={booking?.phone || ""}
                required
                type="text"
                name="phone"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Present Address</span>
              </label>
              <input
                defaultValue={booking?.address || ""}
                type="text"
                name="address"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary btn-block">
              Order Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
