import Link from "next/link";
import { NavLink } from "./nav-link";

export function Header() {
  return (
    <header className="p-4 flex items-center justify-between bg-yellow-400">
      <Link href={"/"}>Rental Roulette</Link>
      <div>
        <nav>
          <ul className="flex items-center gap-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/cars">Cars</NavLink>
            <NavLink href="/login">Log In</NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
}
