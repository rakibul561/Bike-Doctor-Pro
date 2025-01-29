"use client"


import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";

const SocialSignin:React.FC = () => {
  const router = useRouter();
  const session = useSession();
  const handleSignin =  (provider: string) =>{
    console.log(provider);
    
  
    // const resp = await signIn(provider)
    const resp =  signIn(provider, {redirect: false})
  console.log(resp);
    
  if(session.status === 'authenticated'){
    router.push('/')
  }
  } 
  
 
    
  return (
    <div className="flex items-center justify-center space-x-3">
      <button  className="btn  flex items-center justify-center text-green-500">
        <BsGoogle  onClick={() =>handleSignin('google')}/>
      </button>

      <button  className="btn  flex items-center justify-center text-primary">
        <BsGithub  onClick={() =>handleSignin('github')} />
      </button>
    </div>
  );
};

export default SocialSignin;