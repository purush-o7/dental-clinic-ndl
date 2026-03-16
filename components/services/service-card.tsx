"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ToothIcon, ToothImplantIcon, ToothSparkleIcon, BracesIcon, SmileTeethIcon, DentalMirrorIcon } from "@/components/common/dental-icons";
import type { Service } from "@/lib/types";
import Link from "next/link";
import { motion } from "motion/react";

const serviceIcons: Record<string, React.ReactNode> = {
  tooth: <ToothImplantIcon size={28} />,
  sparkle: <ToothSparkleIcon size={28} />,
  grid: <BracesIcon size={28} />,
  heartbeat: <ToothIcon size={28} />,
  sun: <ToothSparkleIcon size={28} />,
  crown: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7z"/><path d="M5 16h14"/><path d="M5 20h14"/></svg>
  ),
  smile: <SmileTeethIcon size={28} />,
  child: <SmileTeethIcon size={28} />,
  leaf: <DentalMirrorIcon size={28} />,
  scalpel: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/></svg>
  ),
  shield: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
  ),
  diamond: <ToothSparkleIcon size={28} />,
  activity: <DentalMirrorIcon size={28} />,
};

export function getServiceIcon(iconName: string) {
  return serviceIcons[iconName] ?? <ToothIcon size={28} />;
}

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  return (
    <Link href={`/services/${service.slug}`} className="group block">
      <motion.div
        whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      >
        <Card className="h-full border-border/50 bg-gradient-to-br from-background to-secondary/30 transition-all duration-500 hover:shadow-xl hover:border-primary/20">
          <CardHeader>
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:rotate-3">
              {getServiceIcon(service.iconName)}
            </div>
            <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
              {service.title}
            </CardTitle>
            <CardDescription className="leading-relaxed">
              {service.shortDescription}
            </CardDescription>
            <div className="mt-3 flex items-center text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </div>
          </CardHeader>
        </Card>
      </motion.div>
    </Link>
  );
}
