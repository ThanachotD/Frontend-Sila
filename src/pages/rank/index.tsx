import Navbar from "../../components/navbar";
import Title from "../../components/ranking/title";
import SongList from "../../components/ranking/songlist";


const rank = () => {
  return (
    <Navbar>
      <main className="bg-FAFAFA w-screen h-screen">
        <Title/>
        <SongList/>
      </main>
    </Navbar>
  );
};

export default rank;
