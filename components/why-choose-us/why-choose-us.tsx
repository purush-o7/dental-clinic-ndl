"use client";

import { Container } from "@/components/common/container";
import { SectionHeader } from "@/components/common/section-header";
import { FeatureCard } from "./feature-card";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { ToothIcon } from "@/components/common/dental-icons";
import { WHY_CHOOSE_US } from "@/lib/data";

export function WhyChooseUs() {
  return (
    <section className="relative py-24 bg-secondary/50 overflow-hidden">
      {/* Decorative */}
      <div className="pointer-events-none absolute -left-8 top-1/2 -translate-y-1/2 opacity-[0.03]">
        <ToothIcon size={400} />
      </div>

      <Container>
        <SectionHeader
          badge="Why Us"
          title="Why Choose K.M. Reddy Dental Care"
          subtitle="We combine expertise, technology, and compassion to deliver exceptional dental care."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_US.map((feature, i) => (
            <ScrollReveal key={feature.title} animation="fade-up" delay={i * 100}>
              <FeatureCard feature={feature} />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
