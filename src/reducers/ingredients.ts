import { Ingredient } from "../types";
import { ingredientsInitialState } from "../ingredientsList";

interface Action {
  type: string;
  payload: Ingredient[] | Ingredient;
}

const ingredients = (
  state: Ingredient[] = ingredientsInitialState,
  action: Action
) => {
  switch (action.type) {
    case "UPDATE_INGREDIENT":
      return state.map((ingredient) => {
        // Сравниваем текущий ингредиент с payload
        const newIngredient = action.payload as Ingredient;
        return ingredient.name === newIngredient.name
          ? { ...ingredient, amount: ingredient.amount + newIngredient.amount }
          : ingredient;
      });
    case "PREPARE_COCKTAIL":
      return state.map((ingredient) => {
        const updatedCocktailIngredient = action.payload as Ingredient[];
        const cocktailIngredient = updatedCocktailIngredient.find(
          // Сравниваем текущий ингредиент с payload
          (cocktailIng: Ingredient) => cocktailIng.name === ingredient.name
        );
        if (cocktailIngredient) {
          //если находим, то вычитаем количество ингредиента из количества в хранилище
          return {
            ...ingredient,
            amount: ingredient.amount - cocktailIngredient.amount,
          };
        }
        return ingredient;
      });
    default:
      return state;
  }
};

export default ingredients;
