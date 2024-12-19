import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProduct } from "types/types";

type TState = { items: TProduct[] };

const initialState: TState = {
  items: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<TProduct>) => {
      const existingProduct = state.items.find(
        (el) => el.name === action.payload.name
      );
      if (existingProduct) {
        existingProduct.amount += action.payload.amount;
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer;
