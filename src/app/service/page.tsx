'use client'

import ServiceCard from '@/components/cards/ServiceCard';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/services/api/get-all`);
    return res.data.services;
  } catch (error) {
    console.error("Error fetching services:", error);
    return []; // যদি কোনো সমস্যা হয়, খালি অ্যারে রিটার্ন করবে
  }
}

const AllServices: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getServices();
      setServices(data);
    };

    fetchData();
  }, []);

  return (
    <div className="text-slate-800 mb-24">
      <div className="text-center container mx-auto">
        <h3 className="text-2xl font-bold text-orange-600"></h3>
        <h2 className="text-5xl font-bold font-mono">All Services</h2>
      </div>
      {/* এখানে সকল সার্ভিস দেখানো হচ্ছে */}
      <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard service={service} key={service._id} />
        ))}
      </div>
    </div>
  );
};

export default AllServices;
