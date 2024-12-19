export type TProduct = {
  name: string;
  amount: number;
  units: string;
  isDrink: boolean;
};

export type TState = {
  products: { items: TProduct[] };
};
