"use client";

import { cn } from "@/lib/utils";

export function TextShimmer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex animate-text-shimmer bg-[linear-gradient(110deg,#e2e8f0,45%,#f8fafc,55%,#e2e8f0)] dark:bg-[linear-gradient(110deg,#6366f1,45%,#a5b4fc,55%,#6366f1)] bg-[length:250%_100%] bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
}
