import type { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { BioSection } from "@/components/about/bio-section";
import { JourneyTimeline } from "@/components/about/journey-timeline";
import { ClinicInfo } from "@/components/about/clinic-info";
import { AboutCta } from "@/components/about/about-cta";
import { getDoctorSchema, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Dr. K. Mallikarjuna Reddy — Best Dentist in Nandyal",
  description:
    "Meet Dr. K. Mallikarjuna Reddy (BDS, MDS, FICOI USA), founder of K.M. Reddy Dental Care in Nandyal. 11+ years experience, 1000+ dental implants placed, award-winning prosthodontist and implantologist in Andhra Pradesh.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Dr. K. Mallikarjuna Reddy — K.M. Reddy Dental Care",
    description:
      "Award-winning dentist in Nandyal with 11+ years experience. BDS, MDS (Prosthodontics), FICOI (USA). Specialist in dental implants and cosmetic dentistry.",
    url: "/about",
    images: [{ url: "/dr-km-reddy.webp", width: 384, height: 384, alt: "Dr. K. Mallikarjuna Reddy" }],
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getDoctorSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
            ])
          ),
        }}
      />
      <AboutHero />
      <BioSection />
      <JourneyTimeline />
      <ClinicInfo />
      <AboutCta />
    </>
  );
}
