import { trustStats } from "@/data/siteData";
import FadeIn from "@/components/FadeIn";

export default function TrustStrip() {
  return (
    <section id="trust" className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {trustStats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center justify-center px-6 py-6 md:py-0 text-center ${
                  index !== trustStats.length - 1
                    ? "border-b border-brand-cream-200 md:border-b-0 md:border-r"
                    : ""
                }`}
              >
                <span className="font-heading text-2xl font-bold text-brand-brown-400 md:text-3xl">
                  {stat.value}
                </span>
                <span className="mt-1 text-sm uppercase tracking-wider text-brand-brown-200">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-brand-brown-100">
            Reviews sourced from{" "}
            <span className="inline-flex items-baseline gap-px font-semibold">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </span>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
