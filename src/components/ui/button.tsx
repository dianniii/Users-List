import React from "react";
import { cn } from "@/lib/utils"; 

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
};

const VARIANT_CLASSES: Record<NonNullable<ButtonProps["variant"]>, string> = {
  default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
  destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90",
  outline: "border border-emerald-400 bg-background shadow-xs hover:bg-emerald-50 hover:text-accent-foreground",
  secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  link: "text-primary underline-offset-4 hover:underline",
};

const SIZE_CLASSES: Record<NonNullable<ButtonProps["size"]>, string> = {
  default: "h-9 px-4 py-2",
  sm: "h-8 px-3",
  lg: "h-10 px-6",
  icon: "size-9",
};

export function Button({
  variant = "default",
  size = "default",
  className,
  asChild,
  ...props
}: ButtonProps) {
  const Comp: React.ElementType = asChild ? "span" : "button";
  const classes = cn(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50",
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    className
  );
  return <Comp className={classes} {...props} />;
}

