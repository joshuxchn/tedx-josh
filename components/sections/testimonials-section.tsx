"use client";

import Image from "next/image";

const executiveBoard = [
  { 
    name: "Darby Elo", 
    role: "President", 
    major: "Political Science & Spanish",
    bio: "Darby joined TEDx because she believes listening to others and engaging with new ideas helps us better understand the world around us.",
    image: "https://raw.githubusercontent.com/joshuxchn/tedx-josh/main/exec%20images/darby.jpg" 
  },
  { 
    name: "Claire Yung", 
    role: "Director of Curation", 
    major: "Psychology & Sociology",
    bio: "She joined TEDx because she believes everyone has a story worth sharing and wanted to meet new people.",
    image: "https://raw.githubusercontent.com/joshuxchn/tedx-josh/main/exec%20images/clairey.jpg" 
  },
  { 
    name: "Michelle Park", 
    role: "Director of Event Planning", 
    major: "Media and Cinema Studies",
    bio: "Michelle joined because she wanted to create opportunities for people to share their own stories and passions with the world!",
    image: "https://raw.githubusercontent.com/joshuxchn/tedx-josh/main/exec%20images/michelle.jpg" 
  },
  { 
    name: "Claire Skowron", 
    role: "Director of Logistics", 
    major: "Chemistry & Statistics",
    bio: "Claire wanted to facilitate this great exchange of information between our world and our campus.",
    image: "https://raw.githubusercontent.com/joshuxchn/tedx-josh/main/exec%20images/claires.jpg" 
  },
  { 
    name: "Cale Workman", 
    role: "Director of Membership", 
    major: "Economics, CS Minor",
    bio: "Cale joined TEDx to utilize and refine his professional communication skills!",
    image: "https://raw.githubusercontent.com/joshuxchn/tedx-josh/main/exec%20images/cale.jpg" 
  },
  { 
    name: "Mahek Dugar", 
    role: "Director of Finance", 
    major: "Finance & Data Science",
    bio: "Mahek joined TEDxUIUC because she's always loved listening to people explain why they think the way they do.",
    image: "https://raw.githubusercontent.com/joshuxchn/tedx-josh/main/exec%20images/mahek.jpg" 
  },
  { 
    name: "Ella Ko", 
    role: "Director of Marketing", 
    major: "Marketing & Information Systems",
    bio: "Ella joined TEDxUIUC because she wanted to help bring different perspectives and ideas to the UIUC community.",
    image: "https://raw.githubusercontent.com/joshuxchn/tedx-josh/main/exec%20images/ella.jpg" 
  },
];

export function TestimonialsSection() {
  return (
    <section id="team" className="bg-background py-20 md:py-32">
      <div className="px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground">
            Meet the Team
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We&apos;re a team of passionate students dedicated to bringing TED&apos;s mission of &quot;Ideas Worth Spreading&quot; to the University of Illinois Urbana-Champaign.
          </p>
        </div>

        {/* Executive Board */}
        <div>
          <h3 className="text-sm uppercase tracking-widest text-muted-foreground text-center mb-12">Executive Board</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {executiveBoard.map((member, index) => (
              <div key={index} className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h4 className="font-medium text-foreground text-lg">{member.name}</h4>
                <p className="text-[#E62B1E] text-sm font-medium mb-2">{member.role}</p>
                <p className="text-xs text-muted-foreground mb-1">{member.major}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
