"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "@phosphor-icons/react";
import { categories, portfolioVideos } from "./portfolio-data";

/* ═══════════════════════════════════════════
   PORTFOLIO PAGE
   ═══════════════════════════════════════════ */
export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState(0);
  const active = categories[activeTab];

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
            <h1 className="max-w-3xl">Portfolio</h1>
          </ScrollReveal>
        </div>
      </section>

      {/* ───── INTRO TEXT ───── */}
      <section className="py-[80px] md:py-[100px] px-6 md:px-[50px] bg-cream">
        <ScrollReveal>
          <div className="max-w-4xl">
            <h1 className="text-[28px] md:text-[36px] leading-[1.2] tracking-[-1.5px] font-medium text-dark">
              See the bold ideas, innovative concepts, and completed projects
              that keep us inspired every day.
            </h1>
          </div>
        </ScrollReveal>
      </section>

      {/* ───── CATEGORY TABS + PORTFOLIO GRID ───── */}
      <section className="py-[80px] md:py-[100px] px-6 md:px-[50px] bg-cream">
        <ScrollReveal>
          {/* Tabs */}
          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((cat, i) => (
              <button
                key={cat.slug}
                onClick={() => setActiveTab(i)}
                className={`px-4 py-2 rounded-full text-[14px] font-medium transition-all duration-200 ${
                  activeTab === i
                    ? "bg-dark text-white"
                    : "bg-dark/5 text-dark/60 hover:bg-dark/10 hover:text-dark"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* 2×2 Image Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={`/portfolio/${active.slug}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {active.previewImages.map((src, i) => (
                    <div
                      key={i}
                      className="relative aspect-[4/3] rounded-xl overflow-hidden group"
                    >
                      <Image
                        src={src}
                        alt={`${active.label} portfolio ${i + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/10 transition-colors duration-300" />
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-[15px] text-dark/50 font-medium">
                    {active.label}
                  </p>
                  <span className="text-accent-orange text-[14px] font-medium">
                    View Album &rarr;
                  </span>
                </div>
              </Link>
            </motion.div>
          </AnimatePresence>
        </ScrollReveal>
      </section>

      {/* ───── VIDEO GALLERY ───── */}
      <section className="py-[80px] md:py-[100px] px-6 md:px-[50px] bg-cream">
        <ScrollReveal>
          <span className="text-xs font-bold uppercase tracking-widest text-dark/50 mb-2 block">
            Video Gallery
          </span>
          <h2 className="mb-4 max-w-3xl">
            Why imagine when you can watch? See our creative masterpieces come
            to life in these awesome videos. Press play and get inspired!
          </h2>
          <Link
            href="/videos"
            className="inline-block mb-10 text-accent-orange font-medium text-[15px] hover:underline"
          >
            Watch All Videos &rarr;
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioVideos.map((video, i) => (
              <div
                key={i}
                className="relative aspect-video rounded-xl overflow-hidden bg-dark group"
              >
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
