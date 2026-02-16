"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const metadata = [
  { label: "Client", value: "NEOM" },
  { label: "Type", value: "Residential" },
  { label: "Year", value: "2023–2025" },
  { label: "Location", value: "Tabuk Province, Saudi Arabia" },
  { label: "Services", value: "D-VELOP360, Development Management, Branded Residential Advisory" },
  { label: "Status", value: "In Progress" },
];

const highlights = [
  {
    title: "Mountain Resort Destination",
    description:
      "A year-round mountain destination offering outdoor sports, wellness experiences, and nature tourism at elevations of 1,500 to 2,600 meters above sea level.",
  },
  {
    title: "Luxury Branded Residences",
    description:
      "Exclusive residential offerings developed in partnership with world-class hospitality brands, designed for ultra-high-net-worth individuals seeking extraordinary mountain living.",
  },
  {
    title: "Sustainable Vision",
    description:
      "Designed with sustainability at its core, integrating with the natural landscape while minimizing environmental impact and maximizing the region\u2019s unique topography.",
  },
  {
    title: "Mixed-Use Integration",
    description:
      "A holistic masterplan blending hospitality, residential, retail, entertainment, and wellness into a seamless mountain community experience.",
  },
];

export default function TrojenaOverviewPage() {
  return (
    <main className="bg-cream min-h-screen">
      {/* Back Link */}
      <div className="px-6 md:px-[50px] pt-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-dark/60 hover:text-accent-orange transition-colors font-inter text-sm"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>
      </div>

      {/* Hero Image */}
      <section className="px-6 md:px-[50px] pt-8 pb-[80px] md:pb-[100px]">
        <ScrollReveal variant="scaleIn">
          <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
            <Image
              src="/images/trojena-hero.png"
              alt="Trojena Masterplan aerial rendering"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* Project Title & Metadata */}
      <section className="py-[80px] md:py-[100px] px-6 md:px-[50px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16">
          {/* Main Content */}
          <div>
            <ScrollReveal variant="slideUp">
              <h1 className="font-inter text-4xl md:text-5xl lg:text-6xl font-semibold text-dark leading-tight">
                Trojena
              </h1>
              <p className="font-inter text-xl text-dark/60 mt-4">
                The Mountains of NEOM
              </p>
            </ScrollReveal>
          </div>

          {/* Sidebar Metadata */}
          <ScrollReveal variant="slideUp" delay={0.2}>
            <div className="border-t border-dark/10">
              {metadata.map((item) => (
                <div
                  key={item.label}
                  className="flex justify-between py-4 border-b border-dark/10"
                >
                  <span className="font-mono text-xs uppercase tracking-wider text-dark/50">
                    {item.label}
                  </span>
                  <span className="font-inter text-sm text-dark text-right max-w-[220px]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-[80px] md:py-[100px] px-6 md:px-[50px]">
        <div className="max-w-4xl">
          <ScrollReveal variant="slideUp">
            <h3 className="font-mono text-xs uppercase tracking-wider text-accent-orange mb-6">
              Project Overview
            </h3>
          </ScrollReveal>
          <ScrollReveal variant="slideUp" delay={0.1}>
            <p className="font-inter text-lg md:text-xl text-dark/80 leading-relaxed mb-8">
              Trojena is the global mountain destination at NEOM in the Tabuk
              Province of northwest Saudi Arabia. Set to redefine mountain
              tourism, Trojena will offer an unprecedented blend of adventure,
              relaxation, and luxury living at elevations ranging from 1,500 to
              2,600 meters above sea level.
            </p>
          </ScrollReveal>
          <ScrollReveal variant="slideUp" delay={0.2}>
            <p className="font-inter text-lg md:text-xl text-dark/80 leading-relaxed">
              MLX Consulting is proud to serve as the development management
              advisor for the branded residential component of this
              transformative project. Our role encompasses strategic oversight of
              the residential program, ensuring that world-class hospitality
              brand standards are maintained while delivering exceptional value
              for both the developer and future residents. The project is a
              cornerstone of Saudi Arabia&apos;s Vision 2030 and the host of the
              2029 Asian Winter Games.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="py-[80px] md:py-[100px] px-6 md:px-[50px]">
        <ScrollReveal variant="slideUp">
          <h3 className="font-mono text-xs uppercase tracking-wider text-accent-orange mb-10">
            Project Highlights
          </h3>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {highlights.map((highlight, index) => (
            <ScrollReveal
              key={highlight.title}
              variant="slideUp"
              delay={index * 0.1}
            >
              <div className="border-t border-dark/10 pt-6">
                <h4 className="font-inter text-lg font-semibold text-dark mb-2">
                  {highlight.title}
                </h4>
                <p className="font-inter text-sm text-dark/60 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  );
}
