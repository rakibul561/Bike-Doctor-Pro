import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

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
  const { title, img, price, _id } = service || {};
  console.log(service)
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure className="overflow-hidden h-[30vh]">
        <Image height={240} width={640} src={img} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-between items-center">
          <h6 className="text-primary font-semibold">Price : ${price}</h6>
          <Link href={`/services/${_id}`}>
            <FaLongArrowAltRight className="text-2xl text-primary" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
