import { ICart } from "../features/cart/cartSlice.js";
import supabase from "./supabase.js";

export interface IOrder {
  id: number;
  name: string;
  phone: number;
  email: string;
  adress: string;
  cart: ICart[];
}

export async function postOrder({ name, phone, email, adress, cart }: IOrder) {
  const { data, error } = await supabase
    .from("orders")
    .insert([{ name, phone, email, adress, cart }])
    .select();

  if (error) throw new Error("Order could not be placed.");

  return data;
}

export async function getOrders() {
  const { data, error } = await supabase.from("orders").select("*");

  if (error) throw new Error("Orders could not be loaded.");

  return data;
}
