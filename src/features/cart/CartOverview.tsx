import { useSelector } from "react-redux";
import { totalPrice, totalQuantity } from "./cartSlice";
import LinkButton from "../../ui/LinkButton";

export default function CartOverview() {
  const quantityOfItems = useSelector(totalQuantity);

  const price = useSelector(totalPrice);

  return (
    <footer className="flex items-center justify-center gap-4 py-2">
      <p>Items: {quantityOfItems}</p>
      <p>Total: ${price}</p>
      <LinkButton type="checkout" to="/checkout">
        Checkout
      </LinkButton>
    </footer>
  );
}
