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
  price: number; // price টাইপ পরিবর্তন করা হয়েছে
  description: string;
  facility: Facility[];
}

const getServices = async (): Promise<Service[]> => {
  const res = await fetch('http://localhost:3000/services/api/get-all');
  const data = await res.json();
  return data.services; // এখানে `services` অ্যারে ফেরত আসছে
}

const Services: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getServices();
      console.log('Data is ready', data);
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
            the majority have suffered alteration in some form, by injected
            humour, or randomised <br /> words which do not look even slightly
            believable.
          </p>
        </div>
        {/* প্রথম ৬টি সার্ভিস দেখানোর জন্য slice ব্যবহার */}
        <div className="container mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
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
