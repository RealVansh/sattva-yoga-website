"use client";

import { useEffect, useRef, useState } from "react";

export default function FadeIn({
  children,
  delay = 0,
  className = "",
  direction = "up", // 'up', 'left', 'right', 'none'
}: {
  children?: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          // Stop observing once animated in so it doesn't stutter if they scroll back up
          if (domRef.current) observer.unobserve(domRef.current);
        }
      },
      // Triggers when the element enters the bottom 10% of the screen
      { threshold: 0.1, rootMargin: "0px 0px -20px 0px" }
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => observer.disconnect();
  }, []);

  let transformClass = "";
  if (!isVisible) {
    if (direction === "up") transformClass = "translate-y-12";
    if (direction === "left") transformClass = "-translate-x-12";
    if (direction === "right") transformClass = "translate-x-12";
    if (direction === "none") transformClass = "";
  } else {
    if (direction === "up" || direction === "left" || direction === "right") {
      transformClass = "translate-y-0 translate-x-0";
    }
  }

  return (
    <div
      ref={domRef}
      className={`transition-all duration-650 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${transformClass} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
