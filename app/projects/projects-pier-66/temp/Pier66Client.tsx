"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const metadata = [
  { label: "Client", value: "Tavistock Development Group" },
  { label: "Type", value: "Mixed-Use" },
  { label: "Year", value: "2018 (Opened 2025)" },
  { label: "Size", value: "35 Acres" },
  { label: "Location", value: "Fort Lauderdale Beach, Florida USA" },
  { label: "Services", value: "Development Management, Entitlements & Approvals" },
  { label: "Status", value: "Complete" },
];

const galleryImages = [
  { src: "/images/pier66-2.jpg", alt: "Pier Sixty-Six aerial view" },
  { src: "/images/pier66-3.webp", alt: "Pier Sixty-Six marina" },
  { src: "/images/pier66-5.jpg", alt: "Pier Sixty-Six resort pool" },
  { src: "/images/pier66-6.jpg", alt: "Pier Sixty-Six waterfront" },
  { src: "/images/pier66-8.jpg", alt: "Pier Sixty-Six hotel exterior" },
  { src: "/images/pier66-9.jpg", alt: "Pier Sixty-Six dining" },
  { src: "/images/pier66-12.jpg", alt: "Pier Sixty-Six yacht slips" },
  { src: "/images/pier66-14.jpg", alt: "Pier Sixty-Six sunset view" },
];

const amenities = [
  {
    title: "Marina",
    description:
      "~30 acres, ~200 yacht slips with fuel, docking, maintenance",
  },
  {
    title: "Hotel",
    description:
      "Luxury rooms and suites, resort-style pools, spa and fitness",
  },
  {
    title: "Residential",
    description: "Luxury condominiums and residences",
  },
  {
    title: "Dining",
    description: "Upscale restaurants and bars",
  },
  {
    title: "Events",
    description: "Pier Sixty-Six Ballroom",
  },
];

export default function PierSixtySixPage() {
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
              src="/images/pier66-hero.jpg"
              alt="Pier Sixty-Six hero"
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
                Pier Sixty-Six
              </h1>
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
            <p className="font-inter text-lg md:text-xl text-dark/80 leading-relaxed">
              The Tavistock Group invests globally, with a focus on creating
              long-term value across diverse markets. They operate under a
              philosophy of generational investment, aiming for maximum impact
              over time. The project aimed to create a landmark development that
              stands out in the urban landscape and enhances the waterfront
              appeal of Fort Lauderdale as a world class super yacht destination
              but also provides a diverse range of living options and amenities
              for both residents and visitors.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Key Amenities */}
      <section className="py-[80px] md:py-[100px] px-6 md:px-[50px]">
        <ScrollReveal variant="slideUp">
          <h3 className="font-mono text-xs uppercase tracking-wider text-accent-orange mb-10">
            Key Amenities
          </h3>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <ScrollReveal key={amenity.title} variant="slideUp" delay={index * 0.1}>
              <div className="border-t border-dark/10 pt-6">
                <h4 className="font-inter text-lg font-semibold text-dark mb-2">
                  {amenity.title}
                </h4>
                <p className="font-inter text-sm text-dark/60 leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-[80px] md:py-[100px] px-6 md:px-[50px]">
        <ScrollReveal variant="slideUp">
          <h3 className="font-mono text-xs uppercase tracking-wider text-accent-orange mb-10">
            Gallery
          </h3>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <ScrollReveal key={image.src} variant="fadeIn" delay={index * 0.1}>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  );
}
