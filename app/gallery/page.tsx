"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const galleryImages = [
  "96d0f45f-2e37-4a60-826e-ff95c6286466.JPG",
  "IMG_0894.JPG",
  "IMG_0922.JPG",
  "IMG_0926.JPG",
  "IMG_0929.JPG",
  "IMG_0933.JPG",
  "IMG_0936.JPG",
  "IMG_0998.JPG",
  "IMG_6520.JPG",
  "IMG_6526.JPG",
  "IMG_6531.JPG",
  "IMG_6538.JPG",
  "IMG_6556.JPG",
  "IMG_6588.JPG",
  "IMG_6592.JPG",
  "IMG_6598.JPG",
  "IMG_6603.JPG",
  "IMG_6613.JPG",
  "IMG_6619.JPG",
];

// Define layout patterns — every 6 images repeats this pattern
// "tall" = spans 2 rows, "wide" = spans 2 columns, "featured" = spans 2x2, "normal" = 1x1
const layoutPattern: Array<"featured" | "tall" | "wide" | "normal"> = [
  "featured", "normal", "normal",
  "normal", "tall", "normal",
];

function getLayoutClass(index: number): string {
  const patternIndex = index % layoutPattern.length;
  const type = layoutPattern[patternIndex];

  switch (type) {
    case "featured":
      return "col-span-2 row-span-2";
    case "tall":
      return "row-span-2";
    case "wide":
      return "col-span-2";
    default:
      return "";
  }
}

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Navigate lightbox
  const navigateLightbox = useCallback(
    (direction: 1 | -1) => {
      if (selectedIndex === null) return;
      const next = selectedIndex + direction;
      if (next >= 0 && next < galleryImages.length) {
        setSelectedIndex(next);
      }
    },
    [selectedIndex]
  );

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") navigateLightbox(1);
      if (e.key === "ArrowLeft") navigateLightbox(-1);
    };
    if (selectedIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedIndex, navigateLightbox]);

  return (
    <main>
      {/* ── Hero Banner ──────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-cream-200 via-brand-cream-100 to-white">
        <div className="absolute top-10 right-10 h-64 w-64 rounded-full bg-brand-gold-100/40 blur-3xl" />
        <div className="absolute bottom-10 left-10 h-48 w-48 rounded-full bg-brand-green-50/50 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28 lg:px-8 text-center">
          <FadeIn direction="up">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-green-400">
              Gallery
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-brand-brown-400 sm:text-5xl lg:text-6xl">
              Moments of Stillness
            </h1>
          </FadeIn>

          <FadeIn delay={150} direction="up">
            <div className="gold-divider-centered mt-4" />
            <p className="mt-6 mx-auto max-w-2xl text-lg leading-8 text-brand-brown-300">
              A visual journey through our community — from workshops and corporate wellness sessions to peaceful morning practices and joyful children&apos;s classes.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Masonry-Style Grid ────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-flow-dense auto-rows-[180px] sm:auto-rows-[220px] lg:auto-rows-[240px] grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {galleryImages.map((fileName, index) => (
            <FadeIn
              key={fileName}
              delay={(index % 4) * 80}
              direction="up"
              className={getLayoutClass(index)}
            >
              <button
                onClick={() => setSelectedIndex(index)}
                className="group relative block w-full h-full overflow-hidden rounded-2xl bg-brand-cream-100 outline-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-brand-green-400"
              >
                <Image
                  src={`/gallery/${fileName}`}
                  alt="Yoga class moment"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-brand-brown-600/0 transition-colors duration-500 group-hover:bg-brand-brown-600/30 flex items-center justify-center">
                  <div className="scale-75 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white shadow-xl ring-1 ring-white/30">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── Fullscreen Lightbox with Navigation ──────────── */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm animate-fade-in">
          {/* Close on background click */}
          <div className="absolute inset-0" onClick={() => setSelectedIndex(null)} />

          {/* Close Button */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-110 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous Arrow */}
          {selectedIndex > 0 && (
            <button
              onClick={() => navigateLightbox(-1)}
              className="absolute left-4 sm:left-8 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-110 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Next Arrow */}
          {selectedIndex < galleryImages.length - 1 && (
            <button
              onClick={() => navigateLightbox(1)}
              className="absolute right-4 sm:right-8 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-110 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Image Container */}
          <div className="relative h-full w-full max-h-[85vh] max-w-5xl mx-4 sm:mx-8 rounded-lg overflow-hidden shadow-2xl animate-scale-in">
            <Image
              key={galleryImages[selectedIndex]} // Re-trigger animation on change
              src={`/gallery/${galleryImages[selectedIndex]}`}
              alt="Fullscreen Yoga Moment"
              fill
              quality={100}
              className="object-contain"
              priority
            />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md">
            <p className="text-sm font-medium text-white/80">
              {selectedIndex + 1} / {galleryImages.length}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
