import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

export interface ICart {
  id: number;
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

const orderSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [] as ICart[],
  },
  reducers: {
    addItem(state, action) {
      const item = state.cart.find((item) => item.id === action.payload.id);

      if (!item) {
        state.cart.push(action.payload);
      } else {
        item.quantity++;
        item.totalPrice = item.quantity * item.price;
      }
    },
    decreaseQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);

      if (!item) {
        return;
      } else if (item.quantity === 0) {
        state.cart = state.cart.filter((item) => item.id !== action.payload);
      } else {
        item.quantity--;
        item.totalPrice = item.quantity * item.price;
      }
    },
    resetCart(state) {
      state.cart = [];
    },
  },
});

export const { addItem, decreaseQuantity, resetCart } = orderSlice.actions;

export default orderSlice.reducer;

export const getCart = (state: RootState) => state.cart.cart;

export const totalQuantity = (state: RootState) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const totalPrice = (state: RootState) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
export const getCurrentQuantity = (id: number) => (state: RootState) =>
  state.cart.cart.find((item) => item.id === id)?.quantity ?? 0;
