import React, { useEffect, useState } from "react";
import { cocktailsComponents } from "./cocktailsComponents";

const IngredientsForm: React.FC = () => {
  const [ingredientsCount, setIngredientsCount] = useState<{
    [key: string]: number;
  }>({});

  useEffect(() => {
    const initialCounts = cocktailsComponents[0].reduce((acc, ingredient) => {
      acc[ingredient.name] = 0;
      return acc;
    }, {} as { [key: string]: number });
    setIngredientsCount(initialCounts);
  }, []);

  const handleInputChange = (name: string, value: number) => {
    setIngredientsCount((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    localStorage.setItem("ingredients", JSON.stringify(ingredientsCount));
    alert("Ингредиенты сохранены!");
  };

  return (
    <div>
      <h2>Введите количество ингредиентов</h2>
      {cocktailsComponents[0].map((ingredient) => (
        <div key={ingredient.name}>
          <label>{ingredient.name}:</label>
          <input
            type="number"
            min="0"
            max="100"
            value={ingredientsCount[ingredient.name] || 0}
            onChange={(e) =>
              handleInputChange(ingredient.name, Number(e.target.value))
            }
          />
        </div>
      ))}
      <button onClick={handleSave}>Сохранить</button>
    </div>
  );
};

export default IngredientsForm;
