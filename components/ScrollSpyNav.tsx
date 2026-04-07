"use client";

import { useEffect, useState, useRef, useCallback } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "benefits", label: "Benefits" },
  { id: "classes", label: "Classes" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export default function ScrollSpyNav() {
  const [activeId, setActiveId] = useState("hero");
  const [isDragging, setIsDragging] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Controls the cinematic fade
  const navRef = useRef<HTMLElement>(null);
  const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Cinematic Activity Tracker
  useEffect(() => {
    const handleActivity = () => {
      setIsVisible(true);
      if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
      
      inactivityTimerRef.current = setTimeout(() => {
        // Only fade out if they aren't actively holding down and scrubbing!
        if (!isDragging) {
          setIsVisible(false);
        }
      }, 2000); // 2 seconds of pure idle time before fading away
    };

    window.addEventListener("mousemove", handleActivity, { passive: true });
    window.addEventListener("scroll", handleActivity, { passive: true });
    window.addEventListener("touchstart", handleActivity, { passive: true });

    // Trigger on mount
    handleActivity();

    return () => {
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("scroll", handleActivity);
      window.removeEventListener("touchstart", handleActivity);
      if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
    };
  }, [isDragging]);

  // Intersection Observer for Passive Scrolling
  useEffect(() => {
    if (isDragging) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" } 
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isDragging]);

  // Scrubbing Mapping Logic
  const handleScrub = useCallback((clientY: number) => {
    if (!navRef.current) return;
    
    const rect = navRef.current.getBoundingClientRect();
    const relativeY = clientY - rect.top;
    const clampedY = Math.max(0, Math.min(relativeY, rect.height));
    const percentage = clampedY / rect.height;
    
    const index = Math.min(
      Math.floor(percentage * sections.length),
      sections.length - 1
    );
    
    const targetId = sections[index].id;
    
    if (activeId !== targetId) {
      setActiveId(targetId);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "instant" });
      }
    }
  }, [activeId]);

  // Global Pointer Listeners for Scrubbing
  useEffect(() => {
    if (!isDragging) return;

    const onPointerMove = (e: PointerEvent) => {
      e.preventDefault(); 
      handleScrub(e.clientY);
    };

    const onPointerUp = () => {
      setIsDragging(false);
      document.body.style.userSelect = "auto";
      
      // Immediately reset the cinematic timer when they let go of the scrubber
      if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
      inactivityTimerRef.current = setTimeout(() => setIsVisible(false), 2000);
    };

    document.body.style.userSelect = "none";
    window.addEventListener("pointermove", onPointerMove, { passive: false });
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);

    return () => {
      document.body.style.userSelect = "auto";
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
    };
  }, [isDragging, handleScrub]);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    setIsVisible(true); // Force visibility when grabbed
    handleScrub(e.clientY);
  };

  const handleClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (isDragging) return;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveId(id);
    }
  };

  // We add cinematic transition classes to the entire nav wrapper
  return (
    <nav 
      ref={navRef}
      aria-label="Quick Page Navigation Scrub"
      className={`fixed right-6 top-[55%] -translate-y-1/2 z-[60] hidden md:flex flex-col gap-4 py-8 px-4 rounded-xl transition-all duration-700 touch-none select-none cursor-ns-resize 
        ${isVisible || isDragging 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 translate-x-4 pointer-events-none'
        }
      `}
      onPointerDown={handlePointerDown}
    >
      {sections.map(({ id, label }) => {
        const isActive = activeId === id;
        return (
          <div key={id} className="group relative flex items-center justify-end">
            <span 
              className={`absolute right-full mr-4 whitespace-nowrap rounded-lg border px-3 py-1.5 text-xs font-semibold shadow-lg transition-all duration-200 pointer-events-none 
                ${isActive 
                  ? 'bg-brand-green-500 text-white border-brand-green-400' 
                  : 'bg-white text-brand-brown-400 border-brand-cream-200'
                }
                ${(isDragging && isActive) || (!isDragging)
                  ? '' 
                  : 'opacity-0' 
                }
                opacity-0 translate-x-2 
                group-hover:opacity-100 group-hover:-translate-x-0 
                ${isDragging && isActive ? 'opacity-100 -translate-x-0' : ''}
              `}
            >
              {label}
            </span>

            <button
              onClick={(e) => handleClick(id, e)}
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-400 rounded-full"
              aria-label={`Scroll to ${label}`}
              aria-current={isActive ? "step" : undefined}
              disabled={isDragging} 
            >
              <div 
                className={`transition-all duration-200 rounded-full m-1 ${
                  isActive 
                    ? "h-2.5 w-2.5 bg-brand-green-500 ring-[6px] ring-brand-green-100 shadow-[0_0_12px_rgba(127,147,38,0.4)]" 
                    : "h-2 w-2 bg-brand-green-500 opacity-30 hover:opacity-100 hover:scale-125"
                }`}
              />
            </button>
          </div>
        );
      })}
    </nav>
  );
}
