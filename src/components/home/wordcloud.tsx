import React from 'react';
import ReactWordcloud from 'react-wordcloud';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

const words = [
  { text: 'คอนจัสตินยกเลิก', value: 20 },
  { text: 'The 1975', value: 10 },
  { text: 'คอนLany', value: 5 },
  { text: 'บลิ๊งมาไทย', value: 15 },
  { text: 'Lisa', value: 25 },
  { text: 'พี่ตูนวิ่ง', value: 30 },
  { text: 'เราจะทำตามสัญญา', value: 10 },
  { text: 'คอนตปท', value: 20 },
  { text: 'คอนแบมๆ', value: 15 },
  { text: 'แจคสันหวัง', value: 30 },
];

const WordCloud = () => {
  const callbacks = {
    onWordClick: console.log,
    onWordMouseOver: console.log,
    onWordMouseOut: console.log,
  };

  const options = {
    rotations: 2,
    rotationAngles: [-45, 0],
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <ReactWordcloud words={words} callbacks={callbacks} options={options} />
    </div>
  );
};

export default WordCloud;
