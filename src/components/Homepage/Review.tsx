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
      <div className="text-center">
        <h3 className="text-2xl font-bold text-orange-600">Core Features</h3>
        <h2 className="text-5xl">Why Choose Us</h2>
        <p className="max-w-2xl mx-auto">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.
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
