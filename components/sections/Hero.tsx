"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";

interface HeroProps {
  headline: string | string[];
  backgroundImage?: string;
}

/**
 * Full-bleed hero section with background image and overlay headline.
 * Matches the original site's hero pattern: full viewport-height image
 * with large H1 text overlaid, appearing via scale-in animation.
 */
export function Hero({ headline, backgroundImage }: HeroProps) {
  const lines = Array.isArray(headline) ? headline : [headline];

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background image */}
      <ScrollReveal variant="scaleIn" className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: backgroundImage
              ? `url(${backgroundImage})`
              : "linear-gradient(135deg, #f7f2e9 0%, #fffbf5 100%)",
          }}
        />
      </ScrollReveal>

      {/* Content overlay */}
      <div className="relative z-10 pt-[170px] px-[50px] pb-20">
        <ScrollReveal variant="slideUp">
          <h1 className="max-w-3xl">
            {lines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>
        </ScrollReveal>
      </div>
    </section>
  );
}
