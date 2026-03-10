"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { Container } from "@/components/common/container";
import { ToothImplantIcon, ToothIcon, ToothSparkleIcon } from "@/components/common/dental-icons";
import { SERVICES } from "@/lib/data";
import Link from "next/link";

export function FeaturedService() {
  const implants = SERVICES.find((s) => s.slug === "dental-implants")!;

  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 py-16 overflow-hidden">
      {/* Decorative */}
      <div className="pointer-events-none absolute right-[5%] top-[10%] animate-float opacity-[0.05]">
        <ToothSparkleIcon size={150} />
      </div>

      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <ScrollReveal animation="fade-right">
            <div>
              <Badge variant="secondary" className="mb-4 gap-1.5 bg-primary/10 text-primary border-primary/20">
                <ToothIcon size={12} />
                Our Signature Service
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {implants.title}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed text-base lg:text-lg">
                {implants.description}
              </p>
              <div className="mt-6 flex gap-4">
                <Button asChild size="lg" className="group">
                  <Link href={`/services/${implants.slug}`}>
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Book Now</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-left">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border/50 bg-background p-6 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <p className="text-3xl font-bold text-primary">1000+</p>
                <p className="mt-1 text-sm text-muted-foreground">Implants Placed</p>
              </div>
              <div className="rounded-2xl border border-border/50 bg-background p-6 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <p className="text-3xl font-bold text-primary">98%</p>
                <p className="mt-1 text-sm text-muted-foreground">Success Rate</p>
              </div>
              <div className="rounded-2xl border border-border/50 bg-background p-6 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ToothImplantIcon size={24} />
                </div>
                <p className="text-sm font-medium">All-on-4 / All-on-6</p>
              </div>
              <div className="rounded-2xl border border-border/50 bg-background p-6 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ToothSparkleIcon size={24} />
                </div>
                <p className="text-sm font-medium">Immediate Loading</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
