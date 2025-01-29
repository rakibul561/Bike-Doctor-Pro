"use client"


import { signIn } from "next-auth/react";
import React from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";

const SocialSignin:React.FC = () => {
   
  const handleSignin = async (provider: string) =>{
  
    // const resp = await signIn(provider)
    const resp = await signIn(provider)
  console.log(resp);
   
  } 
  
 
    
  return (
    <div className="flex items-center justify-center space-x-3">
      <button  className="btn  flex items-center justify-center text-green-500">
        <BsGoogle  onClick={() =>handleSignin('goole')}/>
      </button>

      <button  className="btn  flex items-center justify-center text-primary">
        <BsGithub />
      </button>
    </div>
  );
};

export default SocialSignin;