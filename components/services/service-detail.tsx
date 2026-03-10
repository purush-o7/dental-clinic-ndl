"use client";

import { useState } from "react";
import { Container } from "@/components/common/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { ToothIcon, ToothSparkleIcon } from "@/components/common/dental-icons";
import { ServiceCard, getServiceIcon } from "./service-card";
import { AppointmentDialog } from "@/components/appointment/appointment-dialog";
import { SERVICES, CLINIC } from "@/lib/data";
import type { Service } from "@/lib/types";
import Link from "next/link";

function Breadcrumbs({ service }: { service: Service }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
        <li>
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </li>
        <li>
          <Link href="/services" className="hover:text-foreground transition-colors">Services</Link>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </li>
        <li className="text-foreground font-medium">{service.title}</li>
      </ol>
    </nav>
  );
}

function ServiceHero({ service }: { service: Service }) {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 py-16 overflow-hidden">
      <div className="pointer-events-none absolute right-[5%] top-[15%] animate-float opacity-[0.04]">
        <ToothSparkleIcon size={180} />
      </div>

      <Container>
        <Breadcrumbs service={service} />

        <ScrollReveal animation="fade-up">
          <div className="flex items-start gap-6">
            <div className="hidden sm:flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              {getServiceIcon(service.iconName)}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Badge variant="secondary" className="gap-1">
                  <ToothIcon size={10} />
                  {service.category}
                </Badge>
              </div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {service.title}
              </h1>
              <p className="mt-4 max-w-3xl text-lg text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

function FeatureChips({ service }: { service: Service }) {
  return (
    <section className="py-16">
      <Container>
        <ScrollReveal animation="fade-up">
          <h2 className="mb-8 text-2xl font-bold flex items-center gap-2">
            <ToothIcon size={22} className="text-primary" />
            What We Offer
          </h2>
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {service.features.map((feature, i) => (
            <ScrollReveal key={feature} animation="fade-up" delay={i * 60}>
              <div className="group flex items-start gap-3 rounded-xl border border-border/50 bg-background p-5 transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <span className="text-sm font-medium leading-relaxed">{feature}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function RelatedServices({ current }: { current: Service }) {
  // Get services from same category first, then others, exclude current
  const sameCategory = SERVICES.filter(
    (s) => s.category === current.category && s.slug !== current.slug
  );
  const otherServices = SERVICES.filter(
    (s) => s.category !== current.category && s.slug !== current.slug
  );
  const related = [...sameCategory, ...otherServices].slice(0, 3);

  return (
    <section className="py-16 bg-secondary/30">
      <Container>
        <ScrollReveal animation="fade-up">
          <h2 className="mb-2 text-2xl font-bold">You Might Also Be Interested In</h2>
          <p className="mb-8 text-muted-foreground">Explore other services we offer.</p>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((service, i) => (
            <ScrollReveal key={service.slug} animation="fade-up" delay={i * 100}>
              <ServiceCard service={service} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function DetailCta() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative bg-gradient-to-br from-primary to-primary/80 py-20 text-primary-foreground overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[20%] animate-float opacity-10">
          <ToothIcon size={36} className="text-white" />
        </div>
        <div className="absolute right-[15%] bottom-[20%] animate-float-delayed opacity-10">
          <ToothSparkleIcon size={45} className="text-white" />
        </div>
      </div>

      <Container>
        <ScrollReveal animation="scale-in">
          <div className="text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/10">
              <ToothSparkleIcon size={28} className="text-primary-foreground" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80 text-lg">
              Book your appointment today and let our expert team take care of your smile.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                onClick={() => setOpen(true)}
                size="lg"
                variant="secondary"
                className="min-w-[200px]"
              >
                <ToothIcon size={16} className="mr-2" />
                Book Appointment
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="min-w-[200px] border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <a href={`tel:${CLINIC.phones[0].replace(/\s/g, "")}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Container>
      <AppointmentDialog open={open} onOpenChange={setOpen} />
    </section>
  );
}

export function ServiceDetail({ service }: { service: Service }) {
  return (
    <>
      <ServiceHero service={service} />
      <FeatureChips service={service} />
      <RelatedServices current={service} />
      <DetailCta />
    </>
  );
}
