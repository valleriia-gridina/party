import { Ingredient } from "../types";

export const updateIngredients = (ingredients: Ingredient[]) => {
  return {
    type: "UPDATE_INGREDIENT",
    payload: ingredients,
  };
};

export const prepareCocktail = (cocktailIngredients: Ingredient[]) => {
  return {
    type: "PREPARE_COCKTAIL",
    payload: cocktailIngredients,
  };
};
