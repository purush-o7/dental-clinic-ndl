"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/container";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { ToothIcon, ToothSparkleIcon } from "@/components/common/dental-icons";
import { AppointmentDialog } from "@/components/appointment/appointment-dialog";
import { CLINIC } from "@/lib/data";

export function AboutCta() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative bg-gradient-to-br from-primary to-primary/80 py-20 text-primary-foreground overflow-hidden">
      {/* Floating decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[20%] animate-float opacity-10">
          <ToothIcon size={40} className="text-white" />
        </div>
        <div className="absolute right-[12%] top-[25%] animate-float-delayed opacity-10">
          <ToothSparkleIcon size={50} className="text-white" />
        </div>
        <div className="absolute left-[55%] bottom-[15%] animate-float opacity-10 [animation-delay:1s]">
          <ToothIcon size={30} className="text-white" />
        </div>
      </div>

      <Container>
        <ScrollReveal animation="scale-in">
          <div className="text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/10">
              <ToothSparkleIcon size={28} className="text-primary-foreground" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Transform Your Smile?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80 text-lg">
              Schedule a consultation with Dr. Reddy and take the first step towards a healthier smile.
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
