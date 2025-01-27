import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="container mx-auto mt-12 ">
      <div className="carousel w-full rounded-xl ">
        {banners?.map((banner, index) => (
          <div
            style={{
              backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${
                index + 1
              }.jpg)`,
            }}
            key={index}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full bg-top bg-no-repeat h-[90vh]"
          >
            <div className="w-full h-full flex  items-center pl-12 lg:pl-36">
              <div className="space-y-6">
                <h1 className="text-white text-xl lg:text-5xl font-bold">
                  {banner.title}{" "}
                </h1>
                <p className="text-white">{banner.description}</p>

                <button className="btn btn-primary mr-4">Discover More</button>
                <button className="btn btn-primary btn-outline">Latest Project</button>
              </div>
            </div>
            <div className="absolute flex justify-between bottom-2 lg:bottom-12  right-12">
              <a href={banner.prev} className="btn btn-circle mr-6 text-primary">
                ❮
              </a>
              <a href={banner.next} className="btn btn-circle text-primary">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const banners = [
    {
      title: "Top-Quality Bike Servicing at Your Fingertips",
      description:
        "Get your bike serviced with expert hands and premium tools to ensure maximum performance and safety.",
      next: "#slide2",
      prev: "#slide4",
    },
    {
      title: "Expert Mechanics You Can Rely On",
      description:
        "Our team of certified mechanics is here to give your bike the care it deserves with attention to detail.",
      next: "#slide3",
      prev: "#slide1",
    },
    {
      title: "Affordable Prices Without Compromising Quality",
      description:
        "Experience the best bike servicing solutions at competitive prices tailored for every budget.",
      next: "#slide4",
      prev: "#slide2",
    },
    {
      title: "Convenient and Hassle-Free Service",
      description:
        "Book your bike servicing appointment online and leave the rest to us for a smooth and quick process.",
      next: "#slide1",
      prev: "#slide3",
    },
  ];
  

export default Banner;
