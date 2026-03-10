"use client";

import Link from "next/link";
import { ToothSparkleIcon } from "@/components/common/dental-icons";

export function FamilyCardFab() {
  return (
    <Link
      href="/family-card"
      className="fixed bottom-24 right-6 z-40 flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-5 text-white shadow-lg transition-transform hover:scale-105 animate-pulse-soft"
    >
      <ToothSparkleIcon size={18} />
      <span className="text-sm font-semibold">Family Card</span>
    </Link>
  );
}
