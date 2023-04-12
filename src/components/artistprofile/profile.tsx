import React from "react";
import Image from "next/image";
import artist from "../../../public/artist.png";

interface Props {
  name: String;
  description: String;
  nation: String;
  type: String;
}

const Profile = (props: Props) => {
  return (
    <section className="flex">
      {/* Profile image */}
      <Image src={artist} alt="artist image" width={150} height={150} />

      {/* Profile description */}
      <div className="flex flex-col justify-center mx-5">
        <text className="mx-2 text-xl font-black">{props.name}</text>
        <text className="mx-2 text-stone-400 text-sm">{props.description}</text>

        <div className="flex mt-5">
          <text className="mx-2">{props.nation}</text>
          <text className="mx-2 bg-yellow-200 px-2 py-1 rounded-lg text-xs text-yello-600">
            {props.type}
          </text>
        </div>
      </div>
    </section>
  );
};

export default Profile;
