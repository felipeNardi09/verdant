import { IOrder } from "../../services/apiOrders";
import LinkButton from "../../ui/LinkButton";
import Spinner from "../../ui/Spinner";
import OrderItem from "./OrderItem";
import { useGetOrders } from "./useGetOrders";

export default function Orders() {
  const { data: orders, isLoading } = useGetOrders();

  console.log(orders);

  if (isLoading) return <Spinner />;

  if (orders.length === 0)
    return (
      <div className="flex flex-col gap-2">
        <h2>There are no orders yet.</h2>
        <LinkButton type="back" to="/menu">
          Order now
        </LinkButton>
      </div>
    );

  return (
    <div className="wrap flex gap-5">
      {orders.map((order: IOrder) => (
        <OrderItem key={order.id} order={order} />
      ))}
    </div>
  );
}
