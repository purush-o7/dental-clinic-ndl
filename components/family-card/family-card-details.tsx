"use client";

import { ScrollReveal } from "@/components/common/scroll-reveal";
import { Container } from "@/components/common/container";
import { SectionHeader } from "@/components/common/section-header";
import { ToothIcon } from "@/components/common/dental-icons";
import { FAMILY_CARD } from "@/lib/data";
import { motion } from "motion/react";

const benefitIcons = [
  // Discounted Treatments - percentage/tag
  <svg key="discount" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="9" r="2"/><circle cx="15" cy="15" r="2"/><path d="M7.5 16.5 16.5 7.5"/><path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>,
  // Free Annual Checkups - calendar check
  <svg key="checkup" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="m9 16 2 2 4-4"/></svg>,
  // Priority Appointments - clock fast
  <svg key="priority" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/><path d="M22 2 20 4"/></svg>,
  // Free Dental Cleaning - sparkles
  <svg key="cleaning" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/></svg>,
  // Emergency Coverage - shield
  <svg key="emergency" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M12 8v4"/><path d="M10 12h4"/></svg>,
  // Referral Rewards - gift
  <svg key="referral" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/></svg>,
];

export function FamilyCardDetails() {
  return (
    <section className="py-20 bg-secondary/30">
      <Container>
        <SectionHeader
          badge="Benefits"
          title="What You Get"
          subtitle="Every Family Card unlocks these exclusive perks for your entire household."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FAMILY_CARD.benefits.map((benefit, i) => (
            <ScrollReveal key={benefit.title} animation="fade-up" delay={i * 100}>
              <motion.div
                whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="group relative h-full rounded-2xl border border-border/50 bg-background p-7 transition-all duration-300 hover:shadow-xl hover:border-primary/20"
              >
                {/* Icon */}
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  {benefitIcons[i]}
                </div>
                <h3 className="text-lg font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
