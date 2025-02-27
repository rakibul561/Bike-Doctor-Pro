import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import "aos/dist/aos.css";
import Aos from "aos";

// টাইপ ডিফাইন
interface Facility {
  name: string;
  details: string;
}

interface Service {
  _id: string;
  service_id: string;
  title: string;
  img: string;
  price: number; // price এর টাইপ পরিবর্তন করে number করা হয়েছে
  description: string;
  facility: Facility[];
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {

   useEffect(()=>{
    Aos.init();
   },[])
  const { title, img, price, _id } = service || {};

  return (
    <Link href={`/services/${_id}`}>
      <div className="p-4 border rounded-lg shadow-lg" data-aos= "zoom-in">
        <div className="w-full h-48 md:h-64 lg:h-72 relative">
          <Image
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
            src={img}
            alt="product"
          />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>

        <div className="flex justify-between">
          <p className="">
            <span className="text-orange-600 font-bold">Price:${price}</span>
          </p>
          <FaLongArrowAltRight className="text-3xl text-primary" />
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
