"use client";

import Image from "next/image";
import { Container } from "@/components/common/container";
import { NavbarLinks } from "./navbar-links";
import { MobileMenu } from "./mobile-menu";
import { NavbarCta } from "./navbar-cta";
import { CLINIC } from "@/lib/data";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";

export function Navbar() {
  const { scrollY } = useScroll();

  const height = useTransform(scrollY, [0, 100], ["4rem", "3.5rem"]);
  const shadow = useTransform(
    scrollY,
    [0, 50, 150],
    [
      "0 0 0 0 rgba(0,0,0,0)",
      "0 1px 6px 0 rgba(0,0,0,0.04)",
      "0 4px 20px -2px rgba(0,0,0,0.08)",
    ]
  );

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl"
      style={{ boxShadow: shadow }}
    >
      <Container>
        <motion.div
          className="flex items-center justify-between"
          style={{ height }}
        >
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
        </motion.div>
      </Container>
    </motion.header>
  );
}
