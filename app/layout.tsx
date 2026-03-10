import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { Toaster } from "@/components/ui/sonner";
import { WhatsappFab } from "@/components/common/whatsapp-fab";
import { FamilyCardFab } from "@/components/common/family-card-fab";
import { BookNowFab } from "@/components/common/book-now-fab";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "K.M. Reddy Dental Care | Advanced Dental Clinic in Nandyal",
    template: "%s | K.M. Reddy Dental Care",
  },
  description:
    "K.M. Reddy Dental Care offers advanced dental treatments including implants, cosmetic dentistry, orthodontics, and more in Nandyal. 11+ years of experience, 5000+ happy patients.",
  keywords: [
    "dentist in Nandyal",
    "dental clinic Nandyal",
    "dental implants Nandyal",
    "cosmetic dentistry",
    "orthodontics",
    "K.M. Reddy Dental Care",
    "best dentist Nandyal",
    "teeth whitening",
    "root canal treatment",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", figtree.variable)}>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsappFab />
        <FamilyCardFab />
        <BookNowFab />
        <Toaster />
      </body>
    </html>
  );
}
