import { IOrder } from "../../services/apiOrders";
import { ICart } from "../cart/cartSlice";

interface ISingleOrder {
  order: IOrder;
}

export default function OrderItem({ order }: ISingleOrder) {
  const { name, cart } = order;

  const totalPrice = cart.reduce(
    (sum: number, item: ICart) => sum + item.totalPrice,
    0,
  );

  return (
    <div className="flex flex-col items-center justify-between gap-2 rounded bg-yellow-50 p-2 text-xl text-yellow-950">
      <p className="text-2xl font-semibold underline">{name}'s order:</p>
      {cart?.map((item: ICart, i: number) => (
        <div key={i}>
          <p>
            {item.quantity} x {item.name}
          </p>
        </div>
      ))}
      <p className="rounded border border-yellow-950 bg-green-200 px-3 py-1 font-semibold">
        Total price: ${totalPrice}
      </p>
    </div>
  );
}
