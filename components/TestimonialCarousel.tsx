"use client";

import { useEffect, useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import type { Testimonial } from "@/data/siteData";

type TestimonialCarouselProps = {
  testimonials: Testimonial[];
};

export default function TestimonialCarousel({
  testimonials,
}: TestimonialCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Drag to scroll refs
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);

  // Duplicate items and add spacers so the first card natively clears the edge mask
  const displayItems = [null, ...testimonials, null, ...testimonials];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId: number;
    let lastTime = performance.now();
    let preciseScroll = container.scrollLeft;

    const scroll = (time: number) => {
      const delta = Math.min(time - lastTime, 50);
      lastTime = time;

      if (!isHovered && !isDragging.current) {
        preciseScroll += 0.03 * delta;

        if (Math.abs(preciseScroll - container.scrollLeft) > 5) {
           preciseScroll = container.scrollLeft;
        } else {
           container.scrollLeft = preciseScroll;
        }

        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
          preciseScroll = 0;
        }
      } else {
        preciseScroll = container.scrollLeft;
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsHovered(true);
    isDragging.current = true;
    if (!scrollRef.current) return;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    startScrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    setIsHovered(false);
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault(); // Prevent text selection highlight
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Scroll speed multiplier
    scrollRef.current.scrollLeft = startScrollLeft.current - walk;
  };

  return (
    <div 
      className="relative w-full overflow-hidden py-8"
      style={{
        maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)"
      }}
    >
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto whitespace-nowrap scrollbar-hide py-4 px-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {displayItems.map((testimonial, index) => 
          testimonial === null ? (
            <div key={`spacer-${index}`} className="w-[10vw] shrink-0" aria-hidden="true" />
          ) : (
            <div
              key={`${testimonial.name}-${index}`}
              className="w-[280px] shrink-0 sm:w-[340px] md:w-[380px] whitespace-normal transition-transform duration-500 ease-out hover:scale-[1.03] hover:z-10 cursor-grab active:cursor-grabbing select-none"
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          )
        )}
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}} />
    </div>
  );
}
