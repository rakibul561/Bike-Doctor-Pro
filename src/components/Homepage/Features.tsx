import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div className="container mx-auto  mb-10">
      <div className="text-center container mx-auto">
        <h3 className="text-2xl font-bold text-orange-600">Core Features</h3>
        <h2 className="text-5xl">Why Choose Us</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="flex  lg:ml-44 lg:gap-20 gap-6 mt-5">
      <div className="w-32 p-8 hover:text-primary border">
        <Image  width={100} height={200} src={"/assets/icons/check.svg"} alt="iamge"/>
        <h1 className="text-center font-bold mt-2">100% Guranty</h1>
        </div>

        <div className="w-32 p-8 hover:text-primary border">
        <Image  width={100} height={200} src={"/assets/icons/deliveryt.svg"} alt="iamge"/>
        <h1 className="text-center font-bold mt-2">Timely Delivery</h1>
        </div>
        <div className="w-32 p-8 hover:text-primary border">
        <Image  width={100} height={200} src={"/assets/icons/Wrench.svg"} alt="iamge"/>
        <h1 className="text-center font-bold mt-2">Best Equipment</h1>
        </div>


        <div className="w-32 p-8 hover:text-primary border">
        <Image  width={100} height={200} src={"/assets/icons/person.svg"} alt="iamge"/>
        <h1 className="text-center font-bold mt-2">24/7 Support</h1>
        </div>



        <div className="w-32 p-8 hover:text-primary border">
        <Image  width={100} height={200} src={"/assets/icons/quote.svg"} alt="iamge"/>
        <h1 className="text-center font-bold mt-2">question</h1>
        </div>


        <div className="w-32 p-8 hover:text-primary border">
        <Image  width={100} height={200} src={"/assets/icons/group.svg"} alt="iamge"/>
        <h1 className="text-center font-bold mt-2">Expert Team</h1>
        </div>

       
      

       


      </div>
    </div>
  );
};

export default Features;
