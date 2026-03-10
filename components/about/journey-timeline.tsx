"use client";

import { useEffect, useRef } from "react";
import { Container } from "@/components/common/container";
import { SectionHeader } from "@/components/common/section-header";
import { ToothIcon, ToothSparkleIcon } from "@/components/common/dental-icons";
import { Badge } from "@/components/ui/badge";
import { DOCTOR } from "@/lib/data";

type TimelineItem = {
  year: string;
  type: "education" | "award" | "publication";
  title: string;
  subtitle: string;
};

function getTimelineItems(): TimelineItem[] {
  const items: TimelineItem[] = [];

  DOCTOR.education.forEach((edu) => {
    items.push({
      year: edu.year,
      type: "education",
      title: edu.degree,
      subtitle: edu.institution,
    });
  });

  DOCTOR.awards.forEach((award) => {
    items.push({
      year: award.year,
      type: "award",
      title: award.title,
      subtitle: award.organization,
    });
  });

  DOCTOR.publications.forEach((pub) => {
    items.push({
      year: pub.year,
      type: "publication",
      title: pub.title,
      subtitle: pub.journal,
    });
  });

  return items.sort((a, b) => parseInt(a.year) - parseInt(b.year));
}

const typeConfig = {
  education: {
    label: "Education",
    color: "bg-blue-500",
    badgeClass: "bg-blue-50 text-blue-700 border-blue-200",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
    ),
  },
  award: {
    label: "Award",
    color: "bg-yellow-500",
    badgeClass: "bg-yellow-50 text-yellow-700 border-yellow-200",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
    ),
  },
  publication: {
    label: "Publication",
    color: "bg-emerald-500",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
    ),
  },
};

function TimelineEntry({ item, index }: { item: TimelineItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const config = typeConfig[item.type];
  const isLeft = index % 2 === 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateX(0)";
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      {/* Node dot on the spine */}
      <div className="absolute left-6 top-6 z-10 -translate-x-1/2 lg:left-1/2">
        <div className={`flex h-8 w-8 items-center justify-center rounded-full ${config.color} text-white shadow-lg ring-4 ring-background`}>
          <ToothIcon size={14} />
        </div>
      </div>

      {/* Card — mobile: always right; desktop: alternating */}
      <div
        ref={ref}
        className={`ml-16 lg:ml-0 lg:w-[calc(50%-2rem)] ${isLeft ? "lg:mr-auto" : "lg:ml-auto"}`}
        style={{
          opacity: 0,
          transform: isLeft ? "translateX(-40px)" : "translateX(40px)",
          transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${index * 80}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${index * 80}ms`,
        }}
      >
        <div className="group relative rounded-2xl border border-border/50 bg-background p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-primary/20 hover:-translate-y-1">
          {/* Type badge */}
          <div className="flex items-center gap-3 mb-3">
            <Badge
              variant="outline"
              className={`gap-1 text-xs ${config.badgeClass}`}
            >
              {config.icon}
              {config.label}
            </Badge>
            <span className="text-sm font-mono text-muted-foreground">{item.year}</span>
          </div>

          <h3 className="text-lg font-semibold leading-snug">{item.title}</h3>
          <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
            {item.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

export function JourneyTimeline() {
  const items = getTimelineItems();

  return (
    <section className="relative py-24 bg-secondary/30 overflow-hidden">
      {/* Decorative */}
      <div className="pointer-events-none absolute right-8 top-24 opacity-[0.03] -rotate-12">
        <ToothSparkleIcon size={200} />
      </div>
      <div className="pointer-events-none absolute left-8 bottom-20 opacity-[0.03] rotate-6">
        <ToothIcon size={160} />
      </div>

      <Container>
        <SectionHeader
          badge="Journey"
          title="Education, Awards & Publications"
          subtitle="A timeline of dedication to excellence in dental care."
        />

        <div className="relative mx-auto max-w-4xl">
          {/* Vertical spine */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent lg:left-1/2 lg:-translate-x-px" />

          <div className="space-y-10 lg:space-y-12">
            {items.map((item, i) => (
              <TimelineEntry
                key={`${item.year}-${item.title}`}
                item={item}
                index={i}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
