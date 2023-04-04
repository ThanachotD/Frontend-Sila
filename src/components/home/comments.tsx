import React, { useState } from "react";

const textComment = ["คอนเสิร์ตนี้ไม่สนุกเลย","เพลงนี้ดีมากเลย","คอนนี้คนเยอะมากเลย","นักร้องเสียงดีมาก","อยากไปอีกจัง","บัตรคอนราคาดีเวอร์","comment 7"
,"comment 8","comment 9","comment 10","comment 11","comment 12"];


const comment = () => {
  const numRows = 6;
  const numCols = 2;
  

  const commentElements = [];
  let textIndex = 0;
  for (let i = 0; i < numRows; i++) {
    const rowElements = [];
    for (let j = 0; j < numCols; j++) {
        
      rowElements.push(
        <div
          key={`${i}-${j}`}
          className="resize bg-white drop-shadow-xl rounded-lg w-52 mb-4 flex justify-center py-10"
        >
          <text className="mx-5 text-888585">"{textComment[textIndex]}"</text>
        </div>
      );
      textIndex++
    }
    commentElements.push(
      <div key={i} className="grid gap-4 grid-cols-2">
        {rowElements}
      </div>
    );
  }

  return (
    <div className="ml-16 mt-7 flex flex-col w-1/2">
      <div>
        <text className="text-3B3046 font-bold text-3xl flex my-2">
        ความเห็นจากผู้คนในอินเตอร์เน็ต
        </text>
        <text className="text-575757 font-bold text-s flex mb-5 ">ที่กำลังได้รับความสนใจ</text>
      </div>
      <div className="w-fit">{commentElements}</div>
    </div>
  );
};

export default comment;
