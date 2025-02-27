import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div className="  max-w-7xl mx-auto px-4 mb-10  ">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-orange-600">Core Features</h3>
        <h2 className="text-5xl">Why Choose Us</h2>
        <p className="max-w-2xl mx-auto">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.
        </p>
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-10 justify-center">
        {[
          { src: "/assets/icons/check.svg", title: "100% Guarantee" },
          { src: "/assets/icons/deliveryt.svg", title: "Timely Delivery" },
          { src: "/assets/icons/Wrench.svg", title: "Best Equipment" },
          { src: "/assets/icons/person.svg", title: "24/7 Support" },
          { src: "/assets/icons/quote.svg", title: "Question" },
          { src: "/assets/icons/group.svg", title: "Expert Team" },
        ].map((feature, index) => (
          <div
            key={index}
            className="w-full sm:w-32 p-6 border hover:text-primary flex flex-col items-center transition-transform duration-500 hover:scale-150 text-center"
          >
            <Image width={50} height={50} src={feature.src} alt={feature.title} />
            <h1 className="font-bold mt-2">{feature.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
