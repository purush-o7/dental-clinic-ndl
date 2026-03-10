"use client";

import { Container } from "@/components/common/container";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { ToothIcon } from "@/components/common/dental-icons";
import { DOCTOR } from "@/lib/data";

export function BioSection() {
  // Split bio into first sentence and rest
  const firstDot = DOCTOR.bio.indexOf(".");
  const pullQuote = DOCTOR.bio.slice(0, firstDot + 1);
  const restBio = DOCTOR.bio.slice(firstDot + 1).trim();

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Subtle tooth watermark */}
      <div className="pointer-events-none absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 opacity-[0.02]">
        <ToothIcon size={500} />
      </div>

      <Container>
        <div className="grid gap-12 lg:grid-cols-5 lg:items-start lg:gap-16">
          {/* Pull quote — takes 2 columns */}
          <ScrollReveal animation="fade-right" className="lg:col-span-2">
            <div className="relative">
              {/* Large decorative quote mark */}
              <div className="pointer-events-none absolute -left-2 -top-6 text-8xl font-serif leading-none text-primary/10 select-none">
                &ldquo;
              </div>
              <blockquote className="relative border-l-4 border-primary pl-6 text-xl font-medium leading-relaxed text-foreground/90 lg:text-2xl lg:leading-relaxed">
                {pullQuote}
              </blockquote>
              <div className="mt-6 flex items-center gap-3 pl-6">
                <div className="h-px flex-1 bg-primary/20" />
                <ToothIcon size={16} className="text-primary/40" />
                <div className="h-px flex-1 bg-primary/20" />
              </div>
            </div>
          </ScrollReveal>

          {/* Full bio — takes 3 columns */}
          <ScrollReveal animation="fade-left" className="lg:col-span-3">
            <div className="space-y-5">
              <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                {restBio}
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="rounded-xl border border-border/50 bg-primary/5 p-5 text-center">
                  <p className="text-3xl font-bold text-primary">98%</p>
                  <p className="mt-1 text-sm text-muted-foreground">Patient Satisfaction</p>
                </div>
                <div className="rounded-xl border border-border/50 bg-primary/5 p-5 text-center">
                  <p className="text-3xl font-bold text-primary">1000+</p>
                  <p className="mt-1 text-sm text-muted-foreground">Implants Placed</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
