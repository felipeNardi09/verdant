import LinkButton from "./LinkButton";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex gap-8">
        <li>
          <LinkButton to="/menu" type="nav">
            Menu
          </LinkButton>
        </li>
        <li>
          <LinkButton to="/all-orders" type="nav">
            Orders
          </LinkButton>
        </li>
      </ul>
    </nav>
  );
}
