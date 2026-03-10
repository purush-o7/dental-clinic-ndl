"use client";

import Image from "next/image";
import { Container } from "@/components/common/container";
import { SectionHeader } from "@/components/common/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { ToothIcon } from "@/components/common/dental-icons";
import { DOCTOR } from "@/lib/data";
import Link from "next/link";

export function AboutSection() {
  return (
    <section className="relative py-24 bg-secondary/30 overflow-hidden">
      {/* Decorative */}
      <div className="pointer-events-none absolute right-10 top-10 opacity-[0.04] rotate-12">
        <ToothIcon size={180} />
      </div>

      <Container>
        <SectionHeader
          badge="About Us"
          title="Meet Your Dentist"
          subtitle="Experienced, compassionate, and dedicated to your oral health."
        />
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <ScrollReveal animation="fade-right">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/dr-km-reddy.webp"
                alt={DOCTOR.name}
                fill
                className="object-cover object-top transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 448px"
                priority
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-left">
            <div>
              <h3 className="text-2xl font-bold">{DOCTOR.name}</h3>
              <p className="mt-1 text-muted-foreground">{DOCTOR.title}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {DOCTOR.qualifications.map((q) => (
                  <Badge key={q} variant="outline" className="gap-1">
                    <ToothIcon size={10} />
                    {q}
                  </Badge>
                ))}
              </div>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                {DOCTOR.bio}
              </p>
              <Button asChild className="mt-6 group">
                <Link href="/about">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
