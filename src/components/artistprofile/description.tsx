import React from "react";
import Social from "@/components/artistprofile/social";

import { BsSpotify, BsTwitter, BsYoutube } from "react-icons/bs";

interface Props {
  follower: String;
}

const Description = (props: Props) => {
  return (
    <section className="flex flex-col my-5">
      <text className="font-black">ยอดผู้ติดตามทั้งหมด {props.follower}</text>
      <text className="text-stone-400 text-sm">ข้อมูลย้อนหลัง 30 วัน</text>
      <div className="flex my-3">
        <Social name={"SPOTIFY"} icon={<BsSpotify />} follower={"700,439"} />
        <Social name={"TWITTER"} icon={<BsTwitter />} follower={"700,439"} />
        <Social name={"YOUTUBE"} icon={<BsYoutube />} follower={"700,439"} />
      </div>
    </section>
  );
};

export default Description;
