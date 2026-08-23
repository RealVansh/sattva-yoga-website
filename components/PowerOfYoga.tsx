"use client";

import { useEffect, useRef, useState } from "react";

/**
 * PowerOfYoga — v3: encouraging, not preachy.
 *
 * Rewritten copy removes "lifelong investment" and "most consistent" —
 * those felt like lectures. New messaging frames yoga as something
 * supportive and welcoming, not demanding.
 *
 * UI: a clean centered layout with 3 "pillar" cards that ground the
 * philosophy in concrete promises. No more floating editorial text.
 */

function useReveal(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useReveal(0.15);
  return (
    <div
      ref={ref}
      className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const pillars = [
  {
    number: "01",
    title: "It starts with one class",
    description:
      "You don't need experience. You don't need flexibility. You just need to begin.",
  },
  {
    number: "02",
    title: "Your pace, your journey",
    description:
      "Every body is different. We meet you exactly where you are — no pressure, no judgement.",
  },
  {
    number: "03",
    title: "Small steps, real change",
    description:
      "The students who transform aren't rushing. They're simply showing up, one class at a time.",
  },
];

export default function PowerOfYoga() {
  return (
    <section
      id="philosophy"
      className="grain-overlay relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #2E1A0D 0%, #1a1a0e 40%, #1E2A0F 100%)",
      }}
    >
      <div className="relative mx-auto max-w-5xl px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        {/* ── Centered headline ── */}
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-gold-300/40 mb-8">
              Our Approach
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-bold text-white/90 leading-[1.15] tracking-tight"
              style={{ fontFeatureSettings: '"liga" 0, "clig" 0' }}
            >
              Yoga is not a quick fix.
            </h2>
          </Reveal>

          <Reveal delay={250}>
            <p className="mt-5 md:mt-6 text-xl md:text-2xl font-heading text-brand-gold-300/70 leading-snug">
              It&rsquo;s a practice that grows with you.
            </p>
          </Reveal>
        </div>

        {/* ── Gold divider ── */}
        <Reveal delay={350}>
          <div className="flex justify-center my-14 md:my-16">
            <div
              className="w-16 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, var(--gold-300), transparent)",
                opacity: 0.3,
              }}
            />
          </div>
        </Reveal>

        {/* ── Three pillars ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.number} delay={400 + i * 150}>
              <div className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.03] p-7 md:p-8 transition-all duration-500 hover:border-brand-gold-300/15 hover:bg-white/[0.05]">
                {/* Number accent */}
                <span className="text-[11px] font-bold tracking-[0.2em] text-brand-gold-300/30 uppercase">
                  {pillar.number}
                </span>

                {/* Title */}
                <h3 className="mt-4 text-xl md:text-[1.35rem] font-heading font-bold text-white/85 leading-snug">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm md:text-[0.95rem] leading-relaxed text-white/45">
                  {pillar.description}
                </p>

                {/* Subtle corner glow on hover */}
                <div className="absolute -bottom-px -right-px w-24 h-24 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 100% 100%, rgba(127,147,38,0.08) 0%, transparent 70%)",
                  }}
                />
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── Closing line ── */}
        <Reveal delay={850}>
          <div className="mt-14 md:mt-16 text-center">
            <p className="text-sm md:text-base text-brand-gold-300/45 uppercase tracking-[0.25em] font-semibold">
              Show up &middot; Stay patient &middot; Trust the process
            </p>
          </div>
        </Reveal>
      </div>

      {/* Subtle decorative glow */}
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 80% 80%, rgba(127,147,38,0.06) 0%, transparent 60%)",
        }}
      />
    </section>
  );
}
