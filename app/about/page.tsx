import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Jeyanthi V — certified yoga therapist and instructor at Sattva Yoga Classes, Tambaram, Chennai. Specializing in hatha yoga, prenatal yoga, and therapeutic yoga for all levels.",
  alternates: {
    canonical: "https://www.sattvayogaclasses.in/about",
  },
};

const aboutSeoSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jeyanthi V",
  jobTitle: "Certified Yoga Therapist & Instructor",
  description:
    "Founder of Sattva Yoga Classes in Tambaram, Chennai. Certified Yoga Therapist specializing in hatha yoga, prenatal yoga, and therapeutic yoga for all levels.",
  worksFor: {
    "@type": "HealthAndBeautyBusiness",
    name: "Sattva Yoga Classes",
    url: "https://www.sattvayogaclasses.in",
  },
  knowsAbout: [
    "Hatha Yoga",
    "Yoga Therapy",
    "Prenatal Yoga",
    "Postnatal Yoga",
    "Corporate Wellness",
    "Mindfulness & Meditation",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tambaram, Chennai",
    addressCountry: "IN",
  },
};

const milestones = [
  {
    year: "The Beginning",
    text: "After years as a homemaker exploring different paths, a health challenge led Jeyanthi to discover yoga — not as a career, but as a way to heal. What started as necessity became her deepest calling.",
  },
  {
    year: "2022 – 2023",
    text: "Enrolled in a full year of intensive training at Yoga Vidya Niketan, earning a Diploma in Yogic Education and building a rigorous foundation in asanas and teaching methodology.",
  },
  {
    year: "August 2023",
    text: "Started with just one student. No big setup, no perfect conditions. She simply began — and kept going.",
  },
  {
    year: "December 2023",
    text: "Earned her Certified Yoga Therapist credential from The Yoga Institute, expanding her practice into lifestyle guidance, dietary changes, and holistic healing.",
  },
  {
    year: "December 2024",
    text: "Completed specialized training in Prenatal & Postnatal Yoga from Shivam Yoga Studio, enabling her to support mothers through safe pregnancies.",
  },
  {
    year: "Today",
    text: "What began as a single-student class has grown into a thriving practice — individuals, corporates, gyms, institutions, and children across all age groups.",
  },
];

const certifications = [
  {
    title: "Diploma in Yogic Education",
    subtitle: "Yoga Teachers' Training Course",
    institute: "Yoga Vidya Niketan",
    period: "July 2022 – July 2023",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: "Certified Yoga Therapist",
    subtitle: "Therapeutic & Lifestyle Guidance",
    institute: "The Yoga Institute",
    period: "December 2023",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Certified Pregnancy Yoga Teacher",
    subtitle: "Prenatal & Postnatal Specialist",
    institute: "Shivam Yoga Studio",
    period: "December 2024",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
  },
];

const expertiseAreas = [
  { label: "Health & Wellness Coaching", icon: "💪" },
  { label: "Mindfulness & Meditation", icon: "🧘" },
  { label: "Chronic Condition Management", icon: "🩺" },
  { label: "Corporate Wellness Programs", icon: "🏢" },
  { label: "Prenatal & Postnatal Yoga", icon: "🤰" },
  { label: "Children & Group Sessions", icon: "👶" },
];

