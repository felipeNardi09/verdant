import { useSelector } from "react-redux";
import { getCart, totalPrice, totalQuantity } from "../cart/cartSlice";
import CartItem from "./CheckoutItem";

export interface IItems {
  id: number;
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

export default function CheckoutOverview() {
  const cart = useSelector(getCart);
  const total = useSelector(totalPrice);
  const cartQuantity = useSelector(totalQuantity);

  return (
    <div className="flex flex-col items-center gap-3">
      {cartQuantity > 0 || cart.length === 0 ? (
        <>
          {cart
            .filter((item: IItems) => item.quantity !== 0)
            .map((item: IItems) => (
              <CartItem key={item.id} item={item} />
            ))}
          <p className="text-xl font-bold">Total: ${total}</p>
        </>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
}
