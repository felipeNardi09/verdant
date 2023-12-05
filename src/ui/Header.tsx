import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="flex h-32 items-center justify-center gap-4 border-b-2 p-2 sm:h-auto">
      <Logo />
      <Navbar />
    </header>
  );
}
