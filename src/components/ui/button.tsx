import React from "react";
import { cn } from "@/lib/utils"; 


type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "default" | "sm" | "lg" | "icon";
};

const SIZE_CLASSES: Record<NonNullable<ButtonProps["size"]>, string> = {
  default: "h-9 px-4 py-2",
  sm: "h-8 px-3",
  lg: "h-10 px-6",
  icon: "size-9",
};

export function Button({
  size = "default",
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50",
    "border border-emerald-400 bg-background shadow-xs hover:bg-emerald-50 hover:text-accent-foreground", 
    SIZE_CLASSES[size],
    className
  );
  return <button className={classes} {...props} />;
}


