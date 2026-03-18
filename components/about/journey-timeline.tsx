"use client";

import { useRef } from "react";
import { Container } from "@/components/common/container";
import { SectionHeader } from "@/components/common/section-header";
import { ToothIcon, ToothSparkleIcon } from "@/components/common/dental-icons";
import { Badge } from "@/components/ui/badge";
import { DOCTOR } from "@/lib/data";
import { motion, useScroll, useTransform, useInView } from "motion/react";

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
    activeColor: "bg-blue-500",
    badgeClass: "bg-blue-50 text-blue-700 border-blue-200",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
    ),
  },
  award: {
    label: "Award",
    activeColor: "bg-yellow-500",
    badgeClass: "bg-yellow-50 text-yellow-700 border-yellow-200",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
    ),
  },
  publication: {
    label: "Publication",
    activeColor: "bg-emerald-500",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
    ),
  },
};

function TimelineEntry({ item, index }: { item: TimelineItem; index: number }) {
  const config = typeConfig[item.type];
  const isLeft = index % 2 === 0;
  const nodeRef = useRef<HTMLDivElement>(null);
  const isActive = useInView(nodeRef, { once: true, margin: "0px 0px -20% 0px" });

  const activeColors: Record<string, string> = {
    "bg-blue-500": "#3b82f6",
    "bg-yellow-500": "#eab308",
    "bg-emerald-500": "#10b981",
  };
  const activeColor = activeColors[config.activeColor] ?? "#3b82f6";
  const inactiveColor = "#9ca3af";

  return (
    <div className="relative">
      {/* Node dot on the spine — starts gray, activates when ray passes */}
      <div ref={nodeRef} className="absolute left-6 top-6 z-10 -translate-x-1/2 lg:left-1/2">
        <motion.div
          className="flex h-8 w-8 items-center justify-center rounded-full text-white shadow-lg ring-4 ring-background"
          animate={{
            backgroundColor: isActive ? activeColor : inactiveColor,
            scale: isActive ? 1 : 0.85,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 15, bounce: 0.4 }}
        >
          <ToothIcon size={14} />
        </motion.div>
      </div>

      {/* Card — mobile: always right; desktop: alternating */}
      <motion.div
        className={`ml-16 lg:ml-0 lg:w-[calc(50%-2rem)] ${isLeft ? "lg:mr-auto" : "lg:ml-auto"}`}
        initial={false}
        animate={{
          opacity: isActive ? 1 : 0.4,
          x: isActive ? 0 : (isLeft ? -20 : 20),
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      >
        <motion.div
          className="group relative rounded-2xl border bg-background p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          animate={{
            borderColor: isActive ? "hsl(var(--primary) / 0.2)" : "hsl(var(--border) / 0.5)",
          }}
          transition={{ duration: 0.5 }}
        >
          {/* Type badge */}
          <div className="flex items-center gap-3 mb-3">
            <Badge
              variant="outline"
              className={`gap-1 text-xs transition-all duration-500 ${isActive ? config.badgeClass : "bg-muted/50 text-muted-foreground border-border"}`}
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
        </motion.div>
      </motion.div>
    </div>
  );
}

function ScrollProgressSpine() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.5"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="absolute left-6 top-0 bottom-0 lg:left-1/2">
      {/* Background track — muted gray, the unfilled portion */}
      <div className="absolute left-1/2 -translate-x-1/2 h-full w-[3px] rounded-full bg-border/40" />

      {/* Animated progress fill — primary colored ray */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] origin-top rounded-full"
        style={{
          height,
          background: "linear-gradient(to bottom, hsl(var(--primary) / 0.2), hsl(var(--primary) / 0.6), hsl(var(--primary)))",
        }}
      >
        {/* Soft glow aura behind the filled line */}
        <div
          className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-3 rounded-full blur-[6px]"
          style={{ background: "hsl(var(--primary) / 0.35)" }}
        />

        {/* Glowing tooth tip at the leading edge */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
          {/* Wide outer glow */}
          <div className="absolute -inset-3 rounded-full blur-md" style={{ background: "hsl(var(--primary) / 0.35)" }} />
          {/* Tooth icon with glow */}
          <div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white shadow-[0_0_20px_6px_hsl(var(--primary)/0.5)]">
            <ToothIcon size={14} />
          </div>
          {/* Ping animation */}
          <div className="absolute inset-0 h-7 w-7 rounded-full bg-primary animate-ping opacity-20" />
        </div>
      </motion.div>
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
          {/* Scroll-tracked progress spine */}
          <ScrollProgressSpine />

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
