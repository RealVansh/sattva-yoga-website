import type { Metadata } from "next";

import Button from "@/components/Button";
import ClassCard from "@/components/ClassCard";
import HeroSection from "@/components/HeroSection";
import ScrollSpyNav from "@/components/ScrollSpyNav";
import SectionTitle from "@/components/SectionTitle";
import TestimonialCarousel from "@/components/TestimonialCarousel";
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

const benefits = [
  {
    title: "Targeted Healing",
    description:
      "Relief from chronic issues like neck, back, and shoulder pain, with specialized support for conditions like cervical and thyroid imbalances.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Personalized Attention",
    description:
      "Customized routines tailored to your individual needs, flexibility, and pace, ensuring you progress safely and comfortably.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: "Engaging Variety",
    description:
      "No repetitive cycles. Enjoy a completely different flow of stretches and asanas every day to continuously challenge and strengthen your body.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
  },
  {
    title: "Flexible & Calming",
    description:
      "Convenient session timings designed for busy routines, cultivating deep patience, calmness, and a refreshed mind every single day.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSeoSchema) }}
      />
      <ScrollSpyNav />
      <HeroSection />

      {/* ── About Preview ─────────────────────────────── */}
      <div className="section-divider" />
      <section
        id="about"
        className="relative overflow-hidden py-24 md:py-32 scroll-mt-24 section-glow-warm grain-overlay"
      >
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="animate-fade-in">
            <SectionTitle
              eyebrow="About"
              title="Personalized yoga rooted in holistic wellness"
              description="Recognized as one of the best yoga classes in Chennai, Sattva Yoga Classes helps you build consistency through mindful movement, breathwork, and practical routines that fit your life."
            />
          </div>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-brand-brown-200 animate-fade-in delay-200">
            Whether you are starting from zero or returning to practice, each
            session is adapted to your body, goals, and energy levels. Our hatha
            yoga classes combine posture alignment, mobility, and calming
            techniques to support long-term physical and mental well-being.
            Searching for yoga classes in Tambaram, Chennai? Sattva Yoga Classes
            offers both personal and group formats with focused guidance — ideal
            for beginners, working professionals, and anyone looking for yoga
            for back pain, stress relief, or overall fitness in Chennai.
          </p>
          <div className="mt-8 animate-fade-in delay-300">
            <Button href="/about" variant="secondary">
              Learn More About the Instructor
            </Button>
          </div>
        </div>
      </section>

      {/* ── Benefits ──────────────────────────────────── */}
      <div className="section-divider" />
      <section
        id="benefits"
        className="relative overflow-hidden bg-white py-24 md:py-32 scroll-mt-24 section-glow-green"
      >
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle
            eyebrow="Benefits"
            title="Why students choose Sattva Yoga Classes"
            description="From yoga for beginners to advanced therapeutic sessions, here is what sets us apart."
            centered
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className="group rounded-2xl border border-brand-cream-200 bg-gradient-to-b from-brand-cream-50 to-white p-8 text-center shadow-sm card-glow hover:-translate-y-2 hover:border-brand-green-100 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-green-50 to-brand-green-100/50 text-brand-green-400 transition-all duration-300 group-hover:from-brand-gold-50 group-hover:to-brand-gold-100/50 group-hover:text-brand-gold-400 group-hover:scale-110">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-brand-brown-400">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-brand-brown-200">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Classes Preview ───────────────────────────── */}
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
        id="testimonials"
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

      {/* ── CTA ───────────────────────────────────────── */}
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
                WhatsApp Inquiry
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
