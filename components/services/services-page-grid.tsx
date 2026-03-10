"use client";

import { useState } from "react";
import { ServiceCard } from "./service-card";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { SERVICES, SERVICE_CATEGORIES } from "@/lib/data";
import type { ServiceCategory } from "@/lib/types";

export function ServicesPageGrid() {
  const [active, setActive] = useState<ServiceCategory | "All">("All");

  const filtered = active === "All"
    ? SERVICES
    : SERVICES.filter((s) => s.category === active);

  return (
    <div>
      {/* Filter bar */}
      <ScrollReveal animation="fade-up">
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setActive("All")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
              active === "All"
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
            }`}
          >
            All
            <Badge variant="secondary" className="ml-2 px-1.5 py-0 text-[10px] bg-primary-foreground/20 text-inherit">
              {SERVICES.length}
            </Badge>
          </button>
          {SERVICE_CATEGORIES.map((cat) => {
            const count = SERVICES.filter((s) => s.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  active === cat
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                }`}
              >
                {cat}
                <Badge variant="secondary" className="ml-2 px-1.5 py-0 text-[10px] bg-primary-foreground/20 text-inherit">
                  {count}
                </Badge>
              </button>
            );
          })}
        </div>
      </ScrollReveal>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((service, i) => (
          <ScrollReveal key={service.slug} animation="fade-up" delay={i * 60}>
            <ServiceCard service={service} index={i} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
