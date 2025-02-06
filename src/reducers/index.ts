import counter from "./counter";
import ingredients from "./ingredients";
import prepareCocktail from "./prepareCocktail";
import { combineReducers } from "redux";

// собираем все редьюсеры в один
const allReducers = combineReducers({
  counter: counter,
  ingredients: ingredients,
  prepareCocktail: prepareCocktail,
});

export default allReducers;
