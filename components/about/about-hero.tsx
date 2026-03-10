"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { ToothIcon, ToothSparkleIcon } from "@/components/common/dental-icons";
import { Container } from "@/components/common/container";
import { DOCTOR, STATS } from "@/lib/data";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10 py-24 lg:py-32">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute right-[10%] top-[15%] animate-float opacity-[0.06]">
        <ToothSparkleIcon size={120} />
      </div>
      <div className="pointer-events-none absolute left-[5%] bottom-[10%] animate-float-delayed opacity-[0.04]">
        <ToothIcon size={100} />
      </div>

      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Photo */}
          <ScrollReveal animation="scale-in" className="flex justify-center">
            <div className="relative">
              {/* Spinning ring */}
              <div className="absolute inset-0 -m-5 rounded-full border-2 border-dashed border-primary/15 animate-spin-slow" />
              {/* Glow */}
              <div className="absolute inset-0 -m-3 rounded-full bg-primary/10 blur-2xl" />
              <div className="relative h-72 w-72 overflow-hidden rounded-full bg-primary/80 ring-4 ring-primary/40 ring-offset-4 ring-offset-background sm:h-80 sm:w-80 lg:h-96 lg:w-96">
                <Image
                  src="/dr-km-reddy.webp"
                  alt={DOCTOR.name}
                  width={384}
                  height={384}
                  className="h-full w-full object-cover object-[center_15%]"
                  priority
                />
              </div>
              {/* Experience floating card */}
              <div className="absolute -bottom-2 -right-4 animate-float rounded-2xl bg-background px-5 py-3 shadow-xl border border-border/50">
                <p className="text-2xl font-bold text-primary">{STATS[0].value}+</p>
                <p className="text-xs text-muted-foreground">Years Experience</p>
              </div>
              {/* Patients floating card */}
              <div className="absolute -top-2 -left-4 animate-float-delayed rounded-2xl bg-background px-5 py-3 shadow-xl border border-border/50">
                <p className="text-2xl font-bold text-primary">{STATS[1].value}+</p>
                <p className="text-xs text-muted-foreground">Happy Patients</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Text */}
          <div className="text-center lg:text-left">
            <ScrollReveal animation="fade-up">
              <Badge variant="secondary" className="mb-4 gap-1.5">
                <ToothIcon size={12} />
                About Our Doctor
              </Badge>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={100}>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {DOCTOR.name}
              </h1>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <p className="mt-3 text-lg text-primary font-medium">
                {DOCTOR.title}
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={300}>
              <div className="mt-5 flex flex-wrap justify-center gap-2 lg:justify-start">
                {DOCTOR.qualifications.map((q) => (
                  <Badge
                    key={q}
                    variant="outline"
                    className="gap-1.5 px-3 py-1 text-sm border-primary/20 bg-primary/5"
                  >
                    <ToothSparkleIcon size={12} className="text-primary" />
                    {q}
                  </Badge>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
