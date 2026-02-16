"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ArrowLeft, BookOpen, Play } from "@phosphor-icons/react";
import { categories, PortfolioCategory } from "../portfolio-data";

/* ═══════════════════════════════════════════
   ALBUM PAGE
   ═══════════════════════════════════════════ */
export default function AlbumClient({ slug }: { slug: string }) {
  const category = categories.find((c) => c.slug === slug)!;
  const otherAlbums = categories.filter((c) => c.slug !== slug);

  return (
    <>
      {/* ───── HEADER ───── */}
      <section className="pt-[170px] pb-[60px] px-6 md:px-[50px] bg-cream">
        <ScrollReveal variant="slideUp">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-[14px] text-dark/50 hover:text-dark transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>

          <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-dark/10 rounded-full text-xs font-bold uppercase tracking-widest text-dark/60 mb-6">
            Album
          </span>
          <h1 className="max-w-3xl mb-6">{category.label}</h1>
          <p className="max-w-2xl text-[18px] leading-[28px] text-dark/70">
            {category.description}
          </p>
        </ScrollReveal>
      </section>

      {/* ───── IMAGE GALLERY ───── */}
      <section className="py-[40px] px-6 md:px-[50px] bg-cream">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {category.previewImages.map((src, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] rounded-xl overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`${category.label} ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ───── PROJECTS / FLIPBOOKS ───── */}
      {category.projects.length > 0 && (
        <section className="py-[60px] md:py-[80px] px-6 md:px-[50px] bg-cream">
          <ScrollReveal>
            <h2 className="text-[24px] md:text-[28px] font-medium tracking-[-0.5px] mb-8">
              Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.projects.map((project, i) => (
                <a
                  key={i}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-5 rounded-xl bg-white border border-dark/5 hover:border-accent-orange/30 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-dark/5 group-hover:bg-accent-orange/10 flex items-center justify-center transition-colors">
                    {project.type === "video" ? (
                      <Play
                        size={20}
                        weight="fill"
                        className="text-dark/40 group-hover:text-accent-orange transition-colors"
                      />
                    ) : (
                      <BookOpen
                        size={20}
                        weight="duotone"
                        className="text-dark/40 group-hover:text-accent-orange transition-colors"
                      />
                    )}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[15px] font-medium text-dark truncate group-hover:text-accent-orange transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[12px] text-dark/40 uppercase tracking-wider font-medium">
                      {project.type === "video" ? "Watch Video" : "View Flipbook"}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* ───── OTHER ALBUMS ───── */}
      <section className="py-[60px] md:py-[80px] px-6 md:px-[50px] bg-cream border-t border-dark/5">
        <ScrollReveal>
          <h2 className="text-[24px] md:text-[28px] font-medium tracking-[-0.5px] mb-8">
            Other Albums
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {otherAlbums.map((cat) => (
              <Link
                key={cat.slug}
                href={`/portfolio/${cat.slug}`}
                className="group"
              >
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-2">
                  <Image
                    src={cat.previewImages[0]}
                    alt={cat.label}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 14vw"
                  />
                  <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/10 transition-colors" />
                </div>
                <p className="text-[12px] font-medium text-dark/60 group-hover:text-dark transition-colors truncate">
                  {cat.label}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/portfolio"
              className="text-accent-orange font-medium text-[15px] hover:underline"
            >
              &larr; Explore All Albums
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
