import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/common/container";
import { SectionHeader } from "@/components/common/section-header";
import { HighlightStats } from "@/components/family-card/highlight-stats";
import { FamilyCardDetails } from "@/components/family-card/family-card-details";
import { SainikParivar } from "@/components/family-card/sainik-parivar";
import { FamilyCardCta } from "@/components/family-card/family-card-cta";

export const metadata: Metadata = {
  title: "Family Card",
  description:
    "Learn about K.M. Reddy Family Card membership benefits and our Sainik Parivar initiative.",
};

export default function FamilyCardPage() {
  return (
    <>
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

      {/* Stats strip */}
      <HighlightStats />

      {/* Benefits grid */}
      <FamilyCardDetails />

      {/* Sainik Parivar */}
      <SainikParivar />

      {/* CTA */}
      <FamilyCardCta />
    </>
  );
}
