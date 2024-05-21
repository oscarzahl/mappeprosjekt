import { Link } from "@remix-run/react";
import React from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <li>
      <Link to={href}>{children}</Link>
    </li>
  );
}
