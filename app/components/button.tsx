import { cn } from "~/lib/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button className={cn("border rounded-lg px-4 h-10", className)} {...props}>
      {children}
    </button>
  );
}
