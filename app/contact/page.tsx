import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactInfoCards } from "@/components/contact/contact-info-cards";
import { ContactSocial } from "@/components/contact/contact-social";
import { ContactFormMap } from "@/components/contact/contact-form-map";
import { ContactCta } from "@/components/contact/contact-cta";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book an appointment or contact K.M. Reddy Dental Care. Visit us at Saleem Nagar, Nandyal.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfoCards />
      <ContactSocial />
      <ContactFormMap />
      <ContactCta />
    </>
  );
}
