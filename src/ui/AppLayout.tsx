import { Outlet } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import { useSelector } from "react-redux";
import { getCart } from "../features/cart/cartSlice";
import WelcomeFooter from "./WelcomeFooter";

export default function AppLayout() {
  const cart = useSelector(getCart);
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />

      <div className="overflow-scroll">
        <main className="m-7 mx-10 flex max-w-7xl items-center justify-center transition-all duration-200 sm:mx-12 md:mx-12 xl:mx-auto">
          <Outlet />
        </main>
      </div>

      {cart.length === 0 ? <WelcomeFooter /> : <CartOverview />}
    </div>
  );
}
