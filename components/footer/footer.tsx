import Image from "next/image";
import { Container } from "@/components/common/container";
import { Separator } from "@/components/ui/separator";
import { SocialLinks } from "@/components/common/social-links";
import { FooterMap } from "./footer-map";
import { CLINIC, NAV_LINKS, SERVICES } from "@/lib/data";
import Link from "next/link";
import { ScrollReveal } from "@/components/common/scroll-reveal";

export function Footer() {
  const topServices = SERVICES.slice(0, 6);

  return (
    <footer className="bg-foreground text-background">
      <Container className="py-16">
        <ScrollReveal animation="fade-up">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt={CLINIC.name}
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="text-base font-bold">{CLINIC.name}</span>
            </div>
            <p className="mt-4 text-sm text-background/70">
              {CLINIC.tagline}. Providing world-class dental care in Nandyal
              for over 11 years.
            </p>
            <div className="mt-4">
              <SocialLinks />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-background"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2">
              {topServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-background/70 transition-colors hover:text-background"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sm font-medium text-primary transition-colors hover:text-background"
                >
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Contact
            </h3>
            <div className="space-y-3 text-sm text-background/70">
              <p>{CLINIC.address}</p>
              {CLINIC.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="block transition-colors hover:text-background"
                >
                  {phone}
                </a>
              ))}
              {CLINIC.emails.map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="block transition-colors hover:text-background"
                >
                  {email}
                </a>
              ))}
              <div className="pt-2">
                <p className="font-medium text-background">Hours</p>
                <p>Mon–Sat: {CLINIC.hours.weekdays}</p>
                <p>Sunday: {CLINIC.hours.sunday}</p>
              </div>
            </div>
          </div>
        </div>

        </ScrollReveal>
        <Separator className="my-8 bg-background/20" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-background/50">
            &copy; {new Date().getFullYear()} {CLINIC.name}. All rights
            reserved.
          </p>
          <FooterMap />
        </div>
      </Container>
    </footer>
  );
}
