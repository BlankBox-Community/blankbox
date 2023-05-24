import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

const buttonVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "rounded-md",
    "text-sm",
    "font-medium",
    "transition-colors",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-slate-400",
    "focus:ring-offset-2",
    "dark:hover:bg-slate-800",
    "dark:hover:text-slate-100",
    "disabled:opacity-50",
    "dark:focus:ring-slate-400",
    "disabled:pointer-events-none",
    "dark:focus:ring-offset-slate-900",
    "data-[state=open]:bg-slate-100",
    "dark:data-[state=open]:bg-slate-800",
  ],
  {
    variants: {
      intent: {
        primary: [
          "bg-slate-900",
          "text-white",
          "hover:bg-slate-700",
          "dark:bg-slate-50",
        ],
        secondary: [
          "bg-slate-100",
          "text-slate-900",
          "hover:bg-slate-200",
          "dark:bg-slate-700",
          "dark:text-slate-100",
        ],
        danger: [
          "bg-red-500",
          "text-white",
          "hover:bg-red-600",
          "dark:hover:bg-red-600",
        ],
        ghost: ["hover:bg-accent hover:text-accent-foreground"],
        link: ["underline-offset-4 hover:underline text-primary"],
      },
      outline: {
        true: [
          "bg-transparent",
          "text-slate-900",
          "border",
          "hover:bg-slate-100",
        ],
      },
      fullWidth: {
        true: "w-full",
      },
      size: {
        primary: ["h-10", "py-2", "px-4"],
        small: ["h-9", "px-2", "rounded-md"],
        large: ["h-11", "px-8", "rounded-md"],
      },
      defaultVariants: {
        intent: "primary",
        size: "primary",
      },
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, intent, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ className, intent, size }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
