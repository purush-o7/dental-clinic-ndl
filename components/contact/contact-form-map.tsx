"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/common/container";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { SectionHeader } from "@/components/common/section-header";
import { AppointmentForm } from "@/components/appointment/appointment-form";
import { CLINIC } from "@/lib/data";

export function ContactFormMap() {
  return (
    <section className="py-20 bg-secondary/30">
      <Container>
        <SectionHeader
          badge="Book Online"
          title="Schedule Your Visit"
          subtitle="Fill out the form below and we'll get back to you within 24 hours."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Form */}
          <ScrollReveal animation="fade-right">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Book an Appointment</CardTitle>
              </CardHeader>
              <CardContent>
                <AppointmentForm />
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Map */}
          <ScrollReveal animation="fade-left">
            <div className="h-full overflow-hidden rounded-xl border border-border shadow-sm">
              <iframe
                src={CLINIC.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 500, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="K.M. Reddy Dental Care Location"
              />
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
