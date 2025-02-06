import React, { useState } from "react";
import { Ingredient } from "../../types";
import { useSelector, useDispatch } from "react-redux";
import { updateIngredients } from "../../actions/ingredients";
import styles from "./ingredients.module.css";

type Amounts = {
  [key: string]: string;
};

const Ingredients: React.FC = () => {
  const storeIngredients = useSelector(
    (state: { ingredients: Ingredient[] }) => state.ingredients
  );

  const dispatch = useDispatch();

  const [amounts, setAmounts] = useState<Amounts>(
    storeIngredients.reduce((acc: Amounts, ingredient) => {
      acc[ingredient.name] = ""; // Инициализируем каждое значение пустой строкой
      return acc;
    }, {})
  );

  const handleInputChange = (name, value) => {
    setAmounts((prevAmounts) => ({
      ...prevAmounts,
      [name]: value,
    }));
  };

  return (
    <div>
      <ul className={styles.ingredientsList}>
        {storeIngredients.map((ingredient, index) => (
          <li key={index}>
            <span>
              {ingredient.name}: {ingredient.amount} {ingredient.value}
            </span>
            <input
              id={`amount_${ingredient.name}`}
              type="text"
              value={amounts[ingredient.name] || ""}
              onChange={(e) =>
                handleInputChange(ingredient.name, e.target.value)
              }
            />
            <button
              onClick={() => {
                const newAmount = (
                  document.getElementById(
                    `amount_${ingredient.name}`
                  ) as HTMLInputElement
                ).value;
                dispatch(
                  updateIngredients({
                    name: ingredient.name,
                    value: ingredient.value,
                    amount: Number(amounts[ingredient.name]) || 0,
                  })
                );
                setAmounts((prevAmounts) => ({
                  ...prevAmounts,
                  [ingredient.name]: "", // Очищаем инпут
                }));
              }}
            >
              save
            </button>
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
