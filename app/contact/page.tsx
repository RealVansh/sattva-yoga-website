import type { Metadata } from "next";

import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sattva Yoga Classes in Tambaram, Chennai for private yoga sessions, group class inquiries, prenatal yoga, or corporate wellness programs.",
  alternates: {
    canonical: "https://www.sattvayogaclasses.in/contact",
  },
};

const contactSeoSchema = {
  "@context": "https://schema.org",
  "@type": ["HealthAndBeautyBusiness", "LocalBusiness"],
  name: "Sattva Yoga Classes",
  description:
    "Contact Sattva Yoga Classes for personal, prenatal, group, and corporate yoga sessions in Tambaram, Chennai.",
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

export default function ContactPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSeoSchema) }}
      />
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <SectionTitle
          eyebrow="Contact"
          title="Let&apos;s start your wellness journey"
          description="Share your goals, and we&apos;ll recommend the best class or program for you. Looking for yoga classes in Tambaram, Chennai? You&apos;re in the right place."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <ContactForm />

          <div className="space-y-6">
            {/* WhatsApp Card */}
            <article className="group rounded-2xl border border-brand-cream-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#25D366]/10 text-[#25D366] transition-all duration-300 group-hover:scale-110">
                  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-brown-400">
                    Prefer WhatsApp?
                  </h3>
                  <p className="text-sm text-brand-brown-200">
                    Get an instant reply — we&apos;re most active here.
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <Button href="https://wa.me/919941764814" className="w-full justify-center">
                  Chat on WhatsApp
                </Button>
              </div>
            </article>

            {/* Map Card */}
            <article className="rounded-2xl border border-brand-cream-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gold-50 text-brand-gold-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <h2 className="text-lg font-bold text-brand-brown-400">
                  Our Location
                </h2>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6733215851844!2d80.1282402!3d12.920822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f003fe9bc07%3A0xbdd0cd6f1037170d!2sSattva%20Yoga%20Classes!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="280"
                style={{ border: 0, borderRadius: "0.75rem" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
