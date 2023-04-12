import React from "react";
import SongBlock from "./SongBlock";

const index = () => {
  return (
    <section>
      <text className="font-black">เพลงที่ได้รับความนิยมมากที่สุด</text>
      <div>
        <SongBlock placement={1} name={"Loser"} duration={3.41} />
        <SongBlock placement={2} name={"Loser"} duration={3.41} />
        <SongBlock placement={3} name={"Loser"} duration={3.41} />
        <SongBlock placement={4} name={"Loser"} duration={3.41} />
      </div>
    </section>
  );
};

export default index;
