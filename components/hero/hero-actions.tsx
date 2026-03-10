"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AppointmentDialog } from "@/components/appointment/appointment-dialog";
import { CLINIC } from "@/lib/data";

export function HeroActions() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start justify-center">
      <Button onClick={() => setOpen(true)} size="lg" className="min-w-[180px]">
        Book Appointment
      </Button>
      <Button asChild variant="outline" size="lg" className="min-w-[180px]">
        <a href={`tel:${CLINIC.phones[0].replace(/\s/g, "")}`}>
          Call Now
        </a>
      </Button>
      <AppointmentDialog open={open} onOpenChange={setOpen} />
    </div>
  );
}
