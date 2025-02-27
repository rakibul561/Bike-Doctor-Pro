"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { toast } from "react-toastify";

const SocialSignin: React.FC = () => {
  const router = useRouter();

  // Handle Sign In
  const handleSignin = async (provider: string) => {
    // Sign in with the provider
    const resp = await signIn(provider, { redirect: false });

    console.log(resp);

    // Check if login is successful
    if (resp?.error) {
      toast.error("Login failed, please try again.");
    } else if (resp?.ok) {
      // On successful login
      toast.success("Login successful!");
      router.push("/"); // Redirect to home page after successful login
    }
  };

  return (
    <div className="flex items-center justify-center space-x-3">
      <button className="btn flex items-center justify-center text-green-500">
        <BsGoogle onClick={() => handleSignin("google")} />
      </button>

      <button className="btn flex items-center justify-center text-primary">
        <BsGithub onClick={() => handleSignin("github")} />
      </button>
    </div>
  );
};

export default SocialSignin;
