import { Hero } from "@/components/hero/hero";
import { StatsSection } from "@/components/stats/stats-section";
import { ServicesSection } from "@/components/services/services-section";
import { AboutSection } from "@/components/about/about-section";
import { WhyChooseUs } from "@/components/why-choose-us/why-choose-us";
import { TestimonialsSection } from "@/components/testimonials/testimonials-section";
import { FamilyCardSection } from "@/components/family-card/family-card-section";
import { AppointmentCta } from "@/components/appointment/appointment-cta";
import { getFaqSchema } from "@/lib/seo";

const homeFaqs = [
  {
    question: "Who is the best dentist in Nandyal?",
    answer:
      "Dr. K. Mallikarjuna Reddy (BDS, MDS, FICOI) at K.M. Reddy Dental Care is one of the most experienced dentists in Nandyal with over 11 years of experience, 5000+ happy patients, and internationally recognized credentials including FICOI from the USA.",
  },
  {
    question: "What dental services are available at K.M. Reddy Dental Care?",
    answer:
      "K.M. Reddy Dental Care offers 13+ dental services including dental implants, cosmetic dentistry, orthodontics (braces), root canal treatment, teeth whitening, crowns & bridges, dentures, pediatric dentistry, gum treatment, oral surgery, preventive dentistry, dental jewelry, and TMJ treatment.",
  },
  {
    question: "Where is K.M. Reddy Dental Care located?",
    answer:
      "K.M. Reddy Dental Care is located at D.No. 25-395-4-E2, Saleem Nagar, Near Municipal Office, Nandyal, Andhra Pradesh 518501. You can reach us at +91 995 915 3005.",
  },
  {
    question: "What are the working hours of K.M. Reddy Dental Care?",
    answer:
      "K.M. Reddy Dental Care is open Monday to Saturday from 9:30 AM to 8:30 PM, and on Sundays from 10:00 AM to 2:00 PM.",
  },
  {
    question: "How can I book an appointment at K.M. Reddy Dental Care?",
    answer:
      "You can book an appointment by calling +91 995 915 3005, messaging us on WhatsApp, or using the online booking form on our website. Walk-ins are also welcome.",
  },
  {
    question: "Does K.M. Reddy Dental Care offer dental implants?",
    answer:
      "Yes, dental implants are our specialty. Dr. K.M. Reddy has placed over 1000 dental implants with a 98% success rate. We offer single tooth implants, all-on-4, all-on-6, and full mouth rehabilitation.",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFaqSchema(homeFaqs)),
        }}
      />
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
