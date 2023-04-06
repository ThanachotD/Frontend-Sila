import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import ProfileImg from "../../../public/Profile.png";
import Search from "./Search";
import Link from "next/link";
import NavLink from "./NavLink";
import { RxHamburgerMenu } from "react-icons/rx";

interface props {
  children: JSX.Element;
}

const Navbar = ({ children }: props) => {
  const [toggle, setToggle] = React.useState(false);
  const toggleDropdown = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <nav className="flex justify-around items-center sticky top-0 p-2 bg-F5F5F5 drop-shadow">
        {/* Nav Brand */}
        <Link href="/home">
          <Image src={logo} alt="" width={60} height={60} />
        </Link>

        {/* Nav Links */}
        <ul className="max-lg:hidden">
          <NavLink path="/home" name="หน้าหลัก" />
          <NavLink path="/rank" name="อันดับ" />
        </ul>

        {/* Search Bar */}
        <div className="w-1/3">
          <Search />
        </div>

        <button className="lg:hidden relative" onClick={() => toggleDropdown()}>
          <RxHamburgerMenu />
          {toggle && (
            <ul className="flex flex-col absolute top-5 right-0 bg-F5F5F5 border">
              <NavLink path="/home" name="หน้าหลัก" />
              <NavLink path="/rank" name="อันดับ" />
            </ul>
          )}
        </button>

        {/* User Account */}
        <div className="flex">
          <label className="max-lg:hidden self-center text-black mx-3">
            Thanasini
          </label>
          <Link
            className="justify-items-stretch flex items-stretch"
            href={"/login"}
          >
            <Image src={ProfileImg} alt="" width={50} height={50} />
          </Link>
        </div>
      </nav>

      {children}
    </>
  );
};

export default Navbar;
