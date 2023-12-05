import LinkButton from "./LinkButton";

export default function Logo() {
  return (
    <LinkButton to="/" type="base">
      <img
        className="rounded-full sm:block"
        src="logo.png"
        alt="Verdant restaurant logo"
        width="80"
      />
    </LinkButton>
  );
}
