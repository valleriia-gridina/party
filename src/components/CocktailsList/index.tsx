import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cocktails } from "../../cocktailsList";
import { Ingredient } from "../../types";
import { prepareCocktail } from "../../actions/ingredients";
import styles from "./cocktailsList.module.css";

const Cocktails: React.FC = () => {
  const storeIngredients = useSelector(
    (state: { ingredients: Ingredient[] }) => state.ingredients
  );

  const dispatch = useDispatch();

  //проверка, доступны ли все ингредиенты для коктейля
  const canMakeCocktail = (
    cocktailIngredients: { name: string; amount: number }[]
  ) => {
    // используем метод every для проверки каждого элемента массива
    return cocktailIngredients.every((cocktailIngredient) => {
      //используем метод find для поиска элемента в массиве
      const foundIngredient = storeIngredients.find(
        (ingredient) => ingredient.name === cocktailIngredient.name
      );
      // возращаем true, если ингредиент найден и его количество больше или равно количеству в коктейле
      return (
        foundIngredient && foundIngredient.amount >= cocktailIngredient.amount
      );
    });
  };

  const handlePrepareCocktail = (cocktailIngredients: Ingredient[]) => {
    dispatch(prepareCocktail(cocktailIngredients));
  };
  return (
    <div>
      <h2>Cocktails available:</h2>
      <ul className={styles.cocktailsList}>
        {cocktails
          .filter((cocktail) => canMakeCocktail(cocktail.ingredients)) // Фильтруем коктейли
          .map((cocktail, index) => (
            <li key={index}>
              <button
                onClick={() => handlePrepareCocktail(cocktail.ingredients)}
              >
                <div className={styles.cocktailShowcase}>
                  <span className={styles.cocktailName}>
                    {cocktail.cocktailName}
                  </span>
                  <img src={cocktail.src} alt="" width="100" height="100" />
                  <ul className={styles.ingredients}>
                    {cocktail.ingredients.map((ingredient, i) => (
                      <li key={i}>
                        {ingredient.name}: {ingredient.amount}{" "}
                        {ingredient.amountType}
                      </li>
                    ))}
                  </ul>
                </div>
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cocktails;
