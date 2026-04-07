import type { Metadata } from "next";

import ClassCard from "@/components/ClassCard";
import SectionTitle from "@/components/SectionTitle";
import { classes } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Classes | Sattva Yoga Classes",
  description:
    "Explore beginner, weight loss, online, and corporate yoga offerings with durations and key benefits.",
};

export default function ClassesPage() {
  return (
    <main>
      {/* Hero-style header for classes page */}
      <div className="bg-brand-cream-100 py-16 border-b border-brand-cream-200">
         <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <SectionTitle
              eyebrow="Classes"
              title="Yoga offerings for every goal"
              description="Choose from guided programs that match your pace, schedule, and wellness priorities. All classes feature personal attention and holistic practices."
              centered
            />
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
