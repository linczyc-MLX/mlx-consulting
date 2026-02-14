import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

/**
 * Homepage — mlxconsulting.com
 *
 * Sections (top to bottom):
 * 1. Hero — full-bleed cityscape + headline
 * 2. Stats Bar — 4 counter cards
 * 3. Value Quote — mission text with multi-tone emphasis
 * 4. Differentiators — 4 numbered cards (001–004)
 * 5. How We Work — 4-step tabbed process
 * 6. Gallery — project photo showcase
 * 7. Services Overview — service card grid
 * 8. FAQs — accordion + contact form
 */
export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero
        headline={[
          "A passion to deliver",
          "authentic, remarkable,",
          "sustainable and profitable",
          "environments.",
        ]}
        // TODO: Replace with actual hero image from /public/images/
        backgroundImage="/images/hero-homepage.jpg"
      />

      {/* 2. Stats Bar */}
      <StatsBar />

      {/* 3. Value Quote */}
      <section id="value-quote" className="py-[100px] px-[50px]">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[36px] leading-[39.6px] tracking-[-2px] font-medium">
              <span className="text-dark/50">
                Welcome to a world of creativity, where every project{" "}
              </span>
              <span className="text-dark">starts with a dream </span>
              <span className="text-dark/50">and ends with a </span>
              <span className="text-dark">space that inspires.</span>
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* 4. About / Mission Text */}
      <section className="py-[100px] px-[50px] bg-cream">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="max-w-lg">
              <p className="text-[18px] leading-[25.2px] tracking-[-0.18px] font-medium text-dark">
                {/* TODO: Add full mission text from original site */}
                Our journey began 25 years ago, with a simple idea: to assemble
                the most creative, innovative and visionary team of architects,
                designers, storytellers, contractors and vendors to deliver
                authentic, remarkable, sustainable and profitable environments.
              </p>
            </div>
            <div className="bg-cream-dark rounded-xl aspect-[4/3]">
              {/* TODO: Add section image */}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 5. Our Differences */}
      <section className="py-[100px] px-[50px]">
        <ScrollReveal>
          <div className="max-w-4xl ml-auto">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-bold uppercase tracking-wide text-dark/50">
                Our Differences
              </span>
            </div>
            <h2 className="mb-10">
              what makes us different (and totally awesome)
            </h2>

            {/* Differentiator cards — accordion style */}
            <div className="space-y-4">
              {[
                {
                  num: "001",
                  title: "Designs with heart and soul",
                  desc: "We don't just design buildings; we craft spaces where life happens, memories are made, and dreams come true. Every project is as unique as the people living in it.",
                },
                {
                  num: "002",
                  title: "Expert guidance",
                  desc: "Placeholder — add original text",
                },
                {
                  num: "003",
                  title: "Smooth and stress-free process",
                  desc: "Placeholder — add original text",
                },
                {
                  num: "004",
                  title: "Save time and stay on budget",
                  desc: "Placeholder — add original text",
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="border-b border-dark/10 pb-4"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[20px] font-medium text-dark/30">
                      {item.num}
                    </span>
                    <h3>{item.title}</h3>
                  </div>
                  {/* TODO: Make this an interactive accordion with expand/collapse */}
                  <p className="mt-3 text-[16px] leading-[24px] tracking-[-0.32px] text-dark/70 pl-14">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* TODO: Section 6 — How We Work (tabbed process steps) */}
      {/* TODO: Section 7 — Gallery */}
      {/* TODO: Section 8 — Services Overview */}
      {/* TODO: Section 9 — FAQs + Contact Form */}
    </>
  );
}
