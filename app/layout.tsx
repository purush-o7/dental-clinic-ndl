import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { Toaster } from "@/components/ui/sonner";
import { WhatsappFab } from "@/components/common/whatsapp-fab";
import { SpecialOffersPopup } from "@/components/common/special-offers-popup";
import { BookNowFab } from "@/components/common/book-now-fab";
import { getLocalBusinessSchema, getWebsiteSchema, SITE_META } from "@/lib/seo";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_META.url),
  title: {
    default: "K.M. Reddy Dental Care | Best Dentist in Nandyal | Dental Implants & Cosmetic Dentistry",
    template: "%s | K.M. Reddy Dental Care, Nandyal",
  },
  description:
    "K.M. Reddy Dental Care is the leading dental clinic in Nandyal, Andhra Pradesh. Dr. Kummithi Malleswara Reddy (MDS Prosthodontics) offers dental implants, cosmetic dentistry, orthodontics, root canal treatment & 13+ services. 11+ years experience, 5000+ happy patients, 98% satisfaction rate. Book appointment now.",
  keywords: [
    "dentist in Nandyal",
    "best dentist Nandyal",
    "dental clinic Nandyal",
    "dental implants Nandyal",
    "cosmetic dentistry Nandyal",
    "orthodontics Nandyal",
    "root canal treatment Nandyal",
    "teeth whitening Nandyal",
    "K.M. Reddy Dental Care",
    "KM Reddy dental",
    "Dr Kummithi Malleswara Reddy",
    "dental hospital Nandyal",
    "dental implant center Nandyal",
    "best dental clinic Andhra Pradesh",
    "affordable dental care Nandyal",
    "pediatric dentist Nandyal",
    "dental crowns bridges Nandyal",
    "gum treatment Nandyal",
    "oral surgery Nandyal",
    "family dentist Nandyal",
  ],
  authors: [{ name: "Dr. Kummithi Malleswara Reddy" }],
  creator: "K.M. Reddy Dental Care",
  publisher: "K.M. Reddy Dental Care",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: SITE_META.locale,
    url: SITE_META.url,
    siteName: SITE_META.siteName,
    title: "K.M. Reddy Dental Care | Best Dentist in Nandyal",
    description:
      "Advanced dental clinic in Nandyal offering implants, cosmetic dentistry, orthodontics & more. 11+ years experience, 5000+ happy patients. Book your appointment today!",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "K.M. Reddy Dental Care - Best Dental Clinic in Nandyal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "K.M. Reddy Dental Care | Best Dentist in Nandyal",
    description:
      "Advanced dental clinic in Nandyal. Dental implants, cosmetic dentistry, orthodontics & 13+ services. Book appointment now!",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: SITE_META.url,
  },
  category: "Health",
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", figtree.variable)}>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getLocalBusinessSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWebsiteSchema()),
          }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsappFab />
        <BookNowFab />
        <SpecialOffersPopup />
        <Toaster />
      </body>
    </html>
  );
}
