"use client";

import Image from "next/image";

const speakers = [
  {
    name: "Paige Taylor",
    title: "Social Media Influencer",
    bio: "Paige Taylor is a social media influencer with over 7 million followers across social platforms. Known for her relatable, comedic approach to personal growth and modern life, Paige has built a devoted audience by sharing unfiltered perspectives on authenticity, self discovery, and navigating culture in real time.",
    highlights: "Her work blends humor with authenticity offering her audiences a refreshing take on what it means to be yourself in 2026!",
    image: "https://raw.githubusercontent.com/joshuxchn/tedx-josh/main/assets/speakers/Paige%20Taylor.jpg",
  },
  {
    name: "Ernest Crim III",
    title: "Educator & Cultural Specialist",
    bio: "Ernest Crim III is an Emmy-nominated public educator, modern-day griot, and cultural competency specialist. A former public school history teacher, he is now a speaker, author, and CEO of Crim's Cultural Consulting, where he helps schools, organizations, and communities bridge cultural divides through overlooked historical narratives.",
    highlights: "His work reaches millions online, challenging whitewashed history and centering Black resilience and innovation.",
    image: "https://raw.githubusercontent.com/joshuxchn/tedx-josh/main/assets/speakers/Ernest%20Crim.jpg",
  },
  {
    name: "Leonora LaPeter Anton",
    title: "Pulitzer Prize-Winning Journalist",
    bio: "Leonora LaPeter Anton is a freelance writer based in St. Petersburg. For 36 years, she wrote narrative and investigative stories at five Southeastern U.S. newspapers, including for 23 years at the Tampa Bay Times. She graduated in 1986 from the University of Illinois at Urbana-Champaign with a Bachelor of Science in Journalism.",
    highlights: "In 2016, she was part of a three-person team that won the Pulitzer Prize for Investigative Reporting.",
    image: "https://raw.githubusercontent.com/joshuxchn/tedx-josh/main/assets/speakers/Leonora%20LaPeter.jpeg",
  },
  {
    name: "Paul Rudolph",
    title: "Musician & Composer",
    bio: "Paul Rudolph is a musician, composer, instrument builder, and works for Sesame Street as vocal music director, editor and composer. He works with the cast and guest celebrities on digital content, outreach projects and live performances.",
    highlights: "Rudolph has 3 Emmys for Music Editing, 11 collective Emmys for Outstanding Children's Series, and 2 Emmy nominations for Music Direction.",
    image: "https://raw.githubusercontent.com/joshuxchn/tedx-josh/main/assets/speakers/Paul%20Rudolph.jpeg",
  },
];

export function FeaturedProductsSection() {
  return (
    <section id="speakers" className="relative bg-background py-20 md:py-32">
      <div className="px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground">
            Meet Our Speakers
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the brilliant minds taking the TEDxUIUC stage. Each speaker brings unique insight, passion, and innovation.
          </p>
        </div>

        {/* Speaker Cards */}
        <div className="flex flex-col gap-12 max-w-5xl mx-auto">
          {speakers.map((speaker, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row gap-8 items-start ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image */}
              <div className="relative w-full md:w-80 aspect-square overflow-hidden rounded-2xl flex-shrink-0">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-medium text-foreground mb-2">{speaker.name}</h3>
                <p className="text-[#E62B1E] font-medium mb-4">{speaker.title}</p>
                <p className="text-muted-foreground leading-relaxed mb-4">{speaker.bio}</p>
                <div className="border-l-2 border-[#E62B1E] pl-4">
                  <p className="text-sm text-foreground italic">{speaker.highlights}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
