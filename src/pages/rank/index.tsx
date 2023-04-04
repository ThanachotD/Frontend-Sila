import { Header } from "../../components/navbar";
import Title from "../../components/ranking/title";
import SongList from "../../components/ranking/songlist";


const rank = () => {
  return (
    <main className="bg-FAFAFA w-screen h-screen">
      <Header />
      <Title/>
      <SongList/>
      

    </main>
  );
};

export default rank;
