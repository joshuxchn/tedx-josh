"use client";

import Image from "next/image";
import Link from "next/link";

const opportunities = [
  {
    title: "Volunteer",
    description: "Help bring TEDxUIUC to life. Join our team of dedicated volunteers.",
    cta: "Apply Now",
    href: "#",
  },
  {
    title: "Speak",
    description: "Have an idea worth spreading? Apply to be a speaker at our next event.",
    cta: "Submit Idea",
    href: "#",
  },
  {
    title: "Partner",
    description: "Support innovation at Illinois. Become a TEDxUIUC sponsor or partner.",
    cta: "Get in Touch",
    href: "#",
  },
];

export function JoinSection() {
  return (
    <section id="join" className="bg-foreground text-background">
      {/* Hero Image */}
      <div className="relative h-[50vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1600&q=80"
          alt="Team collaboration"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white text-center px-6">
            Join TEDxUIUC
          </h2>
        </div>
      </div>

      {/* Opportunities Grid */}
      <div className="px-6 py-20 md:px-12 md:py-32 lg:px-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {opportunities.map((item, index) => (
            <div 
              key={index} 
              className="border border-background/20 rounded-2xl p-8 hover:bg-background/5 transition-colors"
            >
              <h3 className="text-2xl font-medium mb-4">{item.title}</h3>
              <p className="text-background/70 mb-6">{item.description}</p>
              <Link
                href={item.href}
                className="inline-flex items-center text-sm font-medium text-[#E62B1E] hover:underline"
              >
                {item.cta}
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
