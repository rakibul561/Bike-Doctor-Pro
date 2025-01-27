"use client"

import React from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";

const SocialSignin:React.FC = () => {
 
    
  return (
    <div className="flex items-center justify-center space-x-3">
      <button  className="btn  flex items-center justify-center text-green-500">
        <BsGoogle />
      </button>

      <button  className="btn  flex items-center justify-center text-primary">
        <BsGithub />
      </button>
    </div>
  );
};

export default SocialSignin;