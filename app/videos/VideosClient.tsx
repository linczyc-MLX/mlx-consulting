"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Play, X } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Video Data ─── */
const videos = [
  {
    title: "Executive Development Officer",
    description:
      "What if the single smartest hire you make on a mixed-use project isn\u2019t another PM \u2014 it\u2019s an Executive Development Officer?",
    brand: "MLX Consulting",
    color: "bg-dark",
    embedUrl: "https://www.youtube.com/embed/RYne9amFHh4",
  },
  {
    title: "Journey to New Heights",
    description:
      "The Trojena project is an ambitious development initiative located in the NEOM region of Saudi Arabia. It aims to create a year-round mountain resort that blends luxury living with nature and innovative technology.",
    brand: "TROJENA",
    color: "bg-[#2c3530]",
    embedUrl: "https://www.youtube.com/embed/egyljEUWyxA",
  },
  {
    title: "QE2 Interiors Reimagined",
    description:
      "Reimagining the interiors of the iconic Queen Elizabeth 2 as it relocates to its permanent home in Dubai.",
    brand: "Wilson Associates",
    color: "bg-[#3a3528]",
    embedUrl: "https://www.youtube.com/embed/rTWB-zofvgc",
  },
  {
    title: "Half Moon Bay",
    description:
      "Half Moon Bay offers guests and residents a new paradigm in ultra-luxury Caribbean hospitality. With 3,200 feet of white coral beachfront, the 47-key Rosewood Hotel and Residences will rest lightly on the land.",
    brand: "Pico Pro",
    color: "bg-dark-alt",
    embedUrl: "https://www.youtube.com/embed/00c2M5b0H3M",
  },
  {
    title: "Branded Luxury Residential Development",
    description:
      "Strategic investment intelligence for developers and investors evaluating branded residential opportunities across GCC markets.",
    brand: "D-VELOP360",
    color: "bg-teal-dark",
    embedUrl: "https://www.youtube.com/embed/WikdgoFiDQ4",
  },
  {
    title: "Inspiring the next generation of creators",
    description:
      "Hiring, managing and mentoring a team of architects, development and project management professionals from a diverse range of backgrounds and experience was an extraordinary privilege.",
    brand: "Trojena The Mountains of NEOM",
    color: "bg-[#3a3528]",
    embedUrl: "https://www.youtube.com/embed/2WckYLNIlqI",
  },
  {
    title: "From Buyer to Resident",
    description:
      "Guiding the ultra high net worth individual, their families and advisors through the complex journey of designing a home based on their passions and lifestyles through the delivery of a white glove experience from ideation to occupancy.",
    brand: "The Universe is Expanding",
    color: "bg-[#2c3530]",
    embedUrl: "https://www.youtube.com/embed/cvLlxwqevi0",
  },
  {
    title: "Independent Advisory Services",
    description:
      "Not4Sale is your trusted advisor for the owners, developers and investors looking to create luxury residential residences that align both with the client\u2019s vision and lifestyle and the market for future buyers.",
    brand: "Not4Sale",
    color: "bg-dark",
    embedUrl: "https://www.youtube.com/embed/IphIHp6SHr0",
  },
  {
    title: "It\u2019s vibrant, collaborative, and inspiring",
    description:
      "Pier Sixty-Six with its eye-catching midcentury modern design, has been one of Fort Lauderdale\u2019s most beloved hospitality destinations for decades. After its extensive makeover, the hospitality mega-complex now boasts a new hotel tower, 325 rooms, 88 private residences, and 12 restaurants.",
    brand: "Pier Sixty-Six",
    color: "bg-dark-alt",
    embedUrl: "https://www.youtube.com/embed/M2ocLsEwqNI",
  },
  {
    title: "WET DESIGN",
    description:
      "WET Design is the global leader in dramatic, one of a kind water features. From Las Vegas to Dubai, their installations have captivated millions of visitors. MLX was retained by the CEO to develop and expand their business development capabilities.",
    brand: "WET DESIGN",
    color: "bg-teal-dark",
    embedUrl: "https://www.youtube.com/embed/CnuLwC6fb9Q",
  },
  {
    title: "Site Investigation",
    description:
      "With remote and dramatic site locations, Trojena offers tremendous challenges to mobilize for the Early Works Packages. The primary activity is Site Investigation \u2014 Can we build here? What are the soil conditions?",
    brand: "Trojena",
    color: "bg-[#3a3528]",
    embedUrl: "https://www.youtube.com/embed/NY2ov2ErS-c",
  },
];

