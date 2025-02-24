import { getProductDetails } from "@/Services/getServices";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page: React.FC<{ params: { id: string } }> = async ({ params }) => {
  const detailse = await getProductDetails(params.id);
  console.log("Server Response: ", detailse);

  if (!detailse || !detailse.product) {
    return (
      <div className="text-center text-red-500 text-lg py-10">
        Product details not found.
      </div>
    );
  }

  const { img, _id, name, description, price } = detailse.product;
  console.log("Product Price: ", price);

  return (
    <div className="w-11/12 mx-auto my-10 max-w-7xl">
      <div>
        <div className="relative h-64 md:h-80 lg:h-96">
          <Image
            className="absolute w-full h-full object-cover rounded-lg"
            src={img}
            alt="service"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-[#151515] to-transparent px-4">
            <h1 className="text-white text-xl md:text-3xl font-bold">
              Details of {name}
            </h1>
          </div>
        </div>

        <div className="p-6 md:p-10 bg-gray-100 rounded-lg mt-6">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-600">{name}</h2>
          <p className="text-sm md:text-base mt-2">{description}</p>
        </div>
      </div>

      <div className="my-6 flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/2">
          <Image
            className="w-full rounded-xl object-cover"
            src="/assets/images/banner/1.jpg"
            alt="checkout service"
            width={800}
            height={500}
          />
        </div>
        <div className="w-full lg:w-1/2 p-6 bg-gray-100 rounded-lg">
          <div className="h-48 md:h-60 space-y-2 bg-black p-4 flex flex-col items-center justify-center text-center rounded-lg">
            <Image
              className="w-24 h-auto"
              alt="logo"
              src="/assets/logo.svg"
              width={100}
              height={60}
            />
            <h1 className="text-white text-lg md:text-xl font-semibold">
              Need Help? We Are Here To Help You
            </h1>
          </div>
          <Image
            className="w-full object-cover h-32 md:h-40 rounded-lg mt-4"
            src="/assets/images/checkout/checkout.png"
            alt="checkout service"
            width={400}
            height={400}
          />
          <div className="flex items-center justify-between my-4">
            <h2 className="text-lg md:text-xl font-bold">Price: </h2>
            <p className="text-2xl text-rose-500">${price}</p>
          </div>
          <Link href={`/checkout/${_id}`}>
            <button className="bg-rose-500 px-4 py-2 rounded-lg w-full text-white text-lg font-semibold">
              Check out
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
