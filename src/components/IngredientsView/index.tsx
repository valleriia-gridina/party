import React from "react";
import { Ingredient } from "../../types";
import { useSelector } from "react-redux";
import styles from "./ingredients.module.css";

const Ingredients: React.FC = () => {
  const storeIngredients = useSelector(
    (state: { ingredients: Ingredient[] }) => state.ingredients
  );

  return (
    <div>
      <h2>Ingredients</h2>
      <ul>
        {storeIngredients.map((ingredient, index) => (
          <li
            key={index}
            className={`${ingredient.amount < 1 ? styles.zeroAmount : ""}`}
          >
            {ingredient.name}: {ingredient.amount} {ingredient.value}
          </li>
        ))}
      </ul>
      {/* //перебираем массив cocktailsComponents и для каждого элемента массива
        создаем список ul, в котором перебираем массив ингредиентов и выводим их
        на экран. */}
    </div>
  );
};

export default Ingredients;
