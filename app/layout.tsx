import type { Metadata } from "next";
import { Nunito, Playfair_Display } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sattvayogaclasses.in"),
  title: {
    default: "Sattva Yoga Classes | Best Yoga Classes in Tambaram, Chennai",
    template: "%s | Sattva Yoga Classes",
  },
  description:
    "Sattva Yoga Classes — one of the best yoga classes in Tambaram, Chennai. Personal, group, prenatal & corporate hatha yoga for beginners to advanced.",
  keywords: [
    "yoga classes in Chennai",
    "yoga classes in Tambaram",
    "best yoga classes in Chennai",
    "hatha yoga classes Chennai",
    "yoga for beginners Chennai",
    "prenatal yoga Chennai",
    "corporate yoga Chennai",
    "yoga classes near me",
    "yoga for back pain Chennai",
    "yoga teacher in Tambaram",
  ],
  verification: {
    google: "934OE6vbSrcHVP79YZ2pJy5YtgqPcudSgHEoWBAglPk",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sattvayogaclasses.in",
    siteName: "Sattva Yoga Classes",
    title: "Sattva Yoga Classes | Best Yoga Classes in Tambaram, Chennai",
    description:
      "Personal, group, prenatal & corporate hatha yoga sessions in Tambaram, Chennai. Certified instruction for all levels.",
    images: [
      {
        url: "/logo.png",
        width: 500,
        height: 500,
        alt: "Sattva Yoga Classes Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Sattva Yoga Classes | Best Yoga in Tambaram, Chennai",
    description:
      "Personal, group, prenatal & corporate hatha yoga sessions in Tambaram, Chennai.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://sattvayogaclasses.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-cream-100 text-brand-brown-400">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
