import { Hero } from "@/components/hero/hero";
import { StatsSection } from "@/components/stats/stats-section";
import { ServicesSection } from "@/components/services/services-section";
import { AboutSection } from "@/components/about/about-section";
import { WhyChooseUs } from "@/components/why-choose-us/why-choose-us";
import { TestimonialsSection } from "@/components/testimonials/testimonials-section";
import { FamilyCardSection } from "@/components/family-card/family-card-section";
import { AppointmentCta } from "@/components/appointment/appointment-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ServicesSection />
      <AboutSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <FamilyCardSection />
      <AppointmentCta />
    </>
  );
}
