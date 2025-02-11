import { UnitType } from "types/types";

export const DRINKS = [
  { alcoholic: true, name: "Vodka" },
  { alcoholic: true, name: "Cointreau" },
  { alcoholic: false, name: "Cranberry juice" },
  { alcoholic: false, name: "Lime juice" },
  { alcoholic: true, name: "White rum" },
  { alcoholic: false, name: "Soda" },
  { alcoholic: true, name: "Dark rum" },
  { alcoholic: true, name: "Orange Curacao" },
  { alcoholic: true, name: "Blue Curacao" },
  { alcoholic: false, name: "Almond syrup" },
  { alcoholic: true, name: "Cachaca" },
  { alcoholic: true, name: "Tequila" },
  { alcoholic: true, name: "Triple sec" },
  { alcoholic: false, name: "Pineapple juice" },
  { alcoholic: false, name: "Coconut cream" },
  { alcoholic: true, name: "Gin" },
  { alcoholic: false, name: "Lemon juice" },
  { alcoholic: false, name: "Cola" },
  { alcoholic: true, name: "Prosecco" },
  { alcoholic: true, name: "Aperol" },
  { alcoholic: true, name: "Ginger beer" },
  { alcoholic: true, name: "Coffee liqueur" },
];

export const OTHER_INGREDIENTS = [
  "mint",
  "orange",
  "apple",
  "ice",
  "limon",
  "lime",
];

export const COCTAILS = [
  {
    name: "Cosmopolitan",
    ingredients: [
      { name: "Vodka", amount: 40, units: UnitType.ml },
      { name: "Cointreau", amount: 20, units: UnitType.ml },
      { name: "Cranberry juice", amount: 30, units: UnitType.ml },
    ],
  },
  {
    name: "Mojito",
    ingredients: [
      { name: "Lime juice", amount: 30, units: UnitType.ml },
      { name: "White rum", amount: 50, units: UnitType.ml },
      { name: "Soda", amount: 100, units: UnitType.ml },
      { name: "Mint leaves", amount: 10, units: UnitType.g },
    ],
  },
  {
    name: "Mai Tai",
    ingredients: [
      { name: "White rum", amount: 30, units: UnitType.ml },
      { name: "Dark rum", amount: 30, units: UnitType.ml },
      { name: "Orange Curacao", amount: 15, units: UnitType.ml },
      { name: "Almond syrup", amount: 10, units: UnitType.ml },
      { name: "Lime juice", amount: 20, units: UnitType.ml },
    ],
  },
  {
    name: "Caipirinha",
    ingredients: [
      { name: "Cachaca", amount: 50, units: UnitType.ml },
      { name: "Lime juice", amount: 30, units: UnitType.ml },
      { name: "Ice", amount: 100, units: UnitType.g },
    ],
  },
  {
    name: "Margarita",
    ingredients: [
      { name: "Tequila", amount: 50, units: UnitType.ml },
      { name: "Triple sec", amount: 20, units: UnitType.ml },
      { name: "Cointreau", amount: 10, units: UnitType.ml },
      { name: "Lime juice", amount: 30, units: UnitType.ml },
    ],
  },
  {
    name: "Pina Colada",
    ingredients: [
      { name: "White rum", amount: 50, units: UnitType.ml },
      { name: "Coconut cream", amount: 30, units: UnitType.ml },
      { name: "Pineapple juice", amount: 100, units: UnitType.ml },
      { name: "Ice", amount: 100, units: UnitType.g },
    ],
  },
  {
    name: "Long Island Iced Tea",
    ingredients: [
      { name: "Vodka", amount: 20, units: UnitType.ml },
      { name: "Gin", amount: 20, units: UnitType.ml },
      { name: "White Rum", amount: 20, units: UnitType.ml },
      { name: "Tequila", amount: 20, units: UnitType.ml },
      { name: "Triple sec", amount: 20, units: UnitType.ml },
      { name: "Lemon juice", amount: 30, units: UnitType.ml },
      { name: "Cola", amount: 100, units: UnitType.ml },
    ],
  },
  {
    name: "Daiquiri",
    ingredients: [
      { name: "White rum", amount: 50, units: UnitType.ml },
      { name: "Lime juice", amount: 30, units: UnitType.ml },
    ],
  },
  {
    name: "Moscow Mule",
    ingredients: [
      { name: "Vodka", amount: 50, units: UnitType.ml },
      { name: "Ginger beer", amount: 100, units: UnitType.ml },
      { name: "Lime juice", amount: 30, units: UnitType.ml },
    ],
  },
  {
    name: "Gin Mule",
    ingredients: [
      { name: "Gin", amount: 50, units: UnitType.ml },
      { name: "Ginger beer", amount: 100, units: UnitType.ml },
      { name: "Lime juice", amount: 30, units: UnitType.ml },
    ],
  },
  {
    name: "Aperol Spritz",
    ingredients: [
      { name: "Prosecco", amount: 90, units: UnitType.ml },
      { name: "Aperol", amount: 60, units: UnitType.ml },
      { name: "Soda", amount: 30, units: UnitType.ml },
    ],
  },
  {
    name: "White Russian",
    ingredients: [
      { name: "Coffee liqueur", amount: 30, units: UnitType.ml },
      { name: "Vodka", amount: 50, units: UnitType.ml },
      { name: "Cream", amount: 30, units: UnitType.ml },
    ],
  },
  {
    name: "Gin Fizz",
    ingredients: [
      { name: "Gin", amount: 50, units: UnitType.ml },
      { name: "Soda", amount: 100, units: UnitType.ml },
      { name: "Lemon juice", amount: 30, units: UnitType.ml },
      { name: "Egg white", amount: 1, units: UnitType.piece },
    ],
  },
];
