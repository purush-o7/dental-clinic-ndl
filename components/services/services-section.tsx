"use client";

import { Container } from "@/components/common/container";
import { SectionHeader } from "@/components/common/section-header";
import { ServiceCard } from "./service-card";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { ToothIcon } from "@/components/common/dental-icons";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/data";
import Link from "next/link";

export function ServicesSection() {
  const featured = SERVICES.slice(0, 6);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Decorative tooth watermarks */}
      <div className="pointer-events-none absolute -right-8 top-20 opacity-[0.03]">
        <ToothIcon size={300} />
      </div>
      <div className="pointer-events-none absolute -left-12 bottom-20 opacity-[0.03] rotate-12">
        <ToothIcon size={200} />
      </div>

      <Container>
        <SectionHeader
          badge="Our Services"
          title="Comprehensive Dental Care"
          subtitle="From routine checkups to advanced procedures, we offer a full range of dental services to keep your smile healthy and beautiful."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service, i) => (
            <ScrollReveal
              key={service.slug}
              animation="fade-up"
              delay={i * 100}
            >
              <ServiceCard service={service} index={i} />
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal animation="fade-up" delay={600}>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="group">
              <Link href="/services">
                View All Services
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
