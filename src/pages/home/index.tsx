import Navbar from "../../components/navbar";
import Artist from "../../components/home/artist";
import BarChart from "../../components/home/graph";
import FevSong from "../../components/home/favoritesongs";

const dataset = {
  data: [
    "คอนจัสตินยกเลิก",
    "The 1975",
    "คอนLany",
    "บลิ๊งมาไทย",
    "Lisa",
    "พี่ตูนวิ่ง",
    "เราจะทำตามสัญญา",
    "คอนตปท",
    "คอนแบมๆ",
    "แจคสันหวัง",
  ],
  value: [87, 59, 80, 81, 56, 55, 40, 55, 70, 76],
};

const home = () => {
  return (
    <main className="bg-FAFAFA w-screen h-screen">
      <Navbar>
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <div className="col-span-1 row-span-2 ml-16">
            <FevSong />
          </div>
          <div className="col-span-1 row-span-1">
            <BarChart
              labels={dataset.data}
              data={dataset.value}
              title="My First Dataset"
            />
          </div>
          <div className="col-span-1 row-span-1">
            <Artist />
          </div>
        </div>
      </Navbar>
    </main>
  );
};

export default home;
