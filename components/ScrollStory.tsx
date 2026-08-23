"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import { transformationStories } from "@/data/siteData";

/**
 * Horizontal-slide scroll storytelling — v5 (peek & glide).
 *
 * Key idea: the NEXT card is always partially visible on the right side,
 * so the user knows more content is coming. On scroll, the current card
 * glides left while the peeking card smoothly takes center stage.
 *
 * Timeline per card (based on `diff = storyProgress - i`):
 *   diff < -0.5      → invisible
 *   diff -0.5 → -0.3 → peek: fades in at x=55%, small & translucent
 *   diff -0.3 → 0.0  → slide-in: glides from x=55% to x=0%, full opacity
 *   diff  0.0 → 0.6  → hold center: reading zone
 *   diff  0.6 → 1.0  → slide-out: glides left to x=-55%, fades out
 *   diff > 1.0        → invisible
 *
 * This means at storyProgress=0, card 0 is already centered (diff=0).
 * Card 1 starts peeking when storyProgress=0.5 (diff for card 1 = -0.5).
 */

const STORY_COUNT = transformationStories.length;

/* ── Easing ── */
function easeOutQuint(t: number): number {
  return 1 - Math.pow(1 - t, 5);
}

function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}

/* ── Lerp utility ── */
function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

export default function ScrollStory() {
  const [vhPerStory, setVhPerStory] = useState(120);

  /* ── Refs ── */
  const runwayRef = useRef<HTMLDivElement>(null);
  const titleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardInnerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const hintRef = useRef<HTMLDivElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);
  const stepCounterRef = useRef<HTMLSpanElement>(null);
  const lastActiveRef = useRef(-1);

  /* ── Responsive runway ── */
  useEffect(() => {
    const update = () =>
      setVhPerStory(window.innerWidth < 768 ? 90 : 120);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  /* ── Core animation ── */
  const animate = useCallback(() => {
    const runway = runwayRef.current;
    if (!runway) return;

    const rect = runway.getBoundingClientRect();
    const viewportH = window.innerHeight;
    const scrollable = rect.height - viewportH;
    if (scrollable <= 0) return;

    const progress = clamp(-rect.top / scrollable, 0, 1);
    const storyProgress = progress * STORY_COUNT;
    const activeIndex = clamp(Math.floor(storyProgress), 0, STORY_COUNT - 1);

    /* ── Progress bar ── */
    if (progressFillRef.current) {
      progressFillRef.current.style.width = `${progress * 100}%`;
    }

    /* ── Step counter ── */
    if (activeIndex !== lastActiveRef.current) {
      lastActiveRef.current = activeIndex;
      if (stepCounterRef.current) {
        stepCounterRef.current.textContent = `${activeIndex + 1} / ${STORY_COUNT}`;
      }
    }

    /* ── Titles ── */
    for (let i = 0; i < STORY_COUNT; i++) {
      const el = titleRefs.current[i];
      if (!el) continue;

      const diff = storyProgress - i;
      let opacity = 0;
      let y = 20;

      if (diff >= -0.3 && diff < 0.0) {
        // Fade in (before card's main cycle starts)
        const t = easeOutQuint((diff + 0.3) / 0.3);
        opacity = t;
        y = 20 * (1 - t);
      } else if (diff >= 0.0 && diff < 0.6) {
        // Visible — subtle parallax drift upward
        opacity = 1;
        y = lerp(0, -5, diff / 0.6);
      } else if (diff >= 0.6 && diff < 1.0) {
        // Fade out
        const t = easeOutQuint((diff - 0.6) / 0.4);
        opacity = 1 - t;
        y = lerp(-5, -18, t);
      }

      el.style.opacity = String(clamp(opacity, 0, 1));
      el.style.transform = `translateY(${y}px)`;
      el.style.pointerEvents = opacity > 0.5 ? "auto" : "none";
    }

    /* ── Cards ── */
    for (let i = 0; i < STORY_COUNT; i++) {
      const wrapper = cardRefs.current[i];
      const inner = cardInnerRefs.current[i];
      if (!wrapper) continue;

      const diff = storyProgress - i;

      // Defaults: invisible off-screen right
      let x = 70;
      let opacity = 0;
      let scale = 0.9;
      let rotate = 0;
      let shadowY = 4;
      let shadowBlur = 12;
      let shadowAlpha = 0.05;

      if (diff >= -0.5 && diff < -0.3) {
        /* ── PEEK: partially visible on the right ── */
        const t = easeOutQuint((diff + 0.5) / 0.2); // 0 → 1
        x = lerp(70, 55, t);
        opacity = lerp(0, 0.3, t);
        scale = lerp(0.88, 0.9, t);
        rotate = 0;
        shadowY = 4;
        shadowBlur = 12;
        shadowAlpha = 0.04;
      } else if (diff >= -0.3 && diff < 0.0) {
        /* ── SLIDE IN: glide from peek position to center ── */
        const t = easeOutQuint((diff + 0.3) / 0.3); // 0 → 1
        x = lerp(55, 0, t);
        opacity = lerp(0.3, 1, t);
        scale = lerp(0.9, 1, t);
        rotate = lerp(1.2, 0, t);
        shadowY = lerp(4, 20, t);
        shadowBlur = lerp(12, 50, t);
        shadowAlpha = lerp(0.05, 0.15, t);
      } else if (diff >= 0.0 && diff < 0.6) {
        /* ── HOLD CENTER: reading zone ── */
        x = 0;
        opacity = 1;
        scale = 1;
        rotate = 0;
        shadowY = 20;
        shadowBlur = 50;
        shadowAlpha = 0.15;
      } else if (diff >= 0.6 && diff < 1.0) {
        /* ── SLIDE OUT LEFT ── */
        const t = easeOutQuint((diff - 0.6) / 0.4); // 0 → 1
        x = lerp(0, -55, t);
        opacity = lerp(1, 0, t);
        scale = lerp(1, 0.92, t);
        rotate = lerp(0, -1.2, t);
        shadowY = lerp(20, 4, t);
        shadowBlur = lerp(50, 12, t);
        shadowAlpha = lerp(0.15, 0.04, t);
      }

      opacity = clamp(opacity, 0, 1);

      wrapper.style.opacity = String(opacity);
      wrapper.style.transform = `translateX(${x}%) scale(${scale}) rotate(${rotate}deg)`;
      wrapper.style.pointerEvents = opacity > 0.5 ? "auto" : "none";

      if (inner) {
        inner.style.boxShadow = `0 ${shadowY}px ${shadowBlur}px rgba(0,0,0,${shadowAlpha})`;
      }
    }

    /* ── Scroll hint ── */
    if (hintRef.current) {
      const hintOpacity = progress < 0.05 ? 1 - progress / 0.05 : 0;
      hintRef.current.style.opacity = String(hintOpacity);
      if (hintOpacity === 0) hintRef.current.style.pointerEvents = "none";
    }
  }, []);

  /* ── rAF loop ── */
  useEffect(() => {
    let rafId: number;
    const loop = () => {
      animate();
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, [animate]);

  /* ── Click-to-navigate ── */
  const scrollToStory = useCallback((index: number) => {
    const runway = runwayRef.current;
    if (!runway) return;
    const runwayTop = runway.getBoundingClientRect().top + window.scrollY;
    const scrollable = runway.offsetHeight - window.innerHeight;
    const targetProgress = (index + 0.3) / STORY_COUNT; // center of reading zone
    window.scrollTo({
      top: runwayTop + targetProgress * scrollable,
      behavior: "smooth",
    });
  }, []);

  return (
    <section id="stories" className="relative">
      {/* ── Eyebrow intro ── */}
      <div className="relative bg-brand-cream-50 py-16 md:py-24 text-center px-6">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-green-400">
          Real Transformations
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-brown-400 leading-tight max-w-3xl mx-auto">
          Stories that speak for themselves
        </h2>
        <div className="gold-divider-centered" />
        <p className="mt-6 text-lg text-brand-brown-200 max-w-xl mx-auto">
          Every journey is unique. Here are a few that changed lives.
        </p>
      </div>

      {/* ── Scroll runway ── */}
      <div
        ref={runwayRef}
        style={{ height: `${STORY_COUNT * vhPerStory}vh` }}
        className="relative"
      >
        {/* ── Sticky viewport ── */}
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-cream-50">
          {/* Ambient glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 40%, rgba(127,147,38,0.04) 0%, transparent 70%)",
            }}
          />

          {/* ── Main content ── */}
          <div className="relative z-10 w-full max-w-4xl mx-auto px-6 flex-1 flex flex-col items-center justify-center">
            {/* Title stack */}
            <div
              className="relative w-full text-center mb-8 md:mb-10"
              style={{ minHeight: "90px" }}
            >
              {transformationStories.map((story, i) => (
                <div
                  key={story.id}
                  ref={(el) => {
                    titleRefs.current[i] = el;
                  }}
                  className="absolute inset-0 flex flex-col items-center justify-center"
                  style={{ opacity: 0, willChange: "transform, opacity" }}
                >
                  <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-brown-400 leading-[1.1] tracking-tight">
                    {story.title}
                  </h3>
                </div>
              ))}
            </div>

            {/* Card stack */}
            <div className="relative w-full" style={{ minHeight: "300px" }}>
              {transformationStories.map((story, i) => (
                <div
                  key={story.id}
                  ref={(el) => {
                    cardRefs.current[i] = el;
                  }}
                  className="absolute inset-0 flex items-start justify-center"
                  style={{ opacity: 0, willChange: "transform, opacity" }}
                >
                  <div
                    ref={(el) => {
                      cardInnerRefs.current[i] = el;
                    }}
                    className="relative w-full max-w-lg rounded-2xl border border-brand-cream-200 bg-white p-7 md:p-8 text-left"
                    style={{
                      boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                      willChange: "box-shadow",
                    }}
                  >
                    {/* Left accent bar */}
                    <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-brand-gold-300 via-brand-green-200 to-brand-gold-200" />

                    {/* Stars */}
                    <div className="flex items-center gap-1 text-brand-gold-300 mb-4">
                      {Array.from({ length: 5 }).map((_, si) => (
                        <svg
                          key={si}
                          className="h-4.5 w-4.5 fill-current"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-lg md:text-xl leading-8 text-brand-brown-300 italic">
                      &ldquo;{story.review.excerpt}&rdquo;
                    </blockquote>

                    {/* Duration note */}
                    {story.review.durationNote ? (
                      <p className="mt-3 text-sm font-semibold text-brand-green-400">
                        {story.review.durationNote}
                      </p>
                    ) : null}

                    {/* Author */}
                    <div className="mt-5 flex items-center gap-3 pt-4 border-t border-brand-cream-100">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-green-50 to-brand-green-100 text-brand-green-500 font-bold text-sm">
                        {story.review.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-brand-brown-400">
                          {story.review.name}
                        </p>
                        <p className="text-xs text-brand-brown-100">
                          Verified Student
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Bottom: progress bar + hint ── */}
          <div className="relative z-10 pb-8 flex flex-col items-center gap-3">
            {/* Step counter + progress bar */}
            <div className="flex flex-col items-center gap-2">
              <span
                ref={stepCounterRef}
                className="text-xs font-semibold text-brand-brown-200 tabular-nums tracking-wider"
              >
                1 / {STORY_COUNT}
              </span>
              <button
                className="group relative w-48 h-[2px] bg-brand-brown-100/20 rounded-full overflow-hidden cursor-pointer"
                aria-label="Jump to story"
                onClick={(e) => {
                  const bar = e.currentTarget;
                  const clickX =
                    e.clientX - bar.getBoundingClientRect().left;
                  const ratio = clamp(clickX / bar.offsetWidth, 0, 1);
                  scrollToStory(
                    Math.floor(ratio * STORY_COUNT),
                  );
                }}
              >
                <div
                  ref={progressFillRef}
                  className="absolute inset-y-0 left-0 bg-brand-green-400 rounded-full"
                  style={{
                    width: "0%",
                    transition: "width 0.15s ease-out",
                  }}
                />
              </button>
            </div>

            {/* Scroll hint */}
            <div
              ref={hintRef}
              className="flex flex-col items-center gap-1.5"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand-brown-200/50 font-semibold">
                Scroll to explore
              </span>
              <svg
                className="h-4 w-4 text-brand-brown-200/30"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                style={{ animation: "bounce 1s ease-in-out 3" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
