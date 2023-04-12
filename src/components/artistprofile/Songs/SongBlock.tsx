import React from "react";
import logo from "public/songlogo.png";
import Image from "next/image";

interface Props {
  placement: number;
  duration: number;
  name: String;
}

const SongBlock = (props: Props) => {
  return (
    <div className="p-3 mt-3 flex items-center border justify-around rounded-lg">
      {/* placement */}
      <text>#{props.placement}</text>
      <Image src={logo} alt="artist image" width={50} height={50} />
      {/* songs' name */}
      <text className="font-black text-stone-400">{props.name}</text>
      {/* duration */}
      <text className="font-black text-stone-400">{props.duration} นาที</text>
      {/* button */}
      <button
        className="py-1 px-2 text-xs font-black rounded-lg bg-green-500
        hover:bg-black text-white
        transition duration-150"
      >
        Open Spotify
      </button>
    </div>
  );
};

export default SongBlock;
