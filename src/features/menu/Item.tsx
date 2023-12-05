import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";

import {
  addItem,
  decreaseQuantity,
  getCurrentQuantity,
} from "../cart/cartSlice";

export interface IItems {
  id: number;
  createdAt: string;
  name: string;
  ingredients: string[];
  image: string;
  price: number;
}
interface IItem {
  item: IItems;
}

export default function Item({ item }: IItem) {
  const { id, name, ingredients, image, price } = item;

  const dispatch = useDispatch();

  const newItemToCart = { id, name, price, quantity: 1, totalPrice: price };

  const quantity = useSelector(getCurrentQuantity(id));

  return (
    <div className="flex flex-col items-center justify-around gap-2 rounded-xl border-2 p-2 text-center text-xl ">
      <h2 className="p-2 font-bold text-green-500">{name}</h2>
      <img src={image} width="250" height="250" alt={name} />
      <p>Price: ${price}</p>
      <p>Ingredients: {ingredients.join(", ")}</p>
      <div className="m-1 grid grid-cols-3 items-center justify-center text-2xl font-semibold">
        <Button onClick={() => dispatch(decreaseQuantity(id))} type="quantity">
          -
        </Button>
        <p>{quantity}</p>
        <Button
          onClick={() => dispatch(addItem(newItemToCart))}
          type="quantity"
        >
          +
        </Button>
      </div>
    </div>
  );
}
