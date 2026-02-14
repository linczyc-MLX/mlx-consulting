"use client";

import { useState } from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import { CaretDown, CaretUp } from "@phosphor-icons/react";

/* ─── Service Card Data ─── */
interface ServiceCard {
  title: string;
  href: string;
  subItems: string[];
  description: string;
}

const serviceCards: ServiceCard[] = [
  {
    title: "D-VELOP360",
    href: "/services/d-velop360",
    subItems: [
      "The Role of THE EDO",
      "Branded Residential",
      "Condominium Developments",
      "Hospitality Mixed-Use",
    ],
    description:
      "A comprehensive, end-to-end development oversight model that covers every phase of real estate development, from vision to delivery. D-VELOP360 ensures alignment across all disciplines, stakeholders, and timelines to maximize value and minimize risk.",
  },
  {
    title: "Consulting Services",
    href: "/services/consulting-services",
    subItems: [
      "Code Consultation",
      "Design & Concept Review",
      "Technical Advisory Services",
      "Cost Estimation & Budgeting",
      "Project Feasibility Consulting",
    ],
    description:
      "Expert guidance at every step. Whether you need a second opinion on building codes, a fresh eye on design concepts, or a detailed cost analysis, our consulting team brings decades of experience to the table.",
  },
  {
    title: "Master Planning & Design",
    href: "/services/master-planning-design",
    subItems: [
      "Conceptual Visualization Services",
      "Zoning and Land Use Analysis",
      "Sustainable Design Consulting",
      "Public Space Design",
      "Adaptive Reuse Strategies",
      "Landscape and Hardscape Design",
      "Interior Space Planning",
    ],
    description:
      "From the big picture to the fine details, our master planning and design team creates cohesive visions that balance aesthetics, functionality, and sustainability to shape remarkable environments.",
  },
  {
    title: "Development Management",
    href: "/services/architectural-design",
    subItems: [
      "Pre-Development Feasibility",
      "Site Due Diligence",
      "Financial Structuring Strategies",
      "Community Impact Studies",
      "Development Timeline Optimization",
      "Value Engineering",
      "Post-Completion Analysis",
    ],
    description:
      "We guide your project from concept to completion with strategic oversight, ensuring every decision aligns with your financial goals, timeline, and quality standards.",
  },
  {
    title: "Project & Construction Management",
    href: "/services/project-management",
    subItems: [
      "Construction Scheduling & Phasing",
      "Procurement Management",
      "Quality Assurance Programs",
      "Safety Training and Implementation",
      "Site Condition Monitoring",
      "Final Walkthrough and Commissioning",
      "Change Order Management",
    ],
    description:
      "Hands-on management that keeps your project on track, on budget, and built to the highest standards. From scheduling to commissioning, we oversee every detail so you don\u2019t have to.",
  },
  {
    title: "Not4Sale Residential Advisory",
    href: "/services/not4sale",
    subItems: [
      "Luxury Home Acquisition Strategy",
      "Property Assessment & Valuation",
      "Design Visioning & Renovation Planning",
      "Vendor & Contractor Coordination",
      "Project Oversight for Private Residences",
    ],
    description:
      "A bespoke advisory service for discerning homeowners and investors seeking to acquire, renovate, or build luxury residences. We bring the same institutional-quality oversight to your private home as we do to large-scale developments.",
  },
  {
    title: "Thought Leadership",
    href: "/services/thought-leadership",
    subItems: [
      "Industry Speaking Engagements",
      "Published Research & White Papers",
      "Market Trend Analysis",
      "Educational Workshops & Seminars",
      "Strategic Industry Partnerships",
    ],
    description:
      "Sharing our knowledge and insights with the broader industry through speaking engagements, publications, and educational initiatives. We contribute to shaping the future of real estate development and design.",
  },
  {
    title: "Creative and Branding",
    href: "/services/creative-branding",
    subItems: [
      "Brand Strategy & Positioning",
      "Visual Identity Development",
      "Marketing Collateral Design",
      "Digital Presence & Web Design",
      "Storytelling & Content Creation",
    ],
    description:
      "Every great project deserves a compelling story. Our creative and branding team crafts distinctive identities that capture the essence of your development and resonate with your target audience.",
  },
];

/* ─── Expandable Service Card Component ─── */
function ServiceCardItem({ card, index }: { card: ServiceCard; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ScrollReveal delay={index % 2 === 0 ? 0 : 0.15}>
      <div className="bg-cream-dark rounded-xl p-[15px] h-full flex flex-col">
        {/* Card Header */}
        <div className="flex-1">
          <Link href={card.href}>
            <h3 className="text-[20px] leading-[26px] tracking-[-0.6px] font-medium mb-3 hover:text-accent-orange transition-colors">
              {card.title}
            </h3>
          </Link>

          {/* Sub-items list */}
          <ul className="space-y-1.5 mb-4">
            {card.subItems.map((item) => (
              <li
                key={item}
                className="text-[14px] leading-[20px] tracking-[-0.14px] text-dark/60 flex items-start gap-2"
              >
                <span className="text-accent-orange mt-[6px] shrink-0 w-1.5 h-1.5 rounded-full bg-accent-orange" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Show/Hide Details Toggle */}
        <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1.5 text-[14px] font-medium text-dark/50 hover:text-dark transition-colors"
          >
            {isOpen ? (
              <>
                Hide Details
                <CaretUp size={14} weight="bold" />
              </>
            ) : (
              <>
                Show Details
                <CaretDown size={14} weight="bold" />
              </>
            )}
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="pt-3 text-[15px] leading-[22px] tracking-[-0.15px] text-dark/70">
                  {card.description}
                </p>
                <Link
                  href={card.href}
                  className="inline-block mt-3 text-[14px] font-medium text-accent-orange hover:underline"
                >
                  Learn More &rarr;
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </ScrollReveal>
  );
}

/* ═══════════════════════════════════════════
   SERVICES PAGE
   ═══════════════════════════════════════════ */
export default function ServicesPage() {
  return (
    <>
      {/* ───── 1. HERO ───── */}
      <section className="py-[80px] md:py-[100px] px-6 md:px-[50px] bg-cream pt-[140px] md:pt-[170px]">
        <ScrollReveal>
          <span className="text-xs font-bold uppercase tracking-widest text-dark/50 mb-3 block">
            Our Services
          </span>
          <h1 className="max-w-4xl">
            If our services don&apos;t tick all your boxes, no worries! Share
            your dream project with us, and we&apos;ll create a custom plan just
            for you.
          </h1>
        </ScrollReveal>
      </section>

      {/* ───── 2. SERVICE CARDS GRID ───── */}
      <section className="py-[80px] md:py-[100px] px-6 md:px-[50px] bg-cream">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {serviceCards.map((card, i) => (
            <ServiceCardItem key={card.title} card={card} index={i} />
          ))}
        </div>
      </section>

      {/* ───── 3. CUSTOM SERVICES CTA ───── */}
      <section className="py-[80px] md:py-[100px] px-6 md:px-[50px] bg-cream">
        <ScrollReveal>
          <div className="bg-dark rounded-xl p-10 md:p-16 text-center">
            <h2 className="text-text-on-dark mb-4">
              Have a unique project in mind?
            </h2>
            <p className="text-text-on-dark/70 text-[16px] leading-[24px] tracking-[-0.32px] max-w-xl mx-auto mb-8">
              Our team loves tackling new challenges. Reach out today, and
              let&apos;s explore the endless possibilities together.
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
    </>
  );
}
