"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function GlowCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "group relative rounded-2xl border border-white/10 bg-zinc-950/80 p-8 backdrop-blur-xl transition-all hover:border-white/20",
        className
      )}
    >
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-purple-500/20 blur-xl" />
      </div>
      <div className="relative">{children}</div>
    </motion.div>
  );
}