export default function AboutPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSeoSchema) }}
      />
      {/* ── Hero Banner ──────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-cream-200 via-brand-cream-100 to-brand-cream-50">
        <div className="absolute top-10 right-10 h-64 w-64 rounded-full bg-brand-gold-100/40 blur-3xl" />
        <div className="absolute bottom-10 left-10 h-48 w-48 rounded-full bg-brand-green-50/50 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28 lg:px-8 text-center flex flex-col items-center">
          <FadeIn direction="up">
            <div className="mb-8 relative mx-auto flex items-center justify-center">
              {/* Decorative Background Aura / Overlay */}
              <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-brand-green-200 via-brand-gold-200 to-brand-cream-200 opacity-70 blur-xl animate-pulse-glow" />
              
              <div className="relative h-44 w-44 overflow-hidden rounded-full ring-8 ring-white shadow-2xl z-10">
                <Image 
                  src="/images/jeyanthi_portrait.jpg" 
                  alt="Jeyanthi V Portrait" 
                  fill
                  className="object-cover object-[center_15%]"
                  sizes="176px"
                />
                {/* Subtle Brand Tint Over Image */}
                <div className="absolute inset-0 bg-brand-gold-400/10 mix-blend-color" />
              </div>
            </div>
            <p className="pt-4 text-xs font-bold uppercase tracking-[0.25em] text-brand-green-400">
              Meet Your Instructor
            </p>
          </FadeIn>
          
          <FadeIn delay={150} direction="up">
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-brand-brown-400 sm:text-5xl lg:text-6xl">
              Jeyanthi V
            </h1>
          </FadeIn>

          <FadeIn delay={300} direction="up">
            <div className="gold-divider-centered mt-4" />
            <p className="mt-6 mx-auto max-w-2xl text-lg leading-8 text-brand-brown-300">
              From personal healing to transforming lives — the story behind one of the most trusted yoga teachers in Tambaram, Chennai, and a mission to make genuine wellness accessible to everyone.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── The Journey (Vertical Timeline) ──────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <FadeIn direction="up">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-green-400">
              The Journey
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand-brown-400 sm:text-4xl">
              Built on real transformation
            </h2>
            <div className="gold-divider" />
            <p className="mt-4 text-base leading-7 text-brand-brown-200">
              Every milestone in this journey was earned through personal experience — not textbooks.
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 relative">
          <FadeIn delay={100} direction="none" className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-brand-green-200 via-brand-gold-200 to-brand-cream-200" />

          <div className="space-y-10">
            {milestones.map((milestone, index) => (
              <FadeIn
                key={milestone.year}
                delay={index * 100}
                direction="up"
                className="relative pl-14 md:pl-16"
              >
                <span className="absolute left-[0.6rem] md:left-[1.1rem] top-1.5 h-3.5 w-3.5 rounded-full bg-brand-gold-300 ring-4 ring-brand-cream-100 shadow-sm" />

                <div className="rounded-2xl border border-brand-cream-200 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-brand-green-100">
                  <p className="inline-block rounded-full bg-brand-green-50 px-3 py-1 text-xs font-bold text-brand-green-500 tracking-wide">
                    {milestone.year}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-brand-brown-300">
                    {milestone.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications ───────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-green-400">
                Credentials
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand-brown-400 sm:text-4xl">
                Professional Certifications
              </h2>
              <div className="gold-divider-centered" />
              <p className="mt-4 text-base leading-7 text-brand-brown-200">
                A focused training path supporting beginner guidance, therapeutic yoga, and pregnancy-safe practice.
              </p>
            </div>
          </FadeIn>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {certifications.map((cert, index) => (
              <FadeIn key={cert.title} delay={index * 150} direction="up">
                <article
                  className="group relative h-full rounded-2xl border border-brand-cream-200 bg-brand-cream-50 p-6 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:border-brand-green-100 hover:-translate-y-1"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green-50 text-brand-green-400 transition-all duration-300 group-hover:bg-brand-gold-50 group-hover:text-brand-gold-400">
                    {cert.icon}
                  </div>
                  <h3 className="mt-4 text-base font-bold text-brand-brown-400 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-sm text-brand-brown-200">
                    {cert.subtitle}
                  </p>
                  <div className="mt-4 flex flex-col gap-1.5">
                    <span className="inline-block rounded-full bg-brand-green-50 px-3 py-1 text-xs font-semibold text-brand-green-500 mx-auto">
                      {cert.institute}
                    </span>
                    <span className="text-xs text-brand-brown-200">{cert.period}</span>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Areas of Expertise ───────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <FadeIn direction="left">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-green-400">
                Experience
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand-brown-400 sm:text-4xl">
                Teaching that adapts to you
              </h2>
              <div className="gold-divider" />
              <p className="mt-4 leading-7 text-brand-brown-200">
                Over the years, Jeyanthi has worked with individuals, corporates, gyms, institutions, and young children. Her teaching adapts to each person, whether it is a working professional managing stress, a beginner building confidence, or a mother preparing for childbirth.
              </p>
              <p className="mt-4 leading-7 text-brand-brown-200">
                As a Certified Yoga Therapist, she integrates mindfulness, meditation, and lifestyle guidance into every session offering far more than just physical postures.
              </p>
              <div className="mt-6">
                <Button href="/contact" variant="secondary">
                  Start Your Journey
                </Button>
              </div>
            </FadeIn>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {expertiseAreas.map((area, index) => (
              <FadeIn key={area.label} delay={index * 100} direction="right">
                <div
                  className="flex items-center gap-3 rounded-2xl border border-brand-cream-200 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:border-brand-green-100 hover:-translate-y-0.5"
                >
                  <span className="text-2xl shrink-0">{area.icon}</span>
                  <p className="text-sm font-semibold text-brand-brown-400 leading-snug">
                    {area.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Philosophy (Full-width quote) ─────────────────── */}
      <section className="relative overflow-hidden bg-brand-green-600 py-20">

        <div className="relative mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <FadeIn direction="up">
            <svg className="mx-auto h-10 w-10 text-brand-gold-300/50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
            </svg>
            <blockquote className="mt-6 text-2xl leading-10 font-bold text-white sm:text-3xl font-[var(--font-playfair)]">
              True wellness is not a luxury — it is something everyone deserves access to.
            </blockquote>
          </FadeIn>

          <FadeIn delay={200} direction="up">
            <figcaption className="mt-6">
              <p className="text-sm font-semibold text-brand-gold-300">Jeyanthi V</p>
              <p className="mt-1 text-sm text-brand-cream-200">Founder, Sattva Yoga Classes</p>
            </figcaption>
            <p className="mt-8 mx-auto max-w-xl text-sm leading-7 text-brand-cream-200/80">
              Yoga should be accessible, sustainable, and deeply personal. Every class is designed to honour individual pace while creating steady progress in strength, flexibility, and mental clarity. The focus is always on real impact — helping people feel better, move better, and live with more balance.
            </p>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
