import { getReviews } from '@/Services/getServices';
import React from 'react';

const Review = async () => {
    const reviews = await getReviews();
    console.log("Server Data:", reviews);

    if (!reviews || !reviews.reviews || reviews.reviews.length === 0) {
        return <div>No Reviews Available</div>;
    }

    // প্রথম রিভিউ বের করা
    const firstReview = reviews.reviews[0]; 

    console.log("First Review:", firstReview);
   console.log(firstReview.image);
   
    return (
        <div> 
            <h2>{firstReview.name}</h2>
            <img src={firstReview.image} alt={firstReview.name} />
            <p>{firstReview.description}</p>
        </div>
    );
};

export default Review;
