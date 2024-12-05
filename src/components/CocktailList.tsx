import React, { useEffect, useState } from "react";
import { cocktails } from "./cocktails";
import { Cocktail } from "./types";

const CocktailList: React.FC = () => {
  const [availableIngredients, setAvailableIngredients] = useState<{
    [key: string]: number;
  }>({});
  const [cocktailsReady, setCocktailsReady] = useState<Cocktail[]>([]);

  useEffect(() => {
    const savedIngredients = localStorage.getItem("ingredients");
    if (savedIngredients) {
      setAvailableIngredients(JSON.parse(savedIngredients));
    }
  }, []);

  useEffect(() => {
    const readyCocktails = cocktails[0].filter((cocktail) =>
      cocktail.ingredients.every(
        (ingredient) => availableIngredients[ingredient] > 0
      )
    );
    setCocktailsReady(readyCocktails);
  }, [availableIngredients]);

  const prepareCocktail = (cocktail: Cocktail) => {
    const updatedIngredients = { ...availableIngredients };

    cocktail.ingredients.forEach((ingredient) => {
      if (updatedIngredients[ingredient] > 0) {
        updatedIngredients[ingredient] -= 1;
      }
    });

    setAvailableIngredients(updatedIngredients);
    localStorage.setItem("ingredients", JSON.stringify(updatedIngredients));
    alert(`${cocktail.name} готов!`);
  };

  return (
    <div>
      <h2>Коктейли</h2>
      <ul>
        {cocktailsReady.map((cocktail) => (
          <li key={cocktail.name} className="ready">
            {cocktail.name}
            <button onClick={() => prepareCocktail(cocktail)}>
              Приготовить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CocktailList;
