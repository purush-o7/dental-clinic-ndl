"use client";

import { type ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Animation =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "scale-in"
  | "blur-in";

const initialVariants = {
  "fade-up": { opacity: 0, y: 24 },
  "fade-down": { opacity: 0, y: -24 },
  "fade-left": { opacity: 0, x: 40 },
  "fade-right": { opacity: 0, x: -40 },
  "scale-in": { opacity: 0, scale: 0.85 },
  "blur-in": { opacity: 0, filter: "blur(12px)" },
} as const;

const animateVariants = {
  "fade-up": { opacity: 1, y: 0 },
  "fade-down": { opacity: 1, y: 0 },
  "fade-left": { opacity: 1, x: 0 },
  "fade-right": { opacity: 1, x: 0 },
  "scale-in": { opacity: 1, scale: 1 },
  "blur-in": { opacity: 1, filter: "blur(0px)" },
} as const;

export function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration,
  className,
  once = true,
  threshold = 0.01,
}: {
  children: ReactNode;
  animation?: Animation;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
}) {
  const transition = duration
    ? { duration: duration / 1000, delay: delay / 1000 }
    : { type: "spring" as const, stiffness: 200, damping: 25, delay: delay / 1000 };

  return (
    <motion.div
      initial={initialVariants[animation]}
      whileInView={animateVariants[animation]}
      viewport={{ once, amount: threshold }}
      transition={transition}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function StaggerReveal({
  children,
  animation = "fade-up",
  staggerMs = 100,
  className,
  childClassName,
}: {
  children: ReactNode[];
  animation?: Animation;
  staggerMs?: number;
  className?: string;
  childClassName?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.01 }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerMs / 1000,
          },
        },
      }}
      className={className}
    >
      {children.map((child, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { ...initialVariants[animation] },
            visible: {
              ...animateVariants[animation],
              transition: { type: "spring" as const, stiffness: 200, damping: 25 },
            },
          }}
          className={cn(childClassName)}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
