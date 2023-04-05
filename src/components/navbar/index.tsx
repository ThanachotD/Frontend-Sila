import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import ProfileImg from "../../../public/Profile.png";
import Search from "./Search";
import Link from "next/link";
import NavLink from "./NavLink";

interface props {
  children: JSX.Element;
}

const Navbar = ({ children }: props) => {
  return (
    // <div className="z-10 grid grid-cols-6 border-b border-F5F5F5 bg-242527 p-2 sticky top-0">
    //   <Link className="col-start-1 col-end-3 grid grid-cols-3" href={"/home"}>
    //     <Image src={logo} alt="" width={90} height={90} />
    //     <button className="bg-white hover:bg-F5F5F5 w-11/12 h-full text-black border border-white border-2 focus:border-b-21F5E6">
    //       หน้าหลัก
    //     </button>
    //     <button className="bg-white hover:bg-F5F5F5 w-11/12 h-full text-black border border-white border-2 focus:border-b-21F5E6">
    //       อันดับ
    //     </button>
    //   </Link>

    //   <div className="col-start-3 col-end-6">
    //     <Search />
    //   </div>

    //   <div className="col-start-6 col-end-6 flex justify-end">
    //     <Link
    //       className="grid grid-cols-2 justify-items-stretch flex items-stretch"
    //       href={"/login"}
    //     >
    //       <label className="self-center text-black">Thanasini</label>
    //       <Image
    //         className="justify-self-end"
    //         src={ProfileImg}
    //         alt=""
    //         width={50}
    //         height={50}
    //         priority
    //       />
    //     </Link>
    //   </div>
    // </div>

    <>
      <nav className="flex justify-around items-center sticky top-0 p-2 bg-F5F5F5 drop-shadow">
        {/* Nav Brand */}
        <Link href="/home">
          <Image src={logo} alt="" width={90} height={90} />
        </Link>

        {/* Nav Links */}
        <ul>
          <NavLink path="/home" name="หน้าหลัก" />
          <NavLink path="/home" name="อันดับ" />
        </ul>

        {/* Search Bar */}
        <div className="w-1/3">
          <Search />
        </div>

        {/* User Account */}
        <div className="flex">
          <label className="self-center text-black mx-3">Thanasini</label>
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
