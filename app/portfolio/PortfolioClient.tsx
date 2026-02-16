"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ArrowRight, Images } from "@phosphor-icons/react";
import { categories, portfolioVideos } from "./portfolio-data";

/* ─── Image Mosaic: 1 large left + 3 smaller right ─── */
function ImageMosaic({
  images,
  label,
}: {
  images: string[];
  label: string;
}) {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-1 w-full h-full">
      {/* Large image: left column, spans both rows */}
      <div className="col-span-1 row-span-2 relative overflow-hidden">
        <Image
          src={images[0]}
          alt={`${label} 1`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 33vw, 16vw"
        />
      </div>
      {/* Top-right pair */}
      <div className="relative overflow-hidden">
        <Image
          src={images[1]}
          alt={`${label} 2`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 33vw, 16vw"
        />
      </div>
      <div className="relative overflow-hidden">
        <Image
          src={images[2]}
          alt={`${label} 3`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 33vw, 16vw"
        />
      </div>
      {/* Bottom-right: spans 2 columns */}
      <div className="col-span-2 relative overflow-hidden">
        <Image
          src={images[3]}
          alt={`${label} 4`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 66vw, 33vw"
        />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   PORTFOLIO PAGE
   ═══════════════════════════════════════════ */
export default function PortfolioPage() {
  return (
    <>
      {/* ───── INTRO ───── */}
      <section className="pt-[140px] pb-[40px] px-6 md:px-[50px] bg-cream">
        <ScrollReveal variant="slideUp">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-dark/10 rounded-full text-xs font-bold uppercase tracking-widest text-dark/60 mb-6">
              <Images size={14} weight="bold" />
              OUR GALLERY
            </span>
            <h2 className="text-[28px] md:text-[40px] leading-[1.2] tracking-[-1.5px] font-medium text-dark">
              See the bold ideas, innovative concepts, and completed projects
              that keep us inspired every day.
            </h2>
          </div>
        </ScrollReveal>
      </section>

      {/* ───── ALL CATEGORIES — 2-Column Grid ───── */}
      <section className="py-[40px] md:py-[60px] px-4 md:px-[30px] bg-cream">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/portfolio/${cat.slug}`}
                className="group block rounded-2xl overflow-hidden bg-white border border-dark/5 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Category Title */}
                <div className="px-5 pt-4 pb-3">
                  <h3 className="text-[16px] font-medium text-dark">
                    {cat.label}
                  </h3>
                </div>

                {/* Image Mosaic with hover overlay */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <ImageMosaic images={cat.previewImages} label={cat.label} />

                  {/* Hover overlay with "Open Album" button */}
                  <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-2 bg-accent-orange text-white text-[14px] font-medium px-5 py-2.5 rounded-full shadow-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Open Album
                      <ArrowRight size={16} weight="bold" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ───── VIDEO GALLERY ───── */}
      <section className="py-[60px] md:py-[80px] px-6 md:px-[50px] bg-cream">
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
                className="relative aspect-video rounded-xl overflow-hidden bg-dark"
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
