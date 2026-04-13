"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function AnimatedGradient({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <motion.div
      className={cn(
        "absolute inset-0 -z-10 overflow-hidden",
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute -top-1/2 -left-1/2 h-[200%] w-[200%] animate-[spin_20s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_340deg,#0ea5e9_360deg)] opacity-20" />
      <div className="absolute -top-1/2 -right-1/2 h-[200%] w-[200%] animate-[spin_25s_linear_infinite_reverse] bg-[conic-gradient(from_0deg,transparent_0_340deg,#8b5cf6_360deg)] opacity-15" />
      {children}
    </motion.div>
  );
}
