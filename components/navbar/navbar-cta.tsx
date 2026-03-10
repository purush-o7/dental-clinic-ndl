import { Button } from "@/components/ui/button";
import Link from "next/link";

export function NavbarCta() {
  return (
    <Button asChild size="sm" className="hidden sm:inline-flex">
      <Link href="/contact">Book Appointment</Link>
    </Button>
  );
}
