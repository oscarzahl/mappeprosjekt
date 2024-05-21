import { cn } from "~/lib/cn";
import { HTMLAttributes } from "react";

type ButtonProps = HTMLAttributes<HTMLButtonElement>;

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button className={cn("border rounded-lg px-4 h-10", className)} {...props}>
      {children}
    </button>
  );
}
