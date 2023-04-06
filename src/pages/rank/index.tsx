import Navbar from "../../components/navbar";
import Title from "../../components/ranking/title";
import SongList from "../../components/ranking/songlist";


const rank = () => {
  return (
    <main className="bg-FAFAFA w-screen h-screen">
      <Navbar>
        <main>
          <Title/>
          <SongList/>
        </main>
      </Navbar>

    </main>
  );
};

export default rank;
