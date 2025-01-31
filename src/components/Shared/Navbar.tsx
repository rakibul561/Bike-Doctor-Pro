'use client'
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";

const Navbar: React.FC = () => {


  const session = useSession();
  // console.log(session)
 

  return (
    <div className="bg-base-100 border text-slate-900">
      <div className="navbar  container mx-auto">
        <div className="navbar-start">
          <Link href={"/"}>
            <Image alt="logo" src="/assets/logo.svg" width={100} height={60} />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="flex items-center space-x-6">
            {/* {navItem?.map((item) => (
              <Link
                
                href={item.title}
                key={item.path}
              >
                {" "}
                {item.title}{" "}
              </Link>
            ))} */}
            
           <Link href={'/'} className="font-bold hover:text-primary"> Home</Link> 
           <Link href={'/about'} className="font-bold hover:text-primary"> About</Link> 
           <Link href={'/services'} className="font-bold hover:text-primary">Services </Link> 
           <Link href={'/my-booking'} className="font-bold hover:text-primary"> My Booking</Link> 
           <Link href={'/blog'} className="font-bold hover:text-primary"> Blog</Link> 
           <Link href={'/contact'} className="font-bold hover:text-primary"> contact</Link> 


       
          </div>
        </div>
        <div className="navbar-end">
          <div className="flex items-center space-x-3">
          <FaShoppingCart className="text-xl" />
            <IoMdSearch  className="text-xl" />
            <a className="btn btn-outline px-8 btn-primary">Appointment</a>
           { !session.data?
            <Link href={'/login'} className="btn  px-8 btn-primary">Login</Link> 
            :
            <button onClick={ () => signOut()} className="btn  px-8 btn-primary" >Logout</button>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

// const navItem = [
//   {
//     title: "Home",
//     path: "/",
//   },
//   {
//     title: "About",
//     path: "/about",
//   },
//   {
//     title: "Services",
//     path: "/services",
//   },
//   {
//     title: "My Booking",
//     path: "/my-booking",
//   },
 
//   {
//     title: "Blog",
//     path: "/blog",
//   },
//   {
//     title: "Contact",
//     path: "/contact",
//   },
  
// ];

export default Navbar;
