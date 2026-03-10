"use client";

import { ScrollReveal } from "@/components/common/scroll-reveal";
import { Container } from "@/components/common/container";

const highlights = [
  { value: "20%", label: "Discount on All Treatments" },
  { value: "Free", label: "Annual Checkups & X-Rays" },
  { value: "24/7", label: "Emergency Coverage" },
  { value: "Free", label: "Yearly Dental Cleaning" },
];

export function HighlightStats() {
  return (
    <section className="bg-primary text-primary-foreground py-10">
      <Container>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {highlights.map((item, i) => (
            <ScrollReveal key={item.label} animation="fade-up" delay={i * 80}>
              <div className="text-center">
                <p className="text-3xl font-bold sm:text-4xl">{item.value}</p>
                <p className="mt-1 text-sm text-primary-foreground/70">{item.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
