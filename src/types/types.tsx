export enum UnitType {
  ml = "ml",
  g = "g",
  piece = "piece",
}

export type TProduct = {
  name: string;
  amount: number;
  units: UnitType;
  isDrink?: boolean;
};

export type TState = {
  products: { items: TProduct[] };
};
