import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import ProfileImg from "../../../public/Profile.png";
import { BsFillBellFill, BsPersonCircle } from "react-icons/bs";
import { RiQuestionnaireFill } from "react-icons/ri";
import Search from "./Search";
import Link from "next/link";

const Header = () => {
  return (
    <div className="z-10 grid grid-cols-6 border-b border-F5F5F5 bg-242527 p-2 sticky top-0">
        <Link className="col-start-1 col-end-3 grid grid-cols-3" href={"/home"}>
            <Image src={logo} alt="" width={94} height={52} />            
            <button className="bg-white hover:bg-F5F5F5 w-11/12 h-full text-black border border-white border-2 focus:border-b-21F5E6">หน้าหลัก</button>
            <button className="bg-white hover:bg-F5F5F5 w-11/12 h-full text-black border border-white border-2 focus:border-b-21F5E6">อันดับ</button>
        </Link>

        <div className="col-start-3 col-end-6">
            <Search />
        </div>

        <div className="col-start-6 col-end-6 flex justify-end">
            <Link className="grid grid-cols-2 justify-items-stretch flex items-stretch" href={'/login'}>
                <label className="self-center text-black">Thanasini</label>
                <Image className="justify-self-end" src={ProfileImg} alt="" width={52} height={52} />
            </Link>
        </div>

    </div>
  );
};

export { Header };
