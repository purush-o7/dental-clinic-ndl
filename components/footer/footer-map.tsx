"use client";

import { CLINIC } from "@/lib/data";

export function FooterMap() {
  return (
    <a
      href={`https://maps.google.com/?q=${encodeURIComponent(CLINIC.address)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-background/50 transition-colors hover:text-background"
    >
      View on Google Maps
    </a>
  );
}
