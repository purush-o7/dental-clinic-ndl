"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Animation =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "scale-in"
  | "blur-in";

export function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration,
  className,
  once = true,
  threshold = 0.15,
}: {
  children: ReactNode;
  animation?: Animation;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.animationDelay = `${delay}ms`;
          if (duration) el.style.animationDuration = `${duration}ms`;
          el.classList.remove("reveal-hidden");
          el.classList.add("reveal-visible");
          el.style.animation = `var(--animate-${animation})`;
          el.style.animationDelay = `${delay}ms`;
          if (duration) el.style.animationDuration = `${duration}ms`;
          if (once) observer.unobserve(el);
        } else if (!once) {
          el.classList.add("reveal-hidden");
          el.classList.remove("reveal-visible");
          el.style.animation = "";
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animation, delay, duration, once, threshold]);

  return (
    <div ref={ref} className={cn("reveal-hidden", className)}>
      {children}
    </div>
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
    <div className={className}>
      {children.map((child, i) => (
        <ScrollReveal
          key={i}
          animation={animation}
          delay={i * staggerMs}
          className={childClassName}
        >
          {child}
        </ScrollReveal>
      ))}
    </div>
  );
}
