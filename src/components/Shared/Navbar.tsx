'use client';
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"; // For hamburger and close icons

const Navbar: React.FC = () => {
  const session = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility

  return (
    <div className="bg-base-100 border text-slate-900 w-full">
      <div className="navbar container mx-auto flex flex-wrap items-center justify-between">
        <div className="navbar-start flex items-center w-full md:w-auto justify-between md:justify-start">
          <Link href={"/"}>
            <Image alt="logo" src="/assets/logo.svg" width={100} height={60} />
          </Link>
          {/* Hamburger Icon for small devices */}
          <div className="md:hidden flex items-center" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <HiOutlineX className="text-3xl cursor-pointer" />
            ) : (
              <HiOutlineMenu className="text-3xl cursor-pointer" />
            )}
          </div>
        </div>

        {/* Nav links for large screens */}
        <div className={`navbar-center hidden md:flex flex-wrap justify-center space-x-4 ${isMenuOpen ? 'block' : 'hidden md:block'}`}>
          <Link href={'/'} className="font-bold hover:text-primary">Home</Link>
          <Link href={'/about'} className="font-bold hover:text-primary">About</Link>
          <Link href={'/service'} className="font-bold hover:text-primary">Services</Link>
          <Link href={'/my-booking'} className="font-bold hover:text-primary">My Booking</Link>
          <Link href={'/blog'} className="font-bold hover:text-primary">Blog</Link>
          <Link href={'/contact'} className="font-bold hover:text-primary">Contact</Link>
        </div>

        {/* Cart and Appointment button */}
        <div className="navbar-end flex flex-wrap items-center justify-end space-x-3 w-full md:w-auto mt-4 md:mt-0">
          <Link href='/my-booking'>
            <FaShoppingCart className="text-3xl mr-4" />
          </Link>
          <Link href='/service' className="btn btn-outline px-4 md:px-8 btn-primary hover:bg-primary hover:text-white">Appointment</Link>

          {!session.data ? (
            <Link href={'/login'} className="btn px-4 md:px-8 btn-primary">Login</Link>
          ) : (
            <button onClick={() => signOut()} className="btn px-4 md:px-8 btn-primary">Logout</button>
          )}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} w-full bg-primary text-white text-center py-4 px-6 `}>
  <Link href={'/'} className="block font-bold text-xl  hover:bg-primary hover:text-white rounded-lg transition-all duration-300 ease-in-out border-b-2 border-transparent hover:border-primary">Home</Link>
  <Link href={'/about'} className="block font-bold text-xl py-1 hover:bg-primary hover:text-white rounded-lg transition-all duration-300 ease-in-out border-b-2 border-transparent hover:border-primary">About</Link>
  <Link href={'/service'} className="block font-bold text-xl py-1 hover:bg-primary hover:text-white rounded-lg transition-all duration-300 ease-in-out border-b-2 border-transparent hover:border-primary">Services</Link>
  <Link href={'/my-booking'} className="block font-bold text-xl py-1 hover:bg-primary hover:text-white rounded-lg transition-all duration-300 ease-in-out border-b-2 border-transparent hover:border-primary">My Booking</Link>
  <Link href={'/blog'} className="block font-bold text-xl py-1 hover:bg-primary hover:text-white rounded-lg transition-all duration-300 ease-in-out border-b-2 border-transparent hover:border-primary">Blog</Link>
  <Link href={'/contact'} className="block font-bold text-xl py-1 hover:bg-primary hover:text-white rounded-lg transition-all duration-300 ease-in-out border-b-2 border-transparent hover:border-primary">Contact</Link>
</div>

    </div>
  );
};

export default Navbar;
