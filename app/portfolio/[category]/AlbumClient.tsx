"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ArrowLeft, BookOpen, Play, FolderOpen } from "@phosphor-icons/react";
import { categories } from "../portfolio-data";

/* ═══════════════════════════════════════════
   ALBUM PAGE
   ═══════════════════════════════════════════ */
export default function AlbumClient({ slug }: { slug: string }) {
  const category = categories.find((c) => c.slug === slug)!;
  const otherAlbums = categories.filter((c) => c.slug !== slug);

  return (
    <>
      {/* ───── HEADER: Title left, Description right ───── */}
      <section className="pt-[140px] pb-[40px] px-6 md:px-[50px] bg-cream">
        <ScrollReveal variant="slideUp">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-[14px] text-dark/50 hover:text-dark transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-dark/10 rounded-full text-xs font-bold uppercase tracking-widest text-dark/60 mb-4">
                <FolderOpen size={14} weight="bold" />
                Album
              </span>
              <h1>{category.label}</h1>
            </div>
            <div className="md:pt-10">
              <p className="text-[16px] leading-[26px] text-dark/70">
                {category.description}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ───── 2-COL IMAGE GRID (with flipbook links if available) ───── */}
      <section className="py-[20px] md:py-[40px] px-6 md:px-[50px] bg-cream">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {category.projects.length > 0
              ? category.projects.map((project, i) => (
                  <a
                    key={i}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block relative rounded-xl overflow-hidden"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={
                          project.image ||
                          category.previewImages[
                            i % category.previewImages.length
                          ]
                        }
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/10 to-transparent" />

                      {/* Project title at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded bg-white/15 flex items-center justify-center">
                            {project.type === "video" ? (
                              <Play
                                size={14}
                                weight="fill"
                                className="text-white"
                              />
                            ) : (
                              <BookOpen
                                size={14}
                                weight="duotone"
                                className="text-white"
                              />
                            )}
                          </div>
                          <div>
                            <h3 className="text-white text-[15px] md:text-[17px] font-medium leading-tight">
                              {project.title}
                            </h3>
                            <p className="text-white/50 text-[11px] uppercase tracking-wider font-medium">
                              {project.type === "video"
                                ? "Watch Video"
                                : "View Flipbook"}
                            </p>
                          </div>
                        </div>
                        <span className="hidden md:inline-flex items-center gap-2 text-accent-orange text-[13px] font-medium opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                          Open &rarr;
                        </span>
                      </div>
                    </div>
                  </a>
                ))
              : category.previewImages.map((src, i) => (
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

      {/* ───── OTHER ALBUMS ───── */}
      <section className="py-[60px] md:py-[80px] px-6 md:px-[50px] bg-cream border-t border-dark/5 mt-10">
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
