"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { MapPin } from "@phosphor-icons/react";

export default function ContactUsPage() {
  return (
    <>
      {/* ───── HERO / MAP SECTION ───── */}
      <section className="relative w-full min-h-screen overflow-hidden bg-cream">
        {/* Header spacer */}
        <div className="pt-[120px] px-6 md:px-[50px] pb-6">
          <ScrollReveal variant="slideUp">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-dark/10 rounded-full text-xs font-bold uppercase tracking-widest text-dark/60 mb-4">
              <MapPin size={14} />
              CONTACT US
            </span>
            <h1 className="max-w-3xl">Get in touch</h1>
          </ScrollReveal>
        </div>

        {/* Map placeholder */}
        <ScrollReveal variant="fadeIn">
          <div className="mx-6 md:mx-[50px] mb-[80px] md:mb-[100px]">
            <div className="relative w-full rounded-xl overflow-hidden bg-[#e8e4de] border border-dark/5" style={{ height: "calc(100vh - 280px)", minHeight: "400px" }}>
              {/* Map placeholder content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-dark/30">
                {/* Grid lines to suggest a map */}
                <div className="absolute inset-0 opacity-[0.08]">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={`h-${i}`}
                      className="absolute left-0 right-0 h-px bg-dark"
                      style={{ top: `${(i + 1) * 11.1}%` }}
                    />
                  ))}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={`v-${i}`}
                      className="absolute top-0 bottom-0 w-px bg-dark"
                      style={{ left: `${(i + 1) * 11.1}%` }}
                    />
                  ))}
                </div>

                {/* Pin icon */}
                <MapPin size={48} weight="fill" className="text-accent-orange mb-3" />
                <p className="text-[15px] font-medium text-dark/40">
                  9 West 31st Street, Suite 26F
                </p>
                <p className="text-[14px] text-dark/30">
                  New York, NY 10001
                </p>
                <p className="text-[12px] text-dark/20 mt-4">
                  Google Maps embed area
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
