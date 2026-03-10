import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/services/service-detail";
import { SERVICES } from "@/lib/data";
import { getServiceSchema, getBreadcrumbSchema } from "@/lib/seo";

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} in Nandyal — K.M. Reddy Dental Care`,
    description: `${service.description} Book an appointment for ${service.title.toLowerCase()} at K.M. Reddy Dental Care, Nandyal. Call +91 995 915 3005.`,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} — K.M. Reddy Dental Care, Nandyal`,
      description: service.shortDescription,
      url: `/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getServiceSchema(service)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "Services", href: "/services" },
              { name: service.title, href: `/services/${service.slug}` },
            ])
          ),
        }}
      />
      <ServiceDetail service={service} />
    </>
  );
}
