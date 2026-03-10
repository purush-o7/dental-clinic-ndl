import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/common/container";
import { SectionHeader } from "@/components/common/section-header";
import { HighlightStats } from "@/components/family-card/highlight-stats";
import { FamilyCardDetails } from "@/components/family-card/family-card-details";
import { SainikParivar } from "@/components/family-card/sainik-parivar";
import { FamilyCardCta } from "@/components/family-card/family-card-cta";
import { getBreadcrumbSchema, getFaqSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Family Card — Affordable Dental Membership for Families",
  description:
    "Save on dental care with the K.M. Reddy Family Card. 20% discount on treatments, free checkups, priority appointments, 24/7 emergency support, and special benefits for military families through Sainik Parivar. Join today!",
  alternates: { canonical: "/family-card" },
  openGraph: {
    title: "K.M. Reddy Family Card — Dental Membership Benefits",
    description:
      "Affordable dental membership for families in Nandyal. 20% discounts, free checkups, emergency coverage & more.",
    url: "/family-card",
  },
};

const familyCardFaqs = [
  {
    question: "What is the K.M. Reddy Family Card?",
    answer:
      "The K.M. Reddy Family Card is an exclusive dental membership program that provides discounted treatments (20% off), free dental checkups, priority appointment scheduling, 24/7 emergency dental support, and free dental hygiene kits for your entire family.",
  },
  {
    question: "What is the Sainik Parivar initiative?",
    answer:
      "Sainik Parivar is K.M. Reddy Dental Care's initiative to honor military families by providing special dental care benefits including complimentary dental checkups, additional discounts, and priority treatment for armed forces personnel and their families.",
  },
  {
    question: "How can I get a K.M. Reddy Family Card?",
    answer:
      "You can sign up for the Family Card by visiting our clinic at Saleem Nagar, Nandyal, calling +91 995 915 3005, or messaging us on WhatsApp. The card covers your entire household.",
  },
];

export default function FamilyCardPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "Family Card", href: "/family-card" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqSchema(familyCardFaqs)) }}
      />

      {/* Hero intro */}
      <Container className="py-20">
        <SectionHeader
          badge="Membership"
          title="K.M. Reddy Family Card"
          subtitle="Exclusive membership benefits for the whole family. Save on dental care all year round."
        />

        {/* Description + Illustration */}
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <p className="text-muted-foreground leading-relaxed">
              The K.M. Reddy Family Card is our exclusive membership program designed to make quality dental care affordable and accessible for your entire family. With a single card, every member of your household enjoys discounted treatments, free checkups, priority appointments, and emergency coverage throughout the year.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Whether it&apos;s routine cleaning for the kids, orthodontic treatment for teens, or implants for elders — our Family Card ensures everyone gets the best care at the best price. Join hundreds of families in Nandyal who trust K.M. Reddy Dental Care for their oral health needs.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/children-tooth.png"
              alt="Children hugging a happy tooth"
              width={800}
              height={724}
              className="w-64 sm:w-72 lg:w-80"
            />
          </div>
        </div>
      </Container>

      <HighlightStats />
      <FamilyCardDetails />
      <SainikParivar />
      <FamilyCardCta />
    </>
  );
}