/* ─── Video Modal ─── */
function VideoModal({
  video,
  onClose,
}: {
  video: (typeof videos)[number];
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark/90 backdrop-blur-sm p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: "spring", bounce: 0, duration: 0.3 }}
        className="relative w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
          aria-label="Close video"
        >
          <X size={28} weight="bold" />
        </button>

        {/* Video embed area */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-dark-near">
          {video.embedUrl ? (
            <iframe
              src={video.embedUrl}
              title={video.title}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white/50">
              <Play size={64} weight="fill" className="text-accent-orange mb-4" />
              <p className="text-[16px] font-medium mb-1">{video.title}</p>
              <p className="text-[13px] text-white/30">
                Video coming soon
              </p>
            </div>
          )}
        </div>

        {/* Video info below player */}
        <div className="mt-4">
          <span className="text-[12px] font-bold uppercase tracking-widest text-accent-orange">
            {video.brand}
          </span>
          <h3 className="text-white text-[18px] font-medium mt-1">
            {video.title}
          </h3>
          {video.description && (
            <p className="text-white/50 text-[14px] mt-1">{video.description}</p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function VideosPage() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  return (
    <>
      {/* ───── HERO ───── */}
      <section className="relative w-full min-h-screen overflow-hidden">
        <ScrollReveal variant="scaleIn" className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cream-dark to-cream" />
        </ScrollReveal>

        <div className="relative z-10 pt-[170px] px-6 md:px-[50px] pb-20">
          <ScrollReveal variant="slideUp">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-dark/10 rounded-full text-xs font-bold uppercase tracking-widest text-dark/60 mb-6">
              VIDEOS
            </span>
            <h1 className="max-w-4xl">
              Our greatest achievements aren&apos;t just our projects&mdash;they&apos;re
              the relationships and trust we&apos;ve built along the way.
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* ───── VIDEO GRID ───── */}
      <section className="py-[80px] md:py-[100px] px-6 md:px-[50px] bg-cream">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, i) => (
              <div
                key={i}
                className="group rounded-xl overflow-hidden bg-white border border-dark/5 transition-shadow hover:shadow-lg cursor-pointer"
                onClick={() => setActiveVideo(i)}
              >
                {/* Thumbnail with play button */}
                <div
                  className={`relative aspect-video ${video.color} flex items-center justify-center`}
                >
                  {/* Decorative pattern lines */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/4 left-0 right-0 h-px bg-white/30" />
                    <div className="absolute top-2/4 left-0 right-0 h-px bg-white/30" />
                    <div className="absolute top-3/4 left-0 right-0 h-px bg-white/30" />
                  </div>

                  {/* Play button */}
                  <div className="w-16 h-16 rounded-full bg-accent-orange flex items-center justify-center transition-transform group-hover:scale-110">
                    <Play size={28} weight="fill" className="text-white ml-1" />
                  </div>
                </div>

                {/* Card content */}
                <div className="p-5">
                  <h3 className="text-[18px] leading-[24px] tracking-[-0.4px] font-medium mb-2 line-clamp-2">
                    {video.title}
                  </h3>
                  {video.description && (
                    <p className="text-[14px] leading-[20px] text-dark/60 mb-3 line-clamp-3">
                      {video.description}
                    </p>
                  )}
                  <span className="text-[12px] font-bold uppercase tracking-widest text-accent-orange">
                    {video.brand}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ───── VIDEO MODAL ───── */}
      <AnimatePresence>
        {activeVideo !== null && (
          <VideoModal
            video={videos[activeVideo]}
            onClose={() => setActiveVideo(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
