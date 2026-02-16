"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

/* ─── Project Data ─── */
const projects = [
  {
    title: "Pier SIXTY-SIX",
    type: "Mixed-Use",
    category: "Hotel - Residential - Marina",
    location: "Fort Lauderdale Beach, Florida USA",
    year: "2018 (Opened 2025)",
    size: "35 Acres",
    image: "/images/pier66-hero.jpg",
    link: "/projects/projects-pier-66/temp",
  },
  {
    title: "Presidential Palace Abu Dhabi",
    type: "Government",
    category: "Government Ministry",
    location: "Abu Dhabi, United Arab Emirates",
    year: "2015 (Completion)",
    size: "50,000+ sqm",
    image: "/images/palace-hero.jpg",
    link: "/projects/projects-ppp/temp",
  },
  {
    title: "Trojena Masterplan",
    type: "Residential",
    category: "Luxury Residence",
    location: "Tabuk Province, Saudi Arabia",
    year: "2023-2025",
    size: undefined,
    image: "/images/trojena-hero.png",
    link: "/projects/trojena-overview/temp",
  },
];

/* ═══════════════════════════════════════════
   PROJECTS PAGE
   ═══════════════════════════════════════════ */
export default function ProjectsPage() {
  return (
    <>
      {/* ───── HERO ───── */}
      <section className="relative w-full min-h-screen overflow-hidden">
        <ScrollReveal variant="scaleIn" className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #f7f2e9 0%, #fffbf5 100%)",
            }}
          />
        </ScrollReveal>
        <div className="relative z-10 pt-[170px] px-6 md:px-[50px] pb-20">
          <ScrollReveal variant="slideUp">
            <h1 className="max-w-3xl">Projects</h1>
          </ScrollReveal>
        </div>
      </section>

      {/* ───── INTRO TEXT ───── */}
      <section className="py-[80px] md:py-[100px] px-6 md:px-[50px] bg-cream">
        <ScrollReveal>
          <div className="max-w-4xl">
            <h1 className="text-[28px] md:text-[36px] leading-[1.2] tracking-[-1.5px] font-medium text-dark">
              Explore a collection of projects we&apos;ve brought to life, each
              crafted with passion, precision, and a little sprinkle of genius.
            </h1>
          </div>
        </ScrollReveal>
      </section>

      {/* ───── PROJECT CARDS GRID ───── */}
      <section className="py-[80px] md:py-[100px] px-6 md:px-[50px] bg-cream">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.15}>
              <Link href={project.link} className="group block">
                {/* Card */}
                <div className="rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Type badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[12px] font-semibold uppercase tracking-wider text-dark">
                        {project.type}
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-6">
                    <h3 className="text-[22px] leading-[1.2] tracking-[-0.5px] font-medium text-dark mb-4">
                      {project.title}
                    </h3>

                    <div className="space-y-2 text-[14px] leading-[20px] text-dark/70">
                      <div className="flex justify-between">
                        <span className="font-medium text-dark/50">
                          Category
                        </span>
                        <span className="text-right">{project.category}</span>
                      </div>
                      <div className="border-t border-dark/5" />
                      <div className="flex justify-between">
                        <span className="font-medium text-dark/50">
                          Location
                        </span>
                        <span className="text-right">{project.location}</span>
                      </div>
                      <div className="border-t border-dark/5" />
                      <div className="flex justify-between">
                        <span className="font-medium text-dark/50">Year</span>
                        <span>{project.year}</span>
                      </div>
                      {project.size && (
                        <>
                          <div className="border-t border-dark/5" />
                          <div className="flex justify-between">
                            <span className="font-medium text-dark/50">
                              Size
                            </span>
                            <span>{project.size}</span>
                          </div>
                        </>
                      )}
                    </div>

                    {/* CTA */}
                    <div className="mt-6 pt-4 border-t border-dark/10">
                      <span className="text-accent-orange font-medium text-[14px] group-hover:underline">
                        View Project &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
