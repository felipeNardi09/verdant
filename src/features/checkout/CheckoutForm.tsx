import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import LinkButton from "../../ui/LinkButton";
import { getCart, resetCart, totalQuantity } from "../cart/cartSlice";
import Button from "../../ui/Button";
import usePostOrder from "./usePostOrder";
import { IOrder } from "../../services/apiOrders";

type FormValues = {
  name: string;
  phone: number;
  email: string;
  adress: string;
};

export default function CheckoutForm() {
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm<FormValues>();

  const cartQuantity = useSelector(totalQuantity);
  const cart = useSelector(getCart);

  const dispatch = useDispatch();

  const { createOrder, isPending } = usePostOrder();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (cartQuantity === 0) return;

    createOrder({ ...data, cart } as IOrder);
    reset();
    dispatch(resetCart());
    navigate("/all-orders");
  };

  return (
    <>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between gap-4">
          <label className="text-xl font-semibold" htmlFor="name">
            Name
          </label>
          <input className="input" {...register("name")} type="text" />
        </div>

        <div className="flex justify-between">
          <label className="text-xl font-semibold" htmlFor="phone">
            Phone
          </label>
          <input className="input" {...register("phone")} type="tel" />
        </div>

        <div className="flex justify-between">
          <label className="text-xl font-semibold" htmlFor="email">
            E-mail
          </label>
          <input className="input" {...register("email")} type="email" />
        </div>

        <div className="flex justify-between">
          <label className="text-xl font-semibold" htmlFor="adress">
            Adress
          </label>
          <input className="input" {...register("adress")} type="text" />
        </div>

        <div className="flex flex-col gap-2">
          {cartQuantity > 0 ? (
            <Button disabled={isPending} type="submit">
              Send order
            </Button>
          ) : (
            ""
          )}
        </div>
      </form>
      <LinkButton type="back" to="-1">
        Continue Shopping
      </LinkButton>
      <Button
        type="submit"
        onClick={() => {
          dispatch(resetCart());
          navigate("/menu");
        }}
      >
        Clear cart
      </Button>
    </>
  );
}
