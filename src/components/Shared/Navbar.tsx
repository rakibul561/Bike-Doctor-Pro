'use client'
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";

const Navbar: React.FC = () => {
  const session = useSession();

  return (
    <div className="bg-base-100 border text-slate-900 w-full">
      <div className="navbar container mx-auto flex flex-wrap items-center justify-between">
        <div className="navbar-start flex items-center w-full md:w-auto justify-center md:justify-start">
          <Link href={"/"}>
            <Image alt="logo" src="/assets/logo.svg" width={100} height={60} />
          </Link>
        </div>
        <div className="navbar-center hidden md:flex flex-wrap justify-center space-x-4">
          <Link href={'/'} className="font-bold hover:text-primary">Home</Link>
          <Link href={'/about'} className="font-bold hover:text-primary">About</Link>
          <Link href={'/service'} className="font-bold hover:text-primary">Services</Link>
          <Link href={'/my-booking'} className="font-bold hover:text-primary">My Booking</Link>
          <Link href={'/blog'} className="font-bold hover:text-primary">Blog</Link>
          <Link href={'/contact'} className="font-bold hover:text-primary">Contact</Link>
        </div>
        <div className="navbar-end flex flex-wrap items-center justify-end space-x-3 w-full md:w-auto mt-4 md:mt-0">
         <Link href='my-booking'>  <FaShoppingCart className="text-3xl mr-4" /></Link>
          {/* <IoMdSearch className="text-xl" /> */}
          <Link 
           href='/service'
          className="btn btn-outline px-4 md:px-8 btn-primary hover:bg-primary hover:text-white">Appointment</Link>

          {!session.data ? (
            <Link href={'/login'} className="btn px-4 md:px-8 btn-primary">Login</Link>
          ) : (
            <button onClick={() => signOut()} className="btn px-4 md:px-8 btn-primary">Logout</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
