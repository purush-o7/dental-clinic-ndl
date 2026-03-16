"use client";

import { motion } from "motion/react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ToothIcon, ToothImplantIcon, ToothSparkleIcon, BracesIcon, SmileTeethIcon, DentalMirrorIcon } from "@/components/common/dental-icons";
import type { Feature } from "@/lib/types";

const featureIcons: Record<string, React.ReactNode> = {
  award: <ToothSparkleIcon size={28} />,
  cpu: <ToothImplantIcon size={28} />,
  heart: <ToothIcon size={28} />,
  wallet: <SmileTeethIcon size={28} />,
  layers: <BracesIcon size={28} />,
  users: <DentalMirrorIcon size={28} />,
};

export function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <motion.div
      whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
    >
      <Card className="group border-border/50 bg-background/80 backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:border-primary/20">
        {/* Mobile: horizontal compact layout */}
        <CardHeader className="flex-row items-start gap-4 sm:flex-col sm:items-stretch sm:gap-0">
          <div className="shrink-0 sm:mb-4 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
            {featureIcons[feature.iconName] ?? <ToothIcon size={28} />}
          </div>
          <div>
            <CardTitle className="text-base sm:text-lg">{feature.title}</CardTitle>
            <CardDescription className="mt-1.5 leading-relaxed text-sm">{feature.description}</CardDescription>
          </div>
        </CardHeader>
      </Card>
    </motion.div>
  );
}
