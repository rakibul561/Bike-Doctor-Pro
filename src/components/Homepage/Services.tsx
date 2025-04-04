'use client'

import React, { useEffect, useState } from 'react';
import ServiceCard from '../cards/ServiceCard';
import Link from 'next/link'; // Next.js এর লিঙ্ক কম্পোনেন্ট

interface Facility {
  name: string;
  details: string;
}

interface Service {
  _id: string;
  service_id: string;
  title: string;
  img: string;
  price: number;
  description: string;
  facility: Facility[];
}

const getServices = async (): Promise<Service[]> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/services/api/get-all`);
    const data = await res.json();
    return data.services; // এখানে `services` অ্যারে ফেরত আসছে
  } catch (error) {
    console.error("Error fetching services:", error);
    return []; // Error হলে খালি অ্যারে ফেরত দেবো
  }
}

const Services: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getServices();
      setServices(data);
    };

    fetchData();
  }, []); 

  return (
    <div>
      <div className="text-slate-800 mb-24">
        <div className="text-center container mx-auto">
          <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
          <h2 className="text-5xl">Our Service Area</h2>
          <p>
            We offer a wide range of high-quality services tailored to meet your specific needs. <br /> 
            Our expert team is dedicated to providing exceptional solutions that bring value and satisfaction <br /> 
            to our clients. Explore our services and discover how we can assist you in achieving your goals.
          </p>
        </div>

        <div className="max-w-7xl mx-auto p-2 lg:p-0 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((service) => (
            <ServiceCard service={service} key={service._id} />
          ))}
        </div>

        {/* Show All Services বাটন */}
        <div className="text-center mt-8">
          <Link href="/service">
            <button className="px-6 py-2 bg-primary text-white rounded hover:bg-primary">
              Show All Services
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
