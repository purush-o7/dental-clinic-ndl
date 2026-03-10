"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/common/container";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { ToothIcon, ToothSparkleIcon } from "@/components/common/dental-icons";
import { CLINIC } from "@/lib/data";

export function ContactHero() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 py-20 lg:py-24 overflow-hidden">
      {/* Decorative */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute right-[8%] top-[12%] animate-float opacity-[0.05]">
        <ToothSparkleIcon size={120} />
      </div>

      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Text + quick actions */}
          <div className="text-center lg:text-left">
            <ScrollReveal animation="fade-up">
              <Badge variant="secondary" className="mb-4 gap-1.5">
                <ToothIcon size={12} />
                Contact Us
              </Badge>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={100}>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                We&apos;d Love to<br />
                <span className="text-primary">Hear From You</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <p className="mt-4 max-w-lg text-lg text-muted-foreground mx-auto lg:mx-0">
                Have a question or ready to book? Reach out through any of the channels below — we&apos;re here to help you smile.
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={300}>
              <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                <Button asChild size="lg">
                  <a href={`tel:${CLINIC.phones[0].replace(/\s/g, "")}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    Call Us
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-green-300 text-green-700 hover:bg-green-50">
                  <a href={CLINIC.social.whatsapp} target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mr-2"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    WhatsApp
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={`https://www.google.com/maps/place/K.+M.+Reddy+Dental+care+and+Implant+center`} target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    Get Directions
                  </a>
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Illustration */}
          <ScrollReveal animation="scale-in" className="flex justify-center">
            <Image
              src="/dentist-tooth.png"
              alt="Dentists taking care of a tooth"
              width={800}
              height={726}
              className="w-72 sm:w-80 lg:w-96"
            />
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
