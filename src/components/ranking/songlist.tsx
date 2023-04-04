import React from "react";
import Image from "next/image";
import btnPic from "./rankPic/btn_Youtube.png";
import pic0 from "./rankPic/pic0.png";
import pic1 from "./rankPic/pic1.png";

const rankingSong = {
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
  time: ["3.50 ", "3.04 ", "3.56 ", "3.56 ", "3.56 ", "3.56 "],
  view: [
    "5,000,000 ",
    "4,351,245 ",
    "4,351,245 ",
    "4,351,245 ",
    "4,351,245 ",
    "4,351,245 ",
  ],
};

const SongList = () => {
  const rows = [];

  for (let i = 0; i < rankingSong.songname.length; i++) {
    rows.push(
      <div
        key={i}
        className="grid grid-cols-12 grid-rows-1 gap-2 bg-white drop-shadow-xl rounded-lg h-28 mb-3 w-3/4"
      >
        <div className="col-span-1 flex items-center justify-center">
          <h2>#{i + 1}</h2>
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <Image
            className="min-h-10 min-w-20 w-20 h-20"
            src={require(`./rankPic/pic${i}.png`)}
            alt="image"
          />
        </div>
        <div className="col-span-2 flex justify-center items-center">
          <h2 className="text-888585">{rankingSong.songname[i]}</h2>
        </div>
        <div className="col-span-2 flex justify-center items-center">
          <h2 className="text-888585">{rankingSong.artist[i]}</h2>
        </div>
        <div className="col-span-2 flex justify-center items-center">
          <h2 className="text-888585">{rankingSong.time[i]} นาที</h2>
        </div>
        <div className="col-span-2 flex justify-center items-center">
          <h2 className="text-888585">{rankingSong.view[i]} View</h2>
        </div>
        <div className="col-span-2 flex justify-center items-center">
          <button>
            <Image
              className="min-w-24 w-32"
              src={btnPic}
              alt="button image"
            />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 grid-rows-6 gap-2 justify-items-center">
    {rows}
  </div>
  );
};

export default SongList;
