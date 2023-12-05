import LinkButton from "../ui/LinkButton";

export default function Error() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1>Page not found</h1>
      <LinkButton type="nav" to="-1">
        Back
      </LinkButton>
    </div>
  );
}
