import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/common/container";
import { SectionHeader } from "@/components/common/section-header";
import { FeaturedService } from "@/components/services/featured-service";
import { ServicesPageGrid } from "@/components/services/services-page-grid";
import { ServicesCta } from "@/components/services/services-cta";
import { getBreadcrumbSchema, getFaqSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Dental Services — Implants, Cosmetic, Orthodontics & More",
  description:
    "Explore 13+ dental services at K.M. Reddy Dental Care, Nandyal: dental implants, cosmetic dentistry, orthodontics, root canal, teeth whitening, crowns & bridges, pediatric dentistry, gum treatment, oral surgery, and more. Affordable, advanced treatments.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Dental Services at K.M. Reddy Dental Care, Nandyal",
    description:
      "13+ advanced dental services including implants, cosmetic dentistry, orthodontics, root canal & more. Book your appointment today!",
    url: "/services",
  },
};

const servicesFaqs = [
  {
    question: "What dental services does K.M. Reddy Dental Care offer in Nandyal?",
    answer:
      "We offer 13+ dental services including dental implants, cosmetic dentistry (veneers, bonding), orthodontics (braces, aligners), root canal treatment, teeth whitening, crowns & bridges, dentures, pediatric dentistry, gum treatment, oral surgery, preventive dentistry, dental jewelry, and TMJ treatment.",
  },
  {
    question: "How much do dental implants cost in Nandyal?",
    answer:
      "Dental implant costs vary based on the type of implant and restoration needed. At K.M. Reddy Dental Care, we offer affordable implant solutions. Contact us at +91 995 915 3005 for a personalized consultation and cost estimate.",
  },
  {
    question: "Is orthodontic treatment (braces) available in Nandyal?",
    answer:
      "Yes, K.M. Reddy Dental Care offers comprehensive orthodontic treatment including traditional metal braces, ceramic braces, and clear aligners. Our treatments are suitable for children, teens, and adults.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "Services", href: "/services" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqSchema(servicesFaqs)) }}
      />

      <FeaturedService />

      <section className="relative overflow-hidden py-20">
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

      <ServicesCta />
    </>
  );
}
