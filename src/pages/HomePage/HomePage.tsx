import Market from "./components/Market";
import Coctails from "./components/Coctails";

const HomePage = () => {
  return (
    <div className={"container"}>
      <h1>Coctail party</h1>
      <Market />
      <Coctails />
    </div>
  );
};

export default HomePage;
