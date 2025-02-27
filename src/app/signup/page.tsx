"use client";



import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const formRef = useRef<HTMLFormElement | null>(null); // Use ref to reference the form

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
      headers: {
        "content-type": "application/json",
      },
    });

    if (resp.status === 200) {
      // Check if the form is available before calling reset
      if (formRef.current) {
        formRef.current.reset();
      }
      toast.success("Signup successful!");
    }
  };

  return (
    <div className="container mx-auto px-6 sm:px-12 py-12 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Image Section */}
        <div className="hidden lg:flex justify-center">
          <Image
            src="/assets/images/login/login.svg"
            height={400}
            width={400}
            alt="login image"
            className="w-full max-w-md"
          />
        </div>

        {/* Right Form Section */}
        <div className="border-2 p-6 sm:p-10 rounded-lg shadow-lg w-full max-w-lg mx-auto">
          <h6 className="text-2xl sm:text-3xl font-semibold text-primary text-center mb-6">
            Sign Up
          </h6>
          <form onSubmit={handleSubmit} ref={formRef} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="mt-2 w-full input input-bordered"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="mt-2 w-full input input-bordered"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Your password"
                className="mt-2 w-full input input-bordered"
                required
              />
            </div>

            <button type="submit" className="w-full btn btn-primary text-lg">
              Sign Up
            </button>
          </form>

          <div className="mt-6 text-center">
            {/* <h6 className="text-gray-600">or sign in with</h6>
            <SocialSignin /> */}
          </div>

          <h6 className="mt-6 text-center">
            Already have an account?{" "}
            <Link className="text-primary font-semibold" href={"/login"}>
              Sign In
            </Link>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
