import Link from "next/link";
import React from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <li>
      <Link href={href}>{children}</Link>
    </li>
  );
}
