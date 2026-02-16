"use client";

import { useState } from "react";
import Image from "next/image";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Tabs Data ─── */
const tabs = ["Story", "Mission", "Vision", "Values"] as const;
type Tab = (typeof tabs)[number];

/* ─── Milestones Data ─── */
const milestones = [
  {
    company: "TAVISTOCK DEVELOPMENT COMPANY",
    desc: "Led world-class consultants to deliver business and design master plan for $600m mixed-use development.",
  },
  {
    company: "WILSON ASSOCIATES",
    desc: "Principal-In-Charge of 100 member multi-disciplinary team for $4bn Presidential Palace Project.",
  },
  {
    company: "MORGANS HOTEL GROUP",
    desc: "Mobilized PM/CM teams to complete $250m of construction on multiple new build and renovation projects across the US.",
  },
  {
    company: "KUSHNER COMPANIES",
    desc: "Grew management and operations team from Zero to 65 in 3 months.",
  },
  {
    company: "WILSON ASSOCIATES",
    desc: "Generated over $35m of billable revenue in US, China and Middle East during 5 year plan.",
  },
  {
    company: "PICO PRO",
    desc: "Authored and presented development strategy to Government of Antigua with $60m+ direct economic impact.",
  },
];

/* ─── Brand Images Data ─── */
const brandImages = [
  { src: "/images/brand-1.webp", alt: "Brand partner 1" },
  { src: "/images/brand-2.png", alt: "Brand partner 2" },
  { src: "/images/brand-3.png", alt: "Brand partner 3" },
  { src: "/images/brand-4.jpg", alt: "Brand partner 4" },
  { src: "/images/brand-5.jpg", alt: "Brand partner 5" },
  { src: "/images/brand-6.png", alt: "Brand partner 6" },
  { src: "/images/brand-7.png", alt: "Brand partner 7" },
  { src: "/images/brand-8.jpg", alt: "Brand partner 8" },
  { src: "/images/brand-9.jpg", alt: "Brand partner 9" },
  { src: "/images/brand-10.webp", alt: "Brand partner 10" },
  { src: "/images/brand-11.jpeg", alt: "Brand partner 11" },
  { src: "/images/brand-12.jpeg", alt: "Brand partner 12" },
  { src: "/images/brand-13.webp", alt: "Brand partner 13" },
  { src: "/images/brand-14.png", alt: "Brand partner 14" },
  { src: "/images/brand-15.png", alt: "Brand partner 15" },
  { src: "/images/brand-16.webp", alt: "Brand partner 16" },
  { src: "/images/brand-17.png", alt: "Brand partner 17" },
  { src: "/images/brand-18.jpg", alt: "Brand partner 18" },
];

/* ─── Values Data ─── */
const values = [
  {
    num: "01",
    title: "Creativity leads the Way",
    desc: "We believe that creativity is the foundation of every great project. It drives innovation, inspires bold solutions, and transforms ordinary spaces into extraordinary experiences.",
  },
  {
    num: "02",
    title: "You dream, We deliver",
    desc: "Your vision is our mission. We take your aspirations and turn them into tangible realities, ensuring every detail reflects your unique goals and exceeds your expectations.",
  },
  {
    num: "03",
    title: "Client-first, Always",
    desc: "Our clients are at the heart of everything we do. We listen, collaborate, and adapt to ensure your needs are met at every stage of the journey.",
  },
];

/* ═══════════════════════════════════════════
   ABOUT PAGE
   ═══════════════════════════════════════════ */
