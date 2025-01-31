"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const Page = () => {
  const { data: session } = useSession(); // Destructure to avoid unnecessary `.data`
  const [bookings, setBooking] = useState([]);

  const loadData = async () => {
    if (!session?.user?.email) return; // Ensure session is available before fetching
    try {
      const resp = await fetch(
        `http://localhost:3000/my-booking/api/${session.user.email}`
      );
      const data = await resp.json();
      console.log("Fetched Data:", data); // Log fetched data

      setBooking(data?.bookings || []); // Update state with data (ensure it's an array)
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };
       

/* service deleted */
const handleDelete = async (id: never) => {
    const deleted = await fetch(
      `http://localhost:3000/my-booking/api/delete-booking/${id}`, {
        method : "DELETE",
      }
    );
    const resp = await deleted.json();
    if(resp?.response?.deletedCount >  0) {
      toast.success(resp?.message)
      loadData();
    }
  };
     
   


  useEffect(() => {
    loadData();
  }, [session]); // Load data when session is available

  useEffect(() => {
    console.log("Updated bookings:", bookings); // Log after state update
  }, [bookings]); // Log bookings only after it changes

  return (
    <div className="container mx-auto ">
      <ToastContainer />
      <div className="relative h-72">
        <Image
          className="absolute h-72 w-full left-0 top-0 object-cover"
          src={"/assets/images/about_us/parts.jpg"}
          alt="service"
          width={1920}
          height={1080}
          style={{ width: "90vw" }}
        />
        <div className="absolute h-full left-0 top-0 flex items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
          <h1 className="text-white text-3xl font-bold flex justify-center items-center ml-8">
            My Bookings
          </h1>
        </div>
      </div>
      <div className="mt-20 mb-20">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th> Name</th>
                <th> email</th>
                <th> Service</th>
                <th>Price</th>
                <th>Booking Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.length > 0 ? (
                bookings.map(({ serviceTitle, _id, name,date, price, email}, index) => (
                  <tr key={_id}>
                    <th>{index + 1}</th>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{serviceTitle}</td>
                    <td>{price}</td>
                    <td>{date}</td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <Link href={`/my-booking/update/${_id}`}>
                          <button className="btn btn-primary">Edit</button>
                        </Link>
                        <button
                         onClick={() => handleDelete(_id)}
                        className="btn btn-primary">Delete</button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  {/* <td colSpan="5" className="text-center">
                    No bookings found
                  </td> */}
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
