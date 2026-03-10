import { CLINIC, DOCTOR, SERVICES, TESTIMONIALS, STATS } from "./data";

const SITE_URL = "https://kmreddydentalcare.com";

// ─── Local Business + Dentist Schema ────────────────────────────────
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Dentist", "LocalBusiness", "MedicalBusiness"],
    "@id": `${SITE_URL}/#dentist`,
    name: CLINIC.name,
    alternateName: "KM Reddy Dental Care and Implant Center",
    description: `${CLINIC.name} is a leading dental clinic in Nandyal offering advanced dental implants, cosmetic dentistry, orthodontics, root canal treatment, and 13+ dental services. Founded by ${DOCTOR.name} with ${STATS[0].value}+ years of experience and ${STATS[1].value}+ happy patients.`,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/dr-km-reddy.webp`,
    telephone: CLINIC.phones[0],
    email: CLINIC.emails[0],
    address: {
      "@type": "PostalAddress",
      streetAddress: "D.No. 25-395-4-E2, Saleem Nagar, Near Municipal Office",
      addressLocality: "Nandyal",
      addressRegion: "Andhra Pradesh",
      postalCode: "518501",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 15.484578754822877,
      longitude: 78.47245437575239,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:30",
        closes: "20:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "14:00",
      },
    ],
    priceRange: "$$",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Credit Card, Debit Card",
    areaServed: [
      { "@type": "City", name: "Nandyal" },
      { "@type": "State", name: "Andhra Pradesh" },
    ],
    sameAs: [
      CLINIC.social.facebook,
      CLINIC.social.instagram,
      CLINIC.social.whatsapp,
    ],
    founder: {
      "@type": "Person",
      name: DOCTOR.name,
      jobTitle: DOCTOR.title,
      description: DOCTOR.bio,
      image: `${SITE_URL}/dr-km-reddy.webp`,
      alumniOf: DOCTOR.education.map((e) => ({
        "@type": "EducationalOrganization",
        name: e.institution,
      })),
      hasCredential: DOCTOR.qualifications.map((q) => ({
        "@type": "EducationalOccupationalCredential",
        credentialCategory: q,
      })),
      award: DOCTOR.awards.map((a) => a.title),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: (TESTIMONIALS.reduce((s, t) => s + t.rating, 0) / TESTIMONIALS.length).toFixed(1),
      reviewCount: TESTIMONIALS.length,
      bestRating: 5,
      worstRating: 1,
    },
    review: TESTIMONIALS.slice(0, 5).map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
        bestRating: 5,
      },
      reviewBody: t.quote,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dental Services",
      itemListElement: SERVICES.map((s, i) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalProcedure",
          name: s.title,
          description: s.shortDescription,
          url: `${SITE_URL}/services/${s.slug}`,
        },
        position: i + 1,
      })),
    },
    medicalSpecialty: [
      "Prosthodontics",
      "Oral Implantology",
      "Cosmetic Dentistry",
      "Orthodontics",
      "Pediatric Dentistry",
      "Periodontics",
      "Endodontics",
      "Oral Surgery",
    ],
  };
}

// ─── Breadcrumb Schema ──────────────────────────────────────────────
export function getBreadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}

// ─── Service Schema ─────────────────────────────────────────────────
export function getServiceSchema(service: (typeof SERVICES)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.title,
    description: service.description,
    url: `${SITE_URL}/services/${service.slug}`,
    procedureType: "http://schema.org/NoninvasiveProcedure",
    category: service.category,
    provider: {
      "@type": "Dentist",
      name: CLINIC.name,
      url: SITE_URL,
    },
    bodyLocation: "Mouth",
  };
}

// ─── FAQ Schema ─────────────────────────────────────────────────────
export function getFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// ─── Person (Doctor) Schema ─────────────────────────────────────────
export function getDoctorSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: DOCTOR.name,
    jobTitle: DOCTOR.title,
    description: DOCTOR.bio,
    image: `${SITE_URL}/dr-km-reddy.webp`,
    url: `${SITE_URL}/about`,
    worksFor: {
      "@type": "Dentist",
      name: CLINIC.name,
      url: SITE_URL,
    },
    alumniOf: DOCTOR.education.map((e) => ({
      "@type": "EducationalOrganization",
      name: e.institution,
    })),
    hasCredential: DOCTOR.qualifications.map((q) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: q,
    })),
    award: DOCTOR.awards.map((a) => `${a.title} — ${a.organization} (${a.year})`),
    knowsAbout: [
      "Dental Implants",
      "Prosthodontics",
      "Cosmetic Dentistry",
      "Full Mouth Rehabilitation",
      "CAD/CAM Dentistry",
    ],
    memberOf: {
      "@type": "Organization",
      name: "International Congress of Oral Implantologists",
    },
  };
}

// ─── Website Schema ─────────────────────────────────────────────────
export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: CLINIC.name,
    url: SITE_URL,
    description: `${CLINIC.name} — ${CLINIC.tagline}. Advanced dental clinic in Nandyal, Andhra Pradesh offering implants, cosmetic dentistry, orthodontics and more.`,
    publisher: {
      "@type": "Dentist",
      name: CLINIC.name,
      url: SITE_URL,
    },
  };
}

// ─── Metadata helpers ───────────────────────────────────────────────
export const SITE_META = {
  url: SITE_URL,
  siteName: CLINIC.name,
  locale: "en_IN",
  ogImage: `${SITE_URL}/og-image.png`,
};
