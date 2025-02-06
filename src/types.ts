export interface Ingredient {
  name: string;
  amount: number;
  amountType: string;
}

export interface Cocktail {
  ingredients: Ingredient[];
  cocktailName: string;
  src: string;
}
