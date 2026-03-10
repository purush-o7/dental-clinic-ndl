"use client";

import { Container } from "@/components/common/container";
import { SectionHeader } from "@/components/common/section-header";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { SAINIK_PARIVAR } from "@/lib/data";

export function SainikParivar() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeader
          badge="Special Initiative"
          title={SAINIK_PARIVAR.title}
          subtitle="Honoring those who serve our nation with exclusive dental care benefits."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Description */}
          <ScrollReveal animation="fade-right">
            <div>
              <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                {SAINIK_PARIVAR.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-1.5 border-green-200 bg-green-50 text-green-700 px-3 py-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
                  Defense Personnel
                </Badge>
                <Badge variant="outline" className="gap-1.5 border-green-200 bg-green-50 text-green-700 px-3 py-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  Their Families
                </Badge>
              </div>
            </div>
          </ScrollReveal>

          {/* Benefits list */}
          <ScrollReveal animation="fade-left">
            <div className="rounded-2xl border border-green-200 bg-green-50/50 p-8">
              <h3 className="mb-5 text-lg font-semibold text-green-800">Exclusive Benefits</h3>
              <ul className="space-y-4">
                {SAINIK_PARIVAR.benefits.map((benefit, i) => (
                  <ScrollReveal key={benefit} animation="fade-up" delay={i * 80}>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-600 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                      </div>
                      <span className="text-sm text-green-900/80 leading-relaxed">{benefit}</span>
                    </li>
                  </ScrollReveal>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
