import type { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { BioSection } from "@/components/about/bio-section";
import { JourneyTimeline } from "@/components/about/journey-timeline";
import { ClinicInfo } from "@/components/about/clinic-info";
import { AboutCta } from "@/components/about/about-cta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Dr. K.M. Reddy and K.M. Reddy Dental Care. Over 11 years of experience in advanced dentistry in Nandyal.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <BioSection />
      <JourneyTimeline />
      <ClinicInfo />
      <AboutCta />
    </>
  );
}
