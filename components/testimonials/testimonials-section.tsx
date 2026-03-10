"use client";

import { Container } from "@/components/common/container";
import { SectionHeader } from "@/components/common/section-header";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { ToothIcon, ToothSparkleIcon } from "@/components/common/dental-icons";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { TESTIMONIALS } from "@/lib/data";
import type { Testimonial } from "@/lib/types";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={i < rating ? "text-yellow-500" : "text-muted-foreground/30"}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function MarqueeCard({ testimonial }: { testimonial: Testimonial }) {
  const initials = testimonial.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <Card className="group w-[380px] shrink-0 border-border/50 bg-background transition-all duration-300 hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 relative overflow-hidden">
      {/* Large quote mark */}
      <div className="pointer-events-none absolute right-4 top-2 text-8xl font-serif leading-none text-primary/[0.06] select-none">
        &rdquo;
      </div>

      <CardContent className="px-6 pt-6 pb-5">
        {/* Header: avatar + info */}
        <div className="flex items-center gap-3 mb-4">
          <Avatar className="h-11 w-11 ring-2 ring-primary/20 ring-offset-2 ring-offset-background">
            <AvatarFallback className="bg-primary/10 text-primary text-sm font-bold">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <p className="font-semibold text-sm truncate">{testimonial.name}</p>
              <Badge variant="outline" className="text-[10px] gap-0.5 px-1.5 py-0 text-green-600 border-green-200 bg-green-50 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                Verified
              </Badge>
            </div>
            <Badge variant="secondary" className="mt-1 text-[10px] gap-1 px-2 py-0.5">
              <ToothIcon size={9} />
              {testimonial.treatment}
            </Badge>
          </div>
        </div>

        {/* Stars */}
        <StarRating rating={testimonial.rating} />

        {/* Quote */}
        <blockquote className="mt-3 text-[13px] text-foreground/80 leading-relaxed">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
      </CardContent>
    </Card>
  );
}

function MarqueeRow({ items, reverse = false }: { items: Testimonial[]; reverse?: boolean }) {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div
        className={`flex gap-6 py-2 ${reverse ? "animate-[marquee-reverse_45s_linear_infinite]" : "animate-[marquee_45s_linear_infinite]"} hover:[animation-play-state:paused]`}
      >
        {doubled.map((testimonial, i) => (
          <MarqueeCard key={`${testimonial.id}-${i}`} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}

function AggregateRating() {
  const avg = (TESTIMONIALS.reduce((sum, t) => sum + t.rating, 0) / TESTIMONIALS.length).toFixed(1);

  return (
    <ScrollReveal animation="fade-up" delay={100}>
      <div className="mb-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <div className="flex items-center gap-3 rounded-2xl bg-yellow-50 px-5 py-3 border border-yellow-100 shadow-sm">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-yellow-500"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
          <span className="text-xl font-bold text-yellow-700">{avg}</span>
          <span className="text-sm text-yellow-600/80">/ 5</span>
        </div>
        <div className="h-8 w-px bg-border hidden sm:block" />
        <p className="text-sm text-muted-foreground">
          Based on <span className="font-semibold text-foreground">{TESTIMONIALS.length}+ verified patient reviews</span>
        </p>
      </div>
    </ScrollReveal>
  );
}

export function TestimonialsSection() {
  const row1 = TESTIMONIALS.slice(0, 4);
  const row2 = TESTIMONIALS.slice(4, 8);

  return (
    <section className="relative py-28 overflow-hidden">
      {/* Decorative */}
      <div className="pointer-events-none absolute right-8 bottom-12 opacity-[0.03] -rotate-12">
        <ToothSparkleIcon size={250} />
      </div>
      <div className="pointer-events-none absolute left-4 top-24 opacity-[0.03] rotate-6">
        <ToothIcon size={200} />
      </div>

      <Container>
        <SectionHeader
          badge="Testimonials"
          title="What Our Patients Say"
          subtitle="Real stories from real patients who trust us with their smiles."
        />
        <AggregateRating />
      </Container>

      {/* Full-bleed marquee rows */}
      <div className="space-y-6 mt-2">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
    </section>
  );
}
