import IngredientsForm from "./components/Ingredients";
import CocktailList from "./components/CocktailList";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <div>
        <h1>Сделать коктейль</h1>
        <IngredientsForm />
        <CocktailList />
      </div>
    </>
  );
};

export default App;
