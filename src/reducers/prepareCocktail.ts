import { Ingredient } from "../types";
import { ingredientsInitialState } from "../ingredientsList";

interface Action {
  type: string;
  payload: Ingredient[];
}

const prepareCocktail = (
  state: Ingredient[] = ingredientsInitialState,
  action: Action
) => {
  switch (action.type) {
    case "PREPARE_COCKTAIL":
      return state.map((ingredient) => {
        const cocktailIngredient = action.payload.find(
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

export default prepareCocktail;
