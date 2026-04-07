import type { Metadata } from "next";

import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Corporate Yoga | Sattva Yoga Classes",
  description:
    "Corporate yoga and wellness sessions designed to reduce stress, improve focus, and build healthier teams.",
};

const companyBenefits = [
  "Reduced stress and improved emotional resilience",
  "Better focus and productivity throughout work hours",
  "Fewer posture-related discomfort issues",
  "Stronger team engagement and morale",
];

export default function CorporatePage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <SectionTitle
          eyebrow="Corporate Wellness"
          title="Corporate yoga programs that support high-performing teams"
          description="Custom sessions for organizations that want healthier employees, stronger focus, and sustainable well-being."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-5">
          <article className="rounded-2xl border border-brand-cream-200 bg-white p-6 shadow-sm md:col-span-3 transition-all duration-300 hover:shadow-md">
            <h2 className="text-xl font-bold text-brand-brown-400">
              Program Overview
            </h2>
            <p className="mt-3 leading-7 text-brand-brown-200">
              Sessions are designed for office realities: long desk hours,
              digital fatigue, and high cognitive load. Programs combine guided
              movement, breathwork, and mindfulness practices adapted to your
              team&apos;s schedule.
            </p>
            <p className="mt-3 leading-7 text-brand-brown-200">
              Available in on-site, hybrid, and fully remote formats with
              options for weekly, bi-weekly, or monthly engagements.
            </p>
          </article>

          <aside className="rounded-2xl border border-brand-gold-200 bg-brand-gold-50 p-6 shadow-sm md:col-span-2 transition-all duration-300 hover:shadow-md">
            <h2 className="text-xl font-bold text-brand-brown-400">
              Benefits for Companies
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-brand-brown-300">
              {companyBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-brand-gold-300 shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="mt-12 rounded-2xl bg-gradient-to-br from-brand-brown-400 to-brand-brown-600 p-8 text-white relative overflow-hidden">
          {/* Decorative */}
          <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-brand-gold-300/10 blur-2xl" />

          <div className="relative">
            <h2 className="text-2xl font-bold">Bring yoga to your workplace</h2>
            <p className="mt-3 max-w-2xl text-brand-cream-300">
              Get a tailored proposal for your team size, goals, and preferred
              delivery mode.
            </p>
            <div className="mt-6">
              <Button
                href="/contact"
                variant="secondary"
                className="bg-white text-brand-brown-400 ring-0 hover:bg-brand-cream-100"
              >
                Request a Corporate Proposal
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
