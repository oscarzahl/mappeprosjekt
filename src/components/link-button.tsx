import Link from "next/link";
import React from "react";
import { cn } from "@/utils/cn";

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function LinkButton({ className, href, children }: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-10 px-4 items-center justify-center font-medium bg-yellow-600 rounded-lg",
        className
      )}
    >
      {children}
    </Link>
  );
}
