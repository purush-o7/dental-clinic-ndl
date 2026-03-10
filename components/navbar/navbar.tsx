import Image from "next/image";
import { Container } from "@/components/common/container";
import { NavbarLinks } from "./navbar-links";
import { MobileMenu } from "./mobile-menu";
import { NavbarCta } from "./navbar-cta";
import { CLINIC } from "@/lib/data";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt={CLINIC.name}
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <div className="hidden sm:block">
              <span className="text-base font-bold leading-tight">
                {CLINIC.name}
              </span>
            </div>
          </Link>

          <div className="hidden lg:block">
            <NavbarLinks />
          </div>

          <div className="flex items-center gap-3">
            <NavbarCta />
            <div className="lg:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
