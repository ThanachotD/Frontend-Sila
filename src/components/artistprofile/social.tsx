import React from "react";

interface Props {
  name: String;
  icon: JSX.Element;
  follower: String;
}

const Social = (props: Props) => {
  return (
    <div className="mr-10">
      <text className="font-black">{props.name} FOLLOWERS</text>
      <div className="flex items-center mt-2">
        <text className="text-4xl">{props.icon}</text>
        <text className="mx-2 text-lg">{props.follower}</text>
      </div>
    </div>
  );
};

export default Social;
