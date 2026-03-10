import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/common/container";
import { SectionHeader } from "@/components/common/section-header";
import { FeaturedService } from "@/components/services/featured-service";
import { ServicesPageGrid } from "@/components/services/services-page-grid";
import { ServicesCta } from "@/components/services/services-cta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our comprehensive range of dental services including implants, cosmetic dentistry, orthodontics, root canals, and more.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Featured service spotlight */}
      <FeaturedService />

      {/* All services grid */}
      <section className="relative overflow-hidden py-20">
        {/* Tooth mascot decoration */}
        <div className="pointer-events-none absolute -right-10 bottom-0 opacity-[0.12]">
          <Image
            src="/tooth-mascot.png"
            alt=""
            width={400}
            height={624}
            aria-hidden="true"
            className="w-64 lg:w-80"
          />
        </div>

        <Container>
          <SectionHeader
            badge="Our Services"
            title="All Dental Services"
            subtitle="We offer a comprehensive range of dental treatments to meet all your oral health needs."
          />
          <ServicesPageGrid />
        </Container>
      </section>

      {/* CTA */}
      <ServicesCta />
    </>
  );
}
