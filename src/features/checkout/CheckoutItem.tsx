import { IItems } from "./CheckoutOverview";

interface IItem {
  item: IItems;
}

export default function CartItem({ item }: IItem) {
  const { name, price: unitPrice, quantity, totalPrice: price } = item;

  return (
    <div className="text-md flex flex-col items-center gap-2 rounded bg-green-50 px-4 py-2 font-semibold">
      <p>{name}</p>
      <p>
        ${unitPrice} x {quantity} = ${price}
      </p>
    </div>
  );
}
