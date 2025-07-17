import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "border-emerald-200 h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-xs outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:border-emerald-100 focus-visible:border-emerald-100 focus-visible:ring-emerald-100 focus-visible:ring-2",
        className
      )}
      {...props}
    />
  )
}

export { Input }