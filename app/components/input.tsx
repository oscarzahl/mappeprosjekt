import { cn } from "~/lib/cn";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn("border rounded-lg px-4 h-10", className)}
      {...props}
    />
  );
}
