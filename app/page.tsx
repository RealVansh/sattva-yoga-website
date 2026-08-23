import type { Metadata } from "next";

import Button from "@/components/Button";
import ClassCard from "@/components/ClassCard";
import HeroSection from "@/components/HeroSection";
import PowerOfYoga from "@/components/PowerOfYoga";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import ScrollStory from "@/components/ScrollStory";
import SectionTitle from "@/components/SectionTitle";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import TrustStrip from "@/components/TrustStrip";
import { classes, testimonials } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Sattva Yoga Classes — one of the best yoga classes in Tambaram, Chennai. Personalized hatha yoga for beginners, group batches, prenatal yoga & corporate wellness.",
  alternates: {
    canonical: "https://www.sattvayogaclasses.in",
  },
};

const homeSeoSchema = {
  "@context": "https://schema.org",
  "@type": ["HealthAndBeautyBusiness", "LocalBusiness"],
  name: "Sattva Yoga Classes",
  description:
    "Personal yoga, group sessions, prenatal guidance, and corporate wellness in Tambaram, Chennai.",
  telephone: "+91 9941764814",
  email: "vanshv0920@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "9/25, Duraisamy Nagar, East Tambaram",
    addressLocality: "Chennai",
    postalCode: "600059",
    addressCountry: "IN",
  },
  areaServed: ["Tambaram", "Chennai"],
  geo: {
    "@type": "GeoCoordinates",
    latitude: 12.920822,
    longitude: 80.1282402,
  },
  hasMap:
    "https://www.google.com/maps/place/Sattva+Yoga+Classes/data=!4m7!3m6!1s0x3a525f003fe9bc07:0xbdd0cd6f1037170d!8m2!3d12.920822!4d80.1282402!16s%2Fg%2F11x97jvtp3",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSeoSchema) }}
      />
      <ScrollSpyNav />
      <HeroSection />

      {/* ── Trust Strip ──────────────────────────────── */}
      <div className="section-divider" />
      <TrustStrip />

      {/* ── Transformation Scroll Story ──────────────── */}
      <div className="section-divider" />
      <ScrollStory />

      {/* ── Power of Yoga ────────────────────────────── */}
      <PowerOfYoga />

      {/* ── Classes Preview ──────────────────────────── */}
      <div className="section-divider" />
      <section
        id="classes"
        className="relative overflow-hidden bg-brand-cream-50 py-24 md:py-32 scroll-mt-24 section-glow-gold"
      >
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle
            eyebrow="Classes"
            title="Yoga classes for every goal"
            description="From beginner flows to corporate wellness sessions, programs are designed for real progress."
          />
          <p className="mt-4 text-sm font-semibold text-brand-brown-300">
            All batch sessions are <span className="bg-brand-gold-200/50 px-1 rounded">60 minutes</span>.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 items-start">
            {classes.map((item, index) => (
              <div key={item.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <ClassCard yogaClass={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────── */}
      <div className="section-divider" />
      <section
        id="reviews"
        className="relative overflow-hidden bg-white py-24 md:py-32 scroll-mt-24"
      >
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle
            eyebrow="Testimonials"
            title="What students are saying"
            description="Real feedback from students who transformed their wellness journey with Sattva Yoga Classes."
            centered
          />
        </div>
        <div className="mt-14 w-full">
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8 scroll-mt-24" id="contact">
        <div className="rounded-3xl bg-gradient-to-br from-brand-green-400 to-brand-green-600 px-8 py-14 text-white shadow-2xl sm:px-14 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 h-56 w-56 rounded-full bg-brand-gold-300/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute top-1/2 right-1/4 h-32 w-32 rounded-full bg-brand-green-300/10 blur-2xl" />

          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold-300/80">
              Ready to begin?
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Join a session today
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-brand-green-100/90">
              Reach out today and start your personalized yoga journey with
              calm, consistency, and confidence.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                href="/contact"
                variant="secondary"
                className="bg-white/15 text-white ring-white/30 hover:bg-white/25 hover:ring-white/50"
              >
                Contact Now
              </Button>
              <Button
                href="https://wa.me/919941764814"
                variant="secondary"
                className="bg-white/15 text-white ring-white/30 hover:bg-white/25 hover:ring-white/50"
              >
                WhatsApp Jeyanthi Ma&apos;am
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
