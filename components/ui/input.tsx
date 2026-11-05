import * as React from "react";
import { cn } from "@/lib/utils";
export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({ className, ...p }, ref) => (
  <input ref={ref} className={cn("h-12 w-full rounded-xl border-2 border-ink/20 bg-white px-4 outline-none focus:border-magenta", className)} {...p} />));
Input.displayName = "Input";
