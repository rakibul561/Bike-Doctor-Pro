import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";

const Navbar: React.FC = () => {
  const navItem = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

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
            {navItem?.map((item) => (
              <Link
                className="font-bold hover:text-primary"
                href={item.title}
                key={item.path}
              >
                {" "}
                {item.title}{" "}
              </Link>
            ))}
          </div>
        </div>
        <div className="navbar-end">
          <div className="flex items-center space-x-3">
          <FaShoppingCart className="text-xl" />
            <IoMdSearch  className="text-xl" />
            <a className="btn btn-outline px-8 btn-primary">Appointment</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
