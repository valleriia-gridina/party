import Market from "./Market";
import Coctails from "./Coctails";

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
