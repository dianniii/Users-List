import React from "react";
import { cn } from "@/lib/utils"; 


type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
};

const OUTLINE_CLASSES = "border border-emerald-400 bg-background shadow-xs hover:bg-emerald-50 hover:text-accent-foreground";

const SIZE_CLASSES: Record<NonNullable<ButtonProps["size"]>, string> = {
  default: "h-9 px-4 py-2",
  sm: "h-8 px-3",
  lg: "h-10 px-6",
  icon: "size-9",
};

export function Button({
  size = "default",
  className,
  asChild,
  ...props
}: ButtonProps) {
  const Comp: React.ElementType = asChild ? "span" : "button";
  const classes = cn(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50",
    OUTLINE_CLASSES,
    SIZE_CLASSES[size],
    className
  );
  return <Comp className={classes} {...props} />;
}


