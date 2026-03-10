"use client";

import { Container } from "@/components/common/container";
import { SectionHeader } from "@/components/common/section-header";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { ToothIcon } from "@/components/common/dental-icons";
import { CLINIC } from "@/lib/data";

const cards = [
  {
    title: "Visit Us",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
    ),
    content: CLINIC.address,
    link: null as string | null,
  },
  {
    title: "Working Hours",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    ),
    content: `Mon–Sat: ${CLINIC.hours.weekdays}\nSunday: ${CLINIC.hours.sunday}`,
    link: null,
  },
  {
    title: "Get in Touch",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
    ),
    content: CLINIC.phones.join("\n") + "\n" + CLINIC.emails.join("\n"),
    link: `tel:${CLINIC.phones[0].replace(/\s/g, "")}`,
  },
];

export function ClinicInfo() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Decorative */}
      <div className="pointer-events-none absolute right-10 bottom-10 opacity-[0.03]">
        <ToothIcon size={200} />
      </div>

      <Container>
        <SectionHeader
          badge="Our Clinic"
          title="Visit K.M. Reddy Dental Care"
          subtitle="Conveniently located in Nandyal with flexible hours to suit your schedule."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <ScrollReveal key={card.title} animation="fade-up" delay={i * 120}>
              <div className="group relative h-full rounded-2xl border border-border/50 bg-background p-8 text-center transition-all duration-300 hover:shadow-xl hover:border-primary/20 hover:-translate-y-1">
                {/* Icon circle */}
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <div className="mt-3 space-y-1">
                  {card.content.split("\n").map((line) => (
                    <p key={line} className="text-sm text-muted-foreground leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
                {card.link && (
                  <a
                    href={card.link}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    Call Now
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </a>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
