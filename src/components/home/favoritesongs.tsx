import React from "react";
import Image from "next/image";
import pic1 from "./musicPic/Music_Pic_1.png";
import pic2 from "./musicPic/Music_Pic_2.png";

const musicFev = {songname:["กี่เพลงรักที่ผ่านไป","How to gang"],artist:["no one else","Tangbadvoice"]};


const favoritesong = () => {
  return (
    <div className="mt-7 flex flex-col w-4/5">
      <div>
        <h1 className="text-3B3046 font-bold text-3xl flex my-2 mb-7">
          คนไทยชอบฟังเพลงอะไรกัน
        </h1>
      </div>

      <div className="grid grid-cols-6 grid-rows-1 gap-2 bg-white drop-shadow-xl rounded-lg h-28 mb-5">
        <div className="col-span-1 flex items-center justify-center">
          <h2>#1</h2>
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <Image className="min-h-10 min-w-20 w-20 h-20"src={pic1} alt="Example image"/>
        </div>
        <div className="col-span-2 flex justify-center items-center">
            <h2 className="text-888585">{musicFev.songname[0]}</h2>
        </div>
        <div className="col-span-2 flex justify-start items-center">
            <h2 className="text-888585">{musicFev.artist[0]}</h2>
        </div>
      </div>

      <div className="grid grid-cols-6 grid-rows-1 gap-2 bg-white drop-shadow-xl rounded-lg h-28">
        <div className="col-span-1 flex items-center justify-center">
          <h2>#2</h2>
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <Image className="min-h-10 min-w-20 w-20 h-20"src={pic2} alt="Example image"/>
        </div>
        <div className="col-span-2 flex justify-center items-center">
            <h2 className="text-888585">{musicFev.songname[1]}</h2>
        </div>
        <div className="col-span-2 flex justify-start items-center">
            <h2 className="text-888585">{musicFev.artist[1]}</h2>
        </div>
      </div>

    </div>
  );
};

export default favoritesong;
