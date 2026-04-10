import type { Metadata } from "next";

import ClassCard from "@/components/ClassCard";
import SectionTitle from "@/components/SectionTitle";
import { classes } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Classes",
  description:
    "Explore yoga classes at Sattva Yoga Classes in Tambaram, Chennai — beginner hatha yoga, group batches, prenatal yoga, weekend sessions & corporate wellness. Find the right class for your goals.",
  alternates: {
    canonical: "https://sattvayogaclasses.in/classes",
  },
};

const classesSeoSchema = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "Sattva Yoga Classes",
  url: "https://sattvayogaclasses.in/classes",
  description:
    "Yoga classes in Tambaram, Chennai — personal foundations, daily group batches, weekend sessions, and prenatal yoga.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "9/25, Duraisamy Nagar, East Tambaram",
    addressLocality: "Chennai",
    postalCode: "600059",
    addressCountry: "IN",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Yoga Classes",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Personal Foundations",
          description:
            "One-on-one beginner yoga sessions with personalized guidance in Tambaram, Chennai.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Daily Group Yoga Classes",
          description:
            "Weekday group hatha yoga batches — morning, ladies-only, and evening sessions.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Weekend Yoga Batch",
          description:
            "Saturday and Sunday morning yoga classes for busy professionals and students.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Prenatal & Postnatal Yoga",
          description:
            "Specialized pregnancy yoga with certified instruction in Chennai.",
        },
      },
    ],
  },
};

export default function ClassesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(classesSeoSchema) }}
      />
      {/* Hero-style header for classes page */}
      <div className="bg-brand-cream-100 py-16 border-b border-brand-cream-200">
         <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <SectionTitle
              eyebrow="Classes"
              title="Yoga classes in Chennai for every goal"
              description="Choose from guided programs that match your pace, schedule, and wellness priorities. All classes feature personal attention and holistic hatha yoga practices."
              centered
            />
            <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-6 text-brand-brown-200">
              Whether you are looking for yoga for beginners, prenatal yoga during pregnancy, yoga for weight loss, or therapeutic yoga for back pain in Chennai — our Tambaram studio has a class designed just for you.
            </p>
            <p className="mx-auto mt-6 max-w-3xl rounded-2xl border border-brand-green-100 bg-brand-green-50 px-5 py-3 text-center text-sm font-semibold text-brand-green-500">
              New to yoga? Start with Personal Foundations, then move to group batches.
            </p>
         </div>
      </div>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 items-start">
          {classes.map((item, index) => (
            <div key={item.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
              <ClassCard yogaClass={item} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
