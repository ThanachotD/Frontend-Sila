import Navbar from "../../components/navbar";
import Comment from "../../components/home/comments";
import BarChart from "../../components/home/graph";
import FevSong from "../../components/home/favoritesongs";

const labels = [
  "ม.ค.",
  "ก.พ.",
  "มี.ค.",
  "เม.ย.",
  "พ.ค.",
  "มิ.ย.",
  "ก.ค.",
  "ส.ค.",
  "ก.ย.",
  "ต.ค.",
  "พ.ย.",
  "ธ.ค.",
];
const data = [87, 59, 80, 81, 56, 55, 40, 55, 70, 76, 85, 100];

const home = () => {
  return (
    <main className="bg-FAFAFA w-screen h-screen">
      <Navbar>
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <div className="col-span-1 row-span-2">
            <Comment />
          </div>
          <div className="col-span-1 row-span-1">
            <BarChart labels={labels} data={data} title="My First Dataset" />
          </div>
          <div className="col-span-1 row-span-1">
            <FevSong />
          </div>
        </div>
      </Navbar>
    </main>
  );
};

export default home;
