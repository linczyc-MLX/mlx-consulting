"use client";

import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import {
  ArrowLeft,
  ArrowRight,
  CaretRight,
  PlayCircle,
  FilePdf,
} from "@phosphor-icons/react";
import type { ServiceData } from "./page";

interface Props {
  service: ServiceData;
  nextService: { title: string; slug: string };
  prevService: { title: string; slug: string };
}

export default function ServiceDetailClient({
  service,
  nextService,
  prevService,
}: Props) {
  const hasMedia = service.mediaItems && service.mediaItems.length > 0;

  return (
    <main className="bg-cream min-h-screen">
      {/* ───── HERO ───── */}
      <section className="pt-[120px] md:pt-[150px] pb-[60px] md:pb-[80px] px-6 md:px-[50px]">
        <ScrollReveal variant="slideUp">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-dark/50 hover:text-accent-orange transition-colors text-sm font-medium mb-8"
          >
            <ArrowLeft size={16} />
            Back to Services
          </Link>

          <span className="block text-xs font-bold uppercase tracking-widest text-accent-orange mb-3">
            Our Services
          </span>
          <h1 className="max-w-3xl mb-4">{service.title}</h1>
          <p className="text-[18px] md:text-[20px] leading-[1.4] tracking-[-0.4px] text-dark/60 max-w-2xl">
            {service.tagline}
          </p>
        </ScrollReveal>
      </section>

      {/* ───── HERO IMAGE ───── */}
      {service.heroImage && (
        <section className="px-6 md:px-[50px] pb-[60px] md:pb-[80px]">
          <ScrollReveal variant="scaleIn">
            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
              <Image
                src={service.heroImage}
                alt={service.title}
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* ───── OVERVIEW ───── */}
      <section className="py-[60px] md:py-[80px] px-6 md:px-[50px]">
        <div className="max-w-4xl">
          <ScrollReveal variant="slideUp">
            <h3 className="font-mono text-xs uppercase tracking-wider text-accent-orange mb-6">
              Overview
            </h3>
          </ScrollReveal>
          <ScrollReveal variant="slideUp" delay={0.1}>
            <p className="text-[17px] md:text-[18px] leading-[28px] tracking-[-0.18px] text-dark/80 mb-6">
              {service.description}
            </p>
          </ScrollReveal>
          {service.extendedDescription && (
            <ScrollReveal variant="slideUp" delay={0.15}>
              <p className="text-[16px] leading-[26px] tracking-[-0.16px] text-dark/60">
                {service.extendedDescription}
              </p>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* ───── MEDIA SECTIONS (D360, N4S, Think) ───── */}
      {hasMedia && (
        <>
          {/* Explore Text */}
          {service.exploreText && (
            <section className="pb-[40px] px-6 md:px-[50px]">
              <ScrollReveal variant="slideUp">
                <p className="text-[17px] md:text-[18px] leading-[28px] tracking-[-0.18px] text-dark/70 max-w-3xl">
                  {service.exploreText}
                </p>
              </ScrollReveal>
            </section>
          )}

          {/* Media Items */}
          <section className="py-[40px] md:py-[60px] px-6 md:px-[50px]">
            <div className="flex flex-col gap-6">
              {service.mediaItems!.map((item, index) => (
                <ScrollReveal
                  key={item.title}
                  variant="slideUp"
                  delay={index * 0.05}
                >
                  <div className="relative rounded-xl overflow-hidden min-h-[400px] md:min-h-[500px] flex items-end">
                    {/* Background Image */}
                    <Image
                      src={item.backgroundImage}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/40 to-dark/10" />

                    {/* Content */}
                    <div className="relative z-10 w-full p-8 md:p-12">
                      <h3 className="text-text-on-dark text-[28px] md:text-[36px] leading-[1.15] tracking-[-0.72px] font-semibold mb-3">
                        {item.title}
                      </h3>
                      <p className="text-text-on-dark/70 text-[16px] md:text-[18px] leading-[1.4] tracking-[-0.18px] max-w-2xl mb-8">
                        {item.tagline}
                      </p>

                      {/* Action Buttons */}
                      {item.comingSoon ? (
                        <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-text-on-dark/60 font-medium text-[15px] px-5 py-3 rounded-lg border border-white/10">
                          Coming Soon
                        </span>
                      ) : (
                        <div className="flex flex-wrap gap-3">
                          {item.videoUrl && (
                            <a
                              href={item.videoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2.5 bg-accent-orange text-dark font-semibold text-[15px] px-5 py-3 rounded-lg hover:bg-accent-orange/90 transition-colors"
                            >
                              <PlayCircle size={22} weight="fill" />
                              Play
                            </a>
                          )}
                          {item.pdfUrl && (
                            <a
                              href={item.pdfUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm text-text-on-dark font-semibold text-[15px] px-5 py-3 rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
                            >
                              <FilePdf size={22} weight="fill" />
                              PDF
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>

          {/* Footer Section */}
          {service.footerText && (
            <section className="py-[60px] md:py-[80px] px-6 md:px-[50px]">
              <ScrollReveal>
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-4xl mx-auto">
                  {service.footerImage && (
                    <div className="relative w-[200px] h-[200px] md:w-[250px] md:h-[250px] flex-shrink-0">
                      <Image
                        src={service.footerImage}
                        alt={service.title}
                        fill
                        className="object-contain"
                        sizes="250px"
                      />
                    </div>
                  )}
                  <p className="text-[16px] leading-[26px] tracking-[-0.16px] text-dark/60 text-center md:text-left">
                    {service.footerText}
                  </p>
                </div>
              </ScrollReveal>
            </section>
          )}
        </>
      )}

      {/* ───── SUB-SERVICES (text-only pages) ───── */}
      {!hasMedia && (
        <section className="py-[60px] md:py-[80px] px-6 md:px-[50px]">
          <ScrollReveal variant="slideUp">
            <h3 className="font-mono text-xs uppercase tracking-wider text-accent-orange mb-10">
              What We Offer
            </h3>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.subServices.map((sub, index) => (
              <ScrollReveal
                key={sub.title}
                variant="slideUp"
                delay={index * 0.08}
              >
                <div className="bg-cream-dark rounded-xl p-6 h-full">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent-orange/10 flex items-center justify-center">
                      <CaretRight
                        size={14}
                        weight="bold"
                        className="text-accent-orange"
                      />
                    </span>
                    <h4 className="text-[18px] leading-[24px] tracking-[-0.4px] font-medium text-dark">
                      {sub.title}
                    </h4>
                  </div>
                  <p className="text-[15px] leading-[22px] tracking-[-0.15px] text-dark/60 pl-11">
                    {sub.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* ───── CTA ───── */}
      <section className="py-[60px] md:py-[80px] px-6 md:px-[50px]">
        <ScrollReveal>
          <div className="bg-dark rounded-xl p-10 md:p-16 text-center">
            <h2 className="text-text-on-dark mb-4">
              Ready to get started?
            </h2>
            <p className="text-text-on-dark/70 text-[16px] leading-[24px] tracking-[-0.32px] max-w-xl mx-auto mb-8">
              Let&apos;s discuss how our {service.title.toLowerCase()} expertise
              can help bring your vision to life.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-accent-orange text-dark font-medium text-[16px] px-6 py-3 rounded-md hover:bg-accent-orange/90 transition-colors"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* ───── PREV / NEXT NAVIGATION ───── */}
      <section className="py-[40px] md:py-[60px] px-6 md:px-[50px] border-t border-dark/5">
        <div className="flex items-center justify-between">
          <Link
            href={`/services/${prevService.slug}`}
            className="group flex items-center gap-3 text-dark/50 hover:text-dark transition-colors"
          >
            <ArrowLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-widest text-dark/30">
                Previous
              </span>
              <span className="text-[15px] font-medium">
                {prevService.title}
              </span>
            </div>
          </Link>
          <Link
            href={`/services/${nextService.slug}`}
            className="group flex items-center gap-3 text-dark/50 hover:text-dark transition-colors text-right"
          >
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-widest text-dark/30">
                Next
              </span>
              <span className="text-[15px] font-medium">
                {nextService.title}
              </span>
            </div>
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
