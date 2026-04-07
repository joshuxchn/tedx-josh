"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";

const specs = [
  { label: "Speakers", value: "12+" },
  { label: "Attendees", value: "500+" },
  { label: "Ideas Shared", value: "24" },
  { label: "Years Running", value: "10" },
];

export function EditorialSection() {
  const videoRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  const updateParallax = useCallback(() => {
    if (!videoRef.current) return;

    const rect = videoRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const videoTop = rect.top;
    const videoBottom = rect.bottom;

    if (videoBottom > 0 && videoTop < windowHeight) {
      const progress = 1 - (videoTop + rect.height / 2) / (windowHeight + rect.height);
      setScrollProgress(Math.max(0, Math.min(1, progress)));
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(updateParallax);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateParallax();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updateParallax]);

  const parallaxY = (scrollProgress - 0.5) * 30;

  return (
    <section id="tickets" className="bg-background">
      {/* Tickets CTA Banner */}
      <div className="px-6 py-20 md:px-12 md:py-28 lg:px-20 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground mb-6">
          Get Your Tickets
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          Join us on April 18th at the Campus Instructional Facility for a day of inspiring talks, meaningful connections, and ideas worth spreading at the University of Illinois.
        </p>
        <Link
          href="https://events.ticketleap.com/tickets/tedxuiuc/tedxuiuc"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-full bg-[#E62B1E] text-white hover:opacity-90 transition-opacity"
        >
          Reserve Your Spot
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>

      {/* Full-width Video with Parallax */}
      <div ref={videoRef} className="relative aspect-[16/9] w-full md:aspect-[21/9] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            transform: `scale(1.15) translate3d(0, ${parallaxY}px, 0) translateZ(0)`,
            WebkitTransform: `scale(1.15) translate3d(0, ${parallaxY}px, 0) translateZ(0)`,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            willChange: 'transform',
          }}
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/27eb7fb4-0105-4010-ac9e-0ac977a31b05_1-FZ89nvBAAsR3caRJbhYv7T2mjBofth.mp4"
        />
      </div>

      {/* Specs Grid */}
      <div className="grid grid-cols-2 border-t border-border md:grid-cols-4">
        {specs.map((spec) => (
          <div
            key={spec.label}
            className="border-b border-r border-border p-8 text-center last:border-r-0 md:border-b-0"
          >
            <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
              {spec.label}
            </p>
            <p className="font-medium text-foreground text-5xl">
              {spec.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
