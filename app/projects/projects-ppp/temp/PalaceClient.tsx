"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const metadata = [
  { label: "Client", value: "Ministry of Presidential Affairs (MOPA)" },
  { label: "Type", value: "Government" },
  { label: "Year", value: "2015 (Completion)" },
  { label: "Size", value: "50,000+ sqm" },
  { label: "Location", value: "Abu Dhabi, United Arab Emirates" },
  { label: "Services", value: "Interior Architect, Interior Design and FF&E" },
  { label: "Status", value: "Complete" },
];

const galleryImages = [
  { src: "/images/palace-1.png", alt: "Presidential Palace grand hall" },
  { src: "/images/palace-2.png", alt: "Presidential Palace interior design" },
  { src: "/images/palace-4.png", alt: "Presidential Palace corridor" },
  { src: "/images/palace-6.png", alt: "Presidential Palace ceremonial room" },
  { src: "/images/palace-8.png", alt: "Presidential Palace ornamental details" },
  { src: "/images/palace-10.png", alt: "Presidential Palace reception area" },
  { src: "/images/palace-12.png", alt: "Presidential Palace exterior view" },
  { src: "/images/palace-13.png", alt: "Presidential Palace aerial perspective" },
];

const wings = [
  { name: "H.H. the President wing", size: "30,797 sq.m." },
  { name: "H.H. the Vice President wing", size: "23,710 sq.m." },
  { name: "H.H. the Crown Prince wing", size: "38,710 sq.m." },
];

export default function PresidentialPalacePage() {
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
              src="/images/palace-hero.jpg"
              alt="Presidential Palace Abu Dhabi hero"
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
                Presidential Palace Project
              </h1>
              <p className="font-inter text-xl text-dark/60 mt-4">
                CP and VP Wings
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
              The design allows for traditional and modern design to exist in
              harmony and to ultimately be a source of pride for all people of
              the United Arab Emirates. The site of the new Presidential Palace,
              located on Ras Al Akhdar peninsula adjacent to the Emirates Palace
              hotel, will encompass approximately 150 hectares including the
              palace complex and the required ancillary buildings.
            </p>
          </ScrollReveal>
          <ScrollReveal variant="slideUp" delay={0.2}>
            <p className="font-inter text-lg md:text-xl text-dark/80 leading-relaxed">
              The Palace complex will also include three palatial wings:
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Palatial Wings */}
      <section className="py-[80px] md:py-[100px] px-6 md:px-[50px]">
        <ScrollReveal variant="slideUp">
          <h3 className="font-mono text-xs uppercase tracking-wider text-accent-orange mb-10">
            Palatial Wings
          </h3>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {wings.map((wing, index) => (
            <ScrollReveal key={wing.name} variant="slideUp" delay={index * 0.1}>
              <div className="border-t border-dark/10 pt-6">
                <h4 className="font-inter text-lg font-semibold text-dark mb-2">
                  {wing.name}
                </h4>
                <p className="font-geist text-2xl md:text-3xl font-semibold text-accent-orange">
                  {wing.size}
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
