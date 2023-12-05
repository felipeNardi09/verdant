import Spinner from "../../ui/Spinner";
import Item, { IItems } from "./Item";
import { useMenu } from "./useMenu";

export default function Items() {
  const { data: menu, isLoading } = useMenu();

  if (isLoading) return <Spinner />;

  return (
    <div className="grid gap-6 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-2">
      {menu.map((item: IItems) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
}
