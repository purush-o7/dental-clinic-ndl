import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactInfoCards } from "@/components/contact/contact-info-cards";
import { ContactSocial } from "@/components/contact/contact-social";
import { ContactFormMap } from "@/components/contact/contact-form-map";
import { ContactCta } from "@/components/contact/contact-cta";
import { getBreadcrumbSchema, getFaqSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Us — Book Appointment, Location & Hours",
  description:
    "Contact K.M. Reddy Dental Care in Nandyal. Book appointments via WhatsApp or call +91 995 915 3005. Located at Saleem Nagar, Near Municipal Office, Nandyal. Open Mon-Sat 9:30 AM–8:30 PM, Sun 10 AM–2 PM.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact K.M. Reddy Dental Care, Nandyal",
    description:
      "Book your dental appointment today. Call +91 995 915 3005 or visit us at Saleem Nagar, Nandyal.",
    url: "/contact",
  },
};

const contactFaqs = [
  {
    question: "How do I book an appointment at K.M. Reddy Dental Care?",
    answer:
      "You can book an appointment by calling +91 995 915 3005, messaging on WhatsApp at the same number, or filling out the appointment form on our website. We also accept walk-in patients.",
  },
  {
    question: "What is the address of K.M. Reddy Dental Care in Nandyal?",
    answer:
      "We are located at D.No. 25-395-4-E2, Saleem Nagar, Near Municipal Office, Nandyal, Andhra Pradesh 518501.",
  },
  {
    question: "Is K.M. Reddy Dental Care open on Sundays?",
    answer:
      "Yes, we are open on Sundays from 10:00 AM to 2:00 PM. Our weekday hours are 9:30 AM to 8:30 PM (Monday to Saturday).",
  },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "Contact", href: "/contact" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqSchema(contactFaqs)) }}
      />
      <ContactHero />
      <ContactInfoCards />
      <ContactSocial />
      <ContactFormMap />
      <ContactCta />
    </>
  );
}
