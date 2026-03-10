"use client";

import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { ToothIcon } from "@/components/common/dental-icons";
import { cn } from "@/lib/utils";

export function SectionHeader({
  title,
  subtitle,
  badge,
  className,
  align = "center",
}: {
  title: string;
  subtitle?: string;
  badge?: string;
  className?: string;
  align?: "center" | "left";
}) {
  return (
    <ScrollReveal animation="fade-up" className={cn("mb-12", align === "center" && "text-center", className)}>
      {badge && (
        <Badge variant="secondary" className="mb-4">
          <ToothIcon size={12} className="mr-1.5" />
          {badge}
        </Badge>
      )}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
