/* eslint-disable prefer-const */
import { getReviews } from "@/Services/getServices";
import React from "react";
import AllReview from "../cards/AllReview";

const Review = async () => {
  let data = await getReviews(); // সম্পূর্ণ ডাটা নিয়ে আসা হলো
  console.log("Server Data:", data);

  let reviews = data?.reviews; // data থেকে reviews বের করে নেওয়া

  if (!Array.isArray(reviews)) {
    reviews = []; // যদি অ্যারে না হয়, খালি অ্যারে সেট করুন
  }

  return (
    <div className="mt-20 mb-20">
      <div className="text-center space-y-2">
        <h3 className="text-3xl font-bold text-orange-600">Testimonial</h3>
        <h2 className="text-5xl font-bold">What Our Customers Say</h2>
        <p className="max-w-2xl mx-auto">
          Our customers love the products and services we offer. Here's what
          they have to say about their experiences. From excellent quality to
          exceptional customer support, we take pride in making every
          interaction a positive one.
        </p>
      </div>
      <div className="grid grid-cols-1 mt-20  max-w-7xl mx-auto lg:grid-cols-3">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <AllReview key={review._id} review={review} />
          ))
        ) : (
          <p>No reviews found</p>
        )}
      </div>
    </div>
  );
};

export default Review;
