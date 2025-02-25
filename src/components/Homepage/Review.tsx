/* eslint-disable prefer-const */
import { getReviews } from '@/Services/getServices';
import React from 'react';
import AllReview from '../cards/AllReview';

const Review = async () => {
    let data = await getReviews();  // সম্পূর্ণ ডাটা নিয়ে আসা হলো
    console.log("Server Data:", data);

    let reviews = data?.reviews;  // data থেকে reviews বের করে নেওয়া

    if (!Array.isArray(reviews)) {
        reviews = [];  // যদি অ্যারে না হয়, খালি অ্যারে সেট করুন
    }

    return (
        <div className="p-4">
            {reviews.length > 0 ? (
                reviews.map((review) => (
                    <AllReview key={review._id} review={review} />
                ))
            ) : (
                <p>No reviews found</p>
            )}
        </div>
    );
};

export default Review;
