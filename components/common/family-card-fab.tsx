"use client";

import Link from "next/link";
import { ToothSparkleIcon } from "@/components/common/dental-icons";

export function FamilyCardFab() {
  return (
    <Link
      href="/family-card"
      className="fixed bottom-20 right-4 z-40 flex h-10 sm:h-12 items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-4 sm:px-5 text-white shadow-lg transition-transform hover:scale-105 animate-pulse-soft sm:bottom-24 sm:right-6"
    >
      <ToothSparkleIcon size={18} />
      <span className="text-sm font-semibold">Family Card</span>
    </Link>
  );
}
