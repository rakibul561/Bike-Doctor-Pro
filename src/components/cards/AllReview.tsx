import React from 'react';

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
            <div className="container px-6 py-10 mx-auto">
               

                {/* রিভিউ ডাটা ডায়নামিকভাবে দেখানো */}
                <div className="grid grid-cols-1  gap-8 mt-8 xl:mt-12 lg:grid-cols-3 xl:grid-cols-3">
                    <div className="p-8 border rounded-lg dark:border-gray-700">
                        <p className="leading-loose text-gray-500 dark:text-gray-400">
                            {review.comment || "No comment provided"}
                        </p>

                        <div className="flex items-center mt-8 -mx-2">
                            <img 
                                className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" 
                                src={review.image || "https://via.placeholder.com/150"} 
                                alt={review.name || "Reviewer"} 
                            />

                            <div className="mx-2">
                                <h1 className="font-semibold text-gray-800 dark:text-white">{review.name || "Anonymous"}</h1>
                                <span className="text-sm text-gray-500">Rating: {review.rating ? `${review.rating} / 5` : "No rating given"}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllReview;
