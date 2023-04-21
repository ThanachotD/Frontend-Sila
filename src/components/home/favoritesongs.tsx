import React from "react";
import Image from "next/image";
import pic0 from "../ranking/rankPic/pic0.png";
import pic1 from "../ranking/rankPic/pic1.png";
import pic2 from "../ranking/rankPic/pic2.png";
import pic3 from "../ranking/rankPic/pic3.png";
import pic4 from "../ranking/rankPic/pic4.png";

const musicFev = {
  songname: [
    "กี่เพลงรักผ่านไป",
    "How to Gang",
    "ธาตุทองซาวด์",
    "ข้างกัน",
    "ตะเกียงวิเศษ",
    "OMG",
  ],
  artist: [
    "No One Else",
    "Tangbadvoice",
    "YOUNGOHM",
    "Three man down",
    "Minnie CAC",
    "Newjeans",
  ],
};

const pics = [pic0, pic1, pic2, pic3, pic4];

const favoritesong = () => {
  return (
    <div className="mt-7 flex flex-col w-4/5 ml-20">
      <div>
        <h1 className="text-3B3046 font-bold text-3xl flex my-2 mb-7">
          คนไทยชอบฟังเพลงอะไรกัน
        </h1>
      </div>

      {[...Array(5)].map((_, i) => (
        <div key={i} className="grid grid-cols-6 grid-rows-1 gap-2 bg-white drop-shadow-xl rounded-lg h-28 mb-5">
          <div className="col-span-1 flex items-center justify-center">
            <h2>#{i+1}</h2>
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <Image className="min-h-10 min-w-20 w-20 h-20" src={pics[i]} alt="Example image"/>
          </div>
          <div className="col-span-2 flex justify-center items-center">
            <h2 className="text-888585">{musicFev.songname[i]}</h2>
          </div>
          <div className="col-span-2 flex justify-start items-center">
            <h2 className="text-888585">{musicFev.artist[i]}</h2>
          </div>
        </div>
      ))}

    </div>
  );
};

export default favoritesong;
