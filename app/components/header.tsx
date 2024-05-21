import { Form, Link } from "@remix-run/react";
import { NavLink } from "./nav-link";
import { useUser } from "~/contexts/user";

export function Header() {
  const user = useUser();

  return (
    <header className="p-4 flex items-center justify-between bg-yellow-400">
      <Link to="/">Rental Roulette</Link>
      <div>
        <nav>
          <ul className="flex items-center gap-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/cars">Cars</NavLink>
            {!user ? (
              <NavLink href="/login">Log In</NavLink>
            ) : (
              <Form method="post" action="/logg-ut">
                <button>Logg ut</button>
              </Form>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
