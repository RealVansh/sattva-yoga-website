"use client";

import { useEffect, useRef, useState } from "react";
import { testimonials, type Testimonial } from "@/data/siteData";

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function ReviewCard({
  testimonial,
  index,
  isVisible,
}: {
  testimonial: Testimonial;
  index: number;
  isVisible: boolean;
}) {
  const initial = testimonial.name.charAt(0).toUpperCase();
  const delay = Math.min(index * 100, 800);

  return (
    <div
      className={`relative break-inside-avoid mb-6 rounded-2xl border border-brand-cream-200 bg-white p-6 shadow-sm card-glow hover:border-brand-gold-200 transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Google badge */}
      <span className="absolute top-4 right-4 text-[10px] text-brand-brown-100/50 font-semibold select-none">
        Google
      </span>

      {/* Star rating */}
      <div className="flex gap-0.5" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <StarIcon key={i} className="h-4 w-4 text-brand-gold-300" />
        ))}
      </div>

      {/* Comment */}
      <p className="mt-4 text-base leading-7 text-brand-brown-300 italic">
        &ldquo;{testimonial.comment}&rdquo;
      </p>

      {/* Author */}
      <div className="mt-4 pt-4 border-t border-brand-cream-100 flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-brand-green-50 to-brand-green-100 flex items-center justify-center shrink-0">
          <span className="text-sm font-bold text-brand-green-500">
            {initial}
          </span>
        </div>
        <div>
          <p className="text-sm font-bold text-brand-brown-400">
            {testimonial.name}
          </p>
          <p className="text-xs text-brand-brown-100">Verified Student</p>
        </div>
      </div>
    </div>
  );
}

export default function ReviewsWall() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = gridRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="reviews" className="bg-brand-cream-50 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-green-400">
            REVIEWS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-brown-400 text-center mt-3">
            What our students say
          </h2>
          <div className="gold-divider-centered mt-4" />
          <p className="text-lg text-brand-brown-200 text-center mt-6">
            Real reviews from Google
          </p>
        </div>

        {/* Masonry grid */}
        <div
          ref={gridRef}
          className="mt-16 columns-1 md:columns-2 lg:columns-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <ReviewCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
