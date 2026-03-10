"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AppointmentDialog } from "@/components/appointment/appointment-dialog";

export function BookNowFab() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="fixed bottom-34 right-4 z-40 h-10 sm:h-12 rounded-full px-4 sm:px-5 shadow-lg sm:bottom-40 sm:right-6"
        size="lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2"
        >
          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
          <line x1="16" x2="16" y1="2" y2="6" />
          <line x1="8" x2="8" y1="2" y2="6" />
          <line x1="3" x2="21" y1="10" y2="10" />
        </svg>
        Book Now
      </Button>
      <AppointmentDialog open={open} onOpenChange={setOpen} />
    </>
  );
}
