import React from "react";
import Image from "next/image";
import pic1 from "./artistPic/artistpic1.png";
import youtubeIcon from "./artistPic/youtubeIcon.png";
import spotifyIcon from "./artistPic/spotifyIcon.png";

const musicFev = {
  artistname: ["ชาลี พูท", "ยังอม"],
  artistinfo: ["นักร้อง - นักแต่งเพลง", "นักร้อง - นักแต่งเพลง"],
};

const artist = () => {
  return (
    <div className="mt-7 flex flex-col w-4/5">
      <div>
        <h1 className="text-3B3046 font-bold text-3xl flex my-2 mb-7">
          ศิลปินที่กำลังมาแรง
        </h1>
      </div>

      <div className="grid grid-cols-6 grid-rows-1 gap-2 bg-white drop-shadow-xl rounded-lg h-28 mb-5">
        <div className="col-span-1 flex items-center justify-center font-bold">
          <h2>1st</h2>
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <Image
            className="min-h-10 min-w-20 w-20 h-20"
            src={pic1}
            alt="Example image"
          />
        </div>
        <div className="col-span-1 flex justify-start items-center">
          <h2 className="font-bold">{musicFev.artistname[0]}</h2>
        </div>
        <div className="col-span-2 flex justify-start items-center">
          <h2 className="text-888585">{musicFev.artistinfo[0]}</h2>
        </div>

        <div className="col-span-1 flex justify-start items-center space-x-2">
          <button>
            <Image
              className="min-h-10 min-w-20 w-10 h-7"
              src={youtubeIcon}
              alt="youtube"
            />
          </button>
          <button>
            <Image
              className="min-h-10 min-w-20 w-10 h-10"
              src={spotifyIcon}
              alt="youtube"
            />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-6 grid-rows-1 gap-2 bg-white drop-shadow-xl rounded-lg h-28">
        <div className="col-span-1 flex items-center justify-center font-bold">
          <h2>2nd</h2>
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <Image
            className="min-h-10 min-w-20 w-20 h-20"
            src={pic1}
            alt="Example image"
          />
        </div>
        <div className="col-span-1 flex justify-start items-center">
          <h2 className="font-bold">{musicFev.artistname[1]}</h2>
        </div>
        <div className="col-span-2 flex justify-start items-center">
          <h2 className="text-888585">{musicFev.artistinfo[1]}</h2>
        </div>

        <div className="col-span-1 flex justify-start items-center space-x-2">
          <button>
            <Image
              className="min-h-10 min-w-20 w-10 h-7"
              src={youtubeIcon}
              alt="youtube"
            />
          </button>
          <button>
            <Image
              className="min-h-10 min-w-20 w-10 h-10"
              src={spotifyIcon}
              alt="spotify"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default artist;
