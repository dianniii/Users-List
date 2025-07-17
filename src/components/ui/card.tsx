import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      data-slot="card"
      ref={ref}
      className={cn(
        "bg-emerald-50 dark:bg-card flex flex-col gap-5 rounded-lg border p-4 shadow-jg",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      data-slot="card-header"
      ref={ref}
      className={cn(
        "gap-2 px-4 ",
        className
      )}
      {...props}
    />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      data-slot="card-title"
      ref={ref}
      className={cn("font-medium text-lg dark:font-medium", className)}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      data-slot="card-description"
      ref={ref}
      className={cn("text-base", className)}
      {...props}
    />
  )
);
CardDescription.displayName = "CardDescription";

const CardAction = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      data-slot="card-action"
      ref={ref}
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
);
CardAction.displayName = "CardAction";

const CardContent = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      data-slot="card-content"
      ref={ref}
      className={cn("px-4 py-2", className)}
      {...props}
    />
  )
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      data-slot="card-footer"
      ref={ref}
      className={cn("flex items-center px-4 pt-4", className)}
      {...props}
    />
  )
);
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  CardFooter,
};