export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<Tab>("Story");

  return (
    <>
      {/* ───── 1. HERO ───── */}
      <section className="relative w-full min-h-[70vh] overflow-hidden">
        <ScrollReveal variant="scaleIn" className="absolute inset-0">
          <Image
            src="/images/about-hero.jpg"
            alt="About MLX Consulting"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-dark/30" />
        </ScrollReveal>
        <div className="relative z-10 flex flex-col justify-center min-h-[70vh] pt-16 px-6 md:px-[50px]">
          <ScrollReveal variant="slideUp">
            <h1 className="max-w-4xl text-text-on-dark">
              Where every development enhances lives and nurtures the
              environment.
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* ───── 2. TABS SECTION ───── */}
      <section className="py-[80px] md:py-[100px] px-6 md:px-[50px] bg-cream">
        <ScrollReveal>
          {/* Tab Navigation */}
          <div className="flex gap-2 mb-10 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-full text-[15px] font-medium transition-all ${
                  activeTab === tab
                    ? "bg-dark text-white"
                    : "bg-cream-dark text-dark/60 hover:text-dark hover:bg-cream-dark/80"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {/* ── STORY TAB ── */}
            {activeTab === "Story" && (
              <motion.div
                key="story"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-dark/50 mb-4 block">
                      Our Story
                    </span>
                    <p className="text-[17px] md:text-[18px] leading-[25.2px] tracking-[-0.18px] font-medium text-dark">
                      Founded in October 2001, MLX was the vehicle for Michael
                      Linczyc to bring a decade of experience of diverse
                      multi-disciplinary hospitality, commercial and mixed-use
                      projects to support Starwood Hotels in the opening of their
                      iconic W Hotel in Times Square.
                    </p>
                    <p className="mt-6 text-[17px] md:text-[18px] leading-[25.2px] tracking-[-0.18px] font-medium text-dark/70">
                      With 30 years of leadership experience, Michael has
                      excelled over an extended period of time both as a Managing
                      Director and as the Transformation Catalyst for new
                      business methodologies, new ventures, and new opportunities
                      in large, geographically dispersed markets and regions.
                    </p>
                  </div>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                    <Image
                      src="/images/about-michael.jpg"
                      alt="Michael Linczyc, founder of MLX Consulting"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* ── MISSION TAB ── */}
            {activeTab === "Mission" && (
              <motion.div
                key="mission"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-dark/50 mb-4 block">
                      Our Mission
                    </span>
                    <h2 className="mb-6">
                      At MLX Consulting, we are dedicated to empowering owners,
                      investors, and developers of luxury hospitality,
                      residential, sports and entertainment venues and mixed-use
                      projects across the US, Asia, the Middle East.
                    </h2>
                  </div>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                    <Image
                      src="/images/about-team.jpg"
                      alt="MLX Consulting team collaboration"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* ── VISION TAB ── */}
            {activeTab === "Vision" && (
              <motion.div
                key="vision"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-dark/50 mb-4 block">
                      Our Vision
                    </span>
                    <h2 className="mb-6">
                      To be the most trusted partner for visionary developers
                      and investors, shaping the future of luxury hospitality
                      and mixed-use developments worldwide.
                    </h2>
                    <p className="text-[17px] md:text-[18px] leading-[25.2px] tracking-[-0.18px] font-medium text-dark/70">
                      We envision a world where every development enhances the
                      lives of those who experience it, while nurturing the
                      environment and communities that surround it.
                    </p>
                  </div>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                    <Image
                      src="/images/about-hero.jpg"
                      alt="MLX Consulting vision for the future"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* ── VALUES TAB ── */}
            {activeTab === "Values" && (
              <motion.div
                key="values"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-dark/50 mb-4 block">
                      Our Values
                    </span>
                    <div className="space-y-0">
                      {values.map((value) => (
                        <div
                          key={value.num}
                          className="border-b border-dark/10 py-6 first:pt-0"
                        >
                          <div className="flex items-start gap-4">
                            <span className="text-accent-orange font-mono text-sm font-bold tracking-widest mt-1">
                              {value.num}
                            </span>
                            <div>
                              <h3 className="mb-2">{value.title}</h3>
                              <p className="text-[16px] leading-[24px] tracking-[-0.32px] text-dark/70">
                                {value.desc}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                    <Image
                      src="/images/about-values.png"
                      alt="MLX Consulting core values"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </ScrollReveal>
      </section>

      {/* ───── 3. MILESTONES ───── */}
      <section className="py-[80px] md:py-[100px] px-6 md:px-[50px] bg-dark">
        <ScrollReveal>
          <span className="text-xs font-bold uppercase tracking-widest text-text-on-dark/50 mb-2 block">
            Milestones
          </span>
          <h2 className="text-text-on-dark mb-12 max-w-3xl">
            Here&apos;s a glimpse at the milestones we&apos;ve reached on our
            journey to designing spaces that inspire and endure.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {milestones.map((milestone, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="bg-dark-alt border border-text-on-dark/10 rounded-xl p-8 h-full flex flex-col justify-between">
                <p className="text-[17px] md:text-[18px] leading-[25.2px] tracking-[-0.18px] font-medium text-text-on-dark mb-8">
                  {milestone.desc}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-orange" />
                  <span className="text-xs font-bold uppercase tracking-widest text-text-on-dark/50">
                    {milestone.company}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ───── 4. BRANDS COLLABORATION ───── */}
      <section className="py-[80px] md:py-[100px] px-6 md:px-[50px] bg-cream">
        <ScrollReveal>
          <span className="text-xs font-bold uppercase tracking-widest text-dark/50 mb-2 block">
            Our Partners
          </span>
          <h2 className="mb-12 max-w-3xl">
            We&apos;ve had the privilege of collaborating with some incredible
            brands along the way.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
            {brandImages.map((brand, i) => (
              <div
                key={i}
                className="relative aspect-[3/2] rounded-lg overflow-hidden bg-white flex items-center justify-center p-4 border border-dark/5"
              >
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  fill
                  className="object-contain p-3"
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
