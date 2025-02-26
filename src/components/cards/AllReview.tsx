import React from "react";
import Rating from "react-rating";

interface ReviewProps {
  review: {
    _id: string;
    name?: string;
    comment?: string;
    rating?: number;
    image?: string;
  };
}

const AllReview: React.FC<ReviewProps> = ({ review }) => {
  console.log("Received Review Data:", review);

  return (
    <section className="bg-white dark:bg-gray-900">
        
      <div className=" px-4 py-2 ">
        {/* রিভিউ ডাটা ডায়নামিকভাবে দেখানো */}
        <div className="">
          <div className="p-8 space-y-4 border rounded-lg dark:border-gray-700">
            <div className="flex items-center  -mx-2">
              <img
                className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                src={review.image || "https://via.placeholder.com/150"}
                alt={review.name || "Reviewer"}
              />

              <div className="mx-2">
                <h1 className="font-semibold text-gray-800 dark:text-white">
                  {review.name || "Anonymous"}
                </h1>
                {/* <span className="text-sm text-gray-500">Rating: {review.rating ? `${review.rating} / 5` : "No rating given"}</span> */}
                <span className="text-yellow-400 text-sm">★</span>
                <span className="text-sm text-gray-600 ml-1">
                  ({review.rating} reviews)
                </span>
              </div>
            </div>

            <p className="leading-loose text-gray-500 dark:text-gray-400">
              {review.comment || "No comment provided"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllReview;
