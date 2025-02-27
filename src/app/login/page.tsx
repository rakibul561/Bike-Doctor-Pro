"use client";
import SocialSignin from "@/components/Shared/SocialSignin ";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SignUpPage = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const newUser = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };
     
    const resp = await fetch("http://localhost:3000/signup/api", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: { "Content-Type": "application/json" }
    });

    if(resp.status === 200){
      event.currentTarget.reset();
    }
  };

  return (
    <div className="container px-6 md:px-24 mx-auto py-12 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <Image
            src="/assets/images/login/login.svg"
            height={400}
            width={400}
            alt="Sign Up"
            className="w-full max-w-xs md:max-w-md"
          />
        </div>
        <div className="border-2 p-6 md:p-12 rounded-lg shadow-lg">
          <h6 className="text-2xl md:text-3xl font-semibold text-primary text-center mb-8">
            Sign Up
          </h6>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="block text-lg font-medium">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="mt-2 w-full input input-bordered"
            />
            <label htmlFor="email" className="block mt-4 text-lg font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="mt-2 w-full input input-bordered"
            />
            <label htmlFor="password" className="block mt-4 text-lg font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Your password"
              className="mt-2 w-full input input-bordered"
            />
            <button
              type="submit"
              className="w-full btn btn-primary mt-8 text-lg"
            >
              Sign Up
            </button>
          </form>
          <div>
            <h6 className="my-8 text-center">or sign in with</h6>
            <SocialSignin />
            <h6 className="my-8 text-center">
              Already have an account?{" "}
              <Link className="text-primary font-semibold" href="/login">
                Sign In
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
