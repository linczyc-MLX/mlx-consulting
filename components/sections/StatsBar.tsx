"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";

const stats = [
  { number: "25+", label: "Years of creating spaces" },
  { number: "90+", label: "Amazing projects brought to life" },
  { number: "40+", label: "Happy clients, happy spaces" },
  { number: "10+", label: "Designs that earned awards" },
];

/**
 * Stats counter bar — 4 cards in a row, each with a large number
 * and label. Uses Geist font for numbers. Appears below the hero.
 */
export function StatsBar() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <ScrollReveal key={i} variant="slideUp" delay={i * 0.1}>
            <div className="relative bg-dark-alt text-text-on-dark p-8 overflow-hidden group">
              {/* TODO: Add background image per card */}
              <p className="font-[var(--font-geist)] text-[60px] leading-[66px] tracking-[-2px] font-normal mb-2">
                {stat.number}
              </p>
              <p className="text-sm opacity-70">{stat.label}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
