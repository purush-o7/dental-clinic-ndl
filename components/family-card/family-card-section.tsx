"use client";

import { Container } from "@/components/common/container";
import { SectionHeader } from "@/components/common/section-header";
import { BenefitItem } from "./benefit-item";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { ToothIcon } from "@/components/common/dental-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FAMILY_CARD, CLINIC } from "@/lib/data";
import Link from "next/link";

export function FamilyCardSection() {
  const topBenefits = FAMILY_CARD.benefits.slice(0, 4);

  return (
    <section className="relative py-24 bg-secondary/30 overflow-hidden">
      {/* Decorative */}
      <div className="pointer-events-none absolute left-10 bottom-10 opacity-[0.04] rotate-45">
        <ToothIcon size={200} />
      </div>

      <Container>
        <SectionHeader
          badge="Family Card"
          title="K.M. Reddy Family Card"
          subtitle="Save more on dental care for your entire family with our exclusive membership program."
        />
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <ScrollReveal animation="fade-right">
            <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground overflow-hidden relative group transition-transform duration-500 hover:scale-[1.02]">
              {/* Decorative tooth on card */}
              <div className="pointer-events-none absolute -right-8 -bottom-8 opacity-10">
                <ToothIcon size={120} className="text-white" />
              </div>
              <div className="pointer-events-none absolute -left-4 -top-4 opacity-10 rotate-45">
                <ToothIcon size={60} className="text-white" />
              </div>

              <CardHeader className="pb-2">
                <p className="text-sm text-primary-foreground/70">Membership</p>
                <CardTitle className="text-2xl">{CLINIC.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">Family Card</p>
                <p className="mt-2 text-sm text-primary-foreground/70">
                  Exclusive benefits for the whole family
                </p>
                <div className="mt-6 flex gap-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold">20%</p>
                    <p className="text-xs text-primary-foreground/70">
                      Discount
                    </p>
                  </div>
                  <div className="h-12 w-px bg-primary-foreground/20" />
                  <div className="text-center">
                    <p className="text-3xl font-bold">Free</p>
                    <p className="text-xs text-primary-foreground/70">
                      Checkups
                    </p>
                  </div>
                  <div className="h-12 w-px bg-primary-foreground/20" />
                  <div className="text-center">
                    <p className="text-3xl font-bold">24/7</p>
                    <p className="text-xs text-primary-foreground/70">
                      Emergency
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          <div className="space-y-4">
            {topBenefits.map((benefit, i) => (
              <ScrollReveal key={benefit.title} animation="fade-left" delay={i * 100}>
                <BenefitItem benefit={benefit} />
              </ScrollReveal>
            ))}
            <ScrollReveal animation="fade-left" delay={400}>
              <Button asChild className="mt-4 group">
                <Link href="/family-card">
                  View All Benefits
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
