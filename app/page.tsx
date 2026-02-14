"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import { CaretDown, CaretUp, PaperPlaneTilt } from "@phosphor-icons/react";

/* ─── Stats Data ─── */
const stats = [
  { value: "25+", label: "Years of creating spaces" },
  { value: "90+", label: "Amazing projects brought to life" },
  { value: "40+", label: "Happy clients, happy spaces" },
  { value: "10+", label: "Designs that earned awards" },
];

/* ─── Differentiators ─── */
const differentiators = [
  {
    num: "001",
    title: "Designs with heart and soul",
    desc: "We don\u2019t just design buildings; we craft spaces where life happens, memories are made, and dreams come true. Every project is as unique as the people living in it.",
  },
  {
    num: "002",
    title: "Expert guidance",
    desc: "With decades of experience and a team of passionate professionals, we bring expertise and creativity to every project. Think of us as your trusted partners in making your vision a reality.",
  },
  {
    num: "003",
    title: "Smooth and stress-free process",
    desc: "We believe the journey should be as enjoyable as the destination. From the first meeting to the final reveal, we make the process seamless and fun, keeping you informed and excited every step of the way.",
  },
  {
    num: "004",
    title: "Save time and stay on budget",
    desc: "We respect your time and your wallet. Our efficient planning and transparent communication mean no surprises\u2014just a beautifully executed project delivered on time and within budget.",
  },
];

/* ─── Process Steps ─── */
const steps = [
  {
    num: "01",
    title: "Initial Consultation",
    desc: "We begin by sitting down with you to understand your vision, goals, and preferences. This is where we listen carefully to your ideas, discuss your needs, and explore what\u2019s possible.",
    image: "/images/consultation.jpg",
  },
  {
    num: "02",
    title: "Concept Development",
    desc: "Once we have a clear understanding of your goals, we move on to brainstorming and laying out the project playbook, tailored to your unique vision.",
    image: "/images/concept-development.png",
  },
  {
    num: "03",
    title: "Planning & Preparation",
    desc: "With the playbook approved, we focus on the practicalities. From identifying, qualifying and retaining the project team to timelines and budgets, we ensure every aspect is planned meticulously.",
    image: "/images/designing.png",
  },
  {
    num: "04",
    title: "Execution & Delivery",
    desc: "This is the exciting part\u2014bringing the plan to life! Whether it\u2019s overseeing purchasing and logistics, construction or insuring the final design meets cost and quality metrics, we\u2019re with you every step of the way. We ensure the project is completed to the highest standards, turning your vision into reality.",
    image: "/images/property.png",
  },
];

/* ─── FAQs ─── */
const faqs = [
  {
    q: "Do you handle all the permits and paperwork?",
    a: "Absolutely! We take care of all the boring-but-important stuff, like permits and paperwork, working closely with local expediters on your behalf.",
  },
  {
    q: "Can I make changes during the design process?",
    a: "Of course! Your input is always welcome. We want you to be thrilled with the final design, so feel free to share your ideas as we go along.",
  },
  {
    q: "Do you only develop hospitality projects?",
    a: "Not at all! While we love creating exceptional hotels we also have a passion for luxury residences, stunning restaurants, bars and the mixed-use elements that bring destinations to life. If you\u2019ve got a vision, we\u2019re here to bring it to life.",
  },
  {
    q: "How do you charge for your services?",
    a: "Each assignment is different and we tailor our services and those of your chosen consultants to meet your financial and creative goals.",
  },
  {
    q: "Can you work within my budget?",
    a: "Yes, we work with a variety of budgets and strive to create beautiful and functional spaces within your financial constraints. We discuss your budget during the initial meeting and tailor our design solutions accordingly.",
  },
  {
    q: "Can I see a 3D model of my design?",
    a: "Absolutely! We work with the leading visualization firms to show off your project with 3D models or renderings to help you visualize your space before construction begins.",
  },
  {
    q: "Do you work with contractors?",
    a: "Yes! We collaborate with trusted contractors to ensure your design is executed perfectly. If you have your own team, we\u2019re happy to work with them too!",
  },
  {
    q: "Can you help with interior design too?",
    a: "You bet! Identifying, qualifying and retaining the best in class architects and interior designers is a key part of our services.",
  },
  {
    q: "Do you handle the purchasing of furniture and materials?",
    a: "Yes, we will assist you closely with the procurement of all furniture, materials, and finishes required for your project. We work with trusted consultants, suppliers and vendors to ensure quality and timely delivery.",
  },
  {
    q: "What happens if I still have questions?",
    a: "We\u2019re here to help! If you can\u2019t find the answer you\u2019re looking for, just drop us a message or fill out the form. We\u2019ll get back to you in no time!",
  },
];

/* ─── Accordion Component ─── */
function Accordion({
  items,
}: {
  items: { num: string; title: string; desc: string }[];
}) {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className="space-y-0">
      {items.map((item, i) => (
        <div key={item.num} className="border-b border-dark/10">
          <button
            onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            className="w-full flex items-center gap-4 py-5 text-left"
          >
            <span className="text-[20px] font-medium text-dark/30 font-mono">
              {item.num}
            </span>
            <h3 className="flex-1">{item.title}</h3>
            {openIndex === i ? (
              <CaretUp size={20} className="text-dark/40" />
            ) : (
              <CaretDown size={20} className="text-dark/40" />
            )}
          </button>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="pb-5 pl-14 text-[16px] leading-[24px] tracking-[-0.32px] text-dark/70">
                  {item.desc}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

/* ─── FAQ Accordion ─── */
function FAQAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState(-1);
  return (
    <div className="space-y-0">
      {items.map((item, i) => (
        <div key={i} className="border-b border-dark/10">
          <button
            onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            className="w-full flex items-center justify-between gap-4 py-5 text-left"
          >
            <span className="text-[16px] font-medium leading-[24px]">
              {item.q}
            </span>
            {openIndex === i ? (
              <CaretUp size={18} className="text-dark/40 shrink-0" />
            ) : (
              <CaretDown size={18} className="text-dark/40 shrink-0" />
            )}
          </button>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="pb-5 text-[15px] leading-[22px] text-dark/70">
                  {item.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════
   HOMEPAGE
   ═══════════════════════════════════════════ */
export default function HomePage() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      {/* ───── 1. HERO ───── */}
      <section className="relative w-full h-screen overflow-hidden">
        <ScrollReveal variant="scaleIn" className="absolute inset-0">
          <Image
            src="/images/hero-homepage.jpg"
            alt="Pier Sixty-Six aerial view"
            fill
            className="object-cover"
            priority
          />
        </ScrollReveal>
        <div className="relative z-10 flex flex-col justify-center h-full pt-16 px-6 md:px-[50px]">
          <ScrollReveal variant="slideUp">
            <h1 className="max-w-3xl text-dark">
              <span className="block">A passion to deliver</span>
              <span className="block">authentic, remarkable,</span>
              <span className="block">sustainable and profitable</span>
              <span className="block">environments.</span>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* ───── 2. STATS BAR ───── */}
      <section className="bg-dark py-6 px-6 md:px-[50px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-accent-orange text-[36px] md:text-[48px] font-medium tracking-tight font-mono">
                {stat.value}
              </p>
              <p className="text-text-on-dark/70 text-[13px] tracking-[-0.26px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ───── 3. VALUE QUOTE ───── */}
      <section className="py-[80px] md:py-[120px] px-6 md:px-[50px] bg-cream">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[24px] md:text-[36px] leading-[1.1] tracking-[-2px] font-medium">
              <span className="text-dark/40">
                Welcome to a world of creativity, where every project{" "}
              </span>
              <span className="text-dark">starts with a dream </span>
              <span className="text-dark/40">and ends with a </span>
              <span className="text-dark">space that inspires.</span>
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* ───── 4. ABOUT / MISSION TEXT ───── */}
      <section className="py-[80px] md:py-[100px] px-6 md:px-[50px] bg-cream">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="max-w-lg">
              <p className="text-[17px] md:text-[18px] leading-[25.2px] tracking-[-0.18px] font-medium text-dark">
                Our journey began 25 years ago, with a simple idea: to assemble
                the most creative, innovative and visionary team of architects,
                designers, storytellers, contractors and vendors to deliver
                authentic, dynamic and profitable environments for the most
                demanding clients, investors and developers to lead and dominate
                their markets.
              </p>
              <p className="mt-6 text-[17px] md:text-[18px] leading-[25.2px] tracking-[-0.18px] font-medium text-dark/70">
                Along the way, we&apos;ve collaborated with incredible individuals
                and companies, tackled exciting challenges in the US, Europe,
                Asia and the Middle East, and built spaces we&apos;re truly proud of.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/model-buildings.png"
                alt="A man with architectural model buildings"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ───── 5. OUR DIFFERENCES ───── */}
      <section className="py-[80px] md:py-[100px] px-6 md:px-[50px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left image */}
          <ScrollReveal variant="scaleIn">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
              <Image
                src="/images/differentiators-bg.jpg"
                alt="Architecture workspace"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>

          {/* Right accordion */}
          <ScrollReveal>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-dark/50 mb-2 block">
                Our Differences
              </span>
              <h2 className="mb-8">
                what makes us different (and totally awesome)
              </h2>
              <Accordion items={differentiators} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ───── 6. HOW WE WORK ───── */}
      <section className="py-[80px] md:py-[100px] px-6 md:px-[50px] bg-cream">
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-dark/10 rounded-full text-xs font-bold uppercase tracking-widest text-dark/60">
              <PaperPlaneTilt size={14} />
              HOW WE WORK
            </span>
          </div>
          <h2 className="mb-10 max-w-2xl">
            Let&apos;s turn your big ideas into a masterpiece with a clear and
            fun process
          </h2>

          {/* Step selector */}
          <div className="flex gap-3 mb-10">
            {steps.map((step, i) => (
              <button
                key={step.num}
                onClick={() => setActiveStep(i)}
                className={`w-12 h-12 rounded-lg border-2 text-[16px] font-medium transition-all ${
                  activeStep === i
                    ? "border-dark bg-dark text-white"
                    : "border-dark/20 text-dark/50 hover:border-dark/40"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          {/* Step content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-cream-dark">
                <Image
                  src={steps[activeStep].image}
                  alt={steps[activeStep].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-accent-orange font-mono text-sm font-bold tracking-widest">
                  STEP {steps[activeStep].num}
                </span>
                <h3 className="text-[28px] leading-[1.2] tracking-[-1px] font-medium mt-2 mb-4">
                  {steps[activeStep].title}
                </h3>
                <p className="text-[16px] leading-[24px] text-dark/70">
                  {steps[activeStep].desc}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </ScrollReveal>
      </section>

      {/* ───── 7. GALLERY ───── */}
      <section className="py-[80px] md:py-[100px] px-6 md:px-[50px]">
        <ScrollReveal>
          <span className="text-xs font-bold uppercase tracking-widest text-dark/50 mb-2 block">
            Gallery
          </span>
          <h2 className="mb-10 max-w-2xl">
            Don&apos;t just take our word for it&mdash;see how we turn ideas into
            stunning spaces. Our gallery is full of inspiration for your next big
            project!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "/images/gallery-1.jpg",
              "/images/gallery-2.jpg",
              "/images/pier66-hero.jpg",
              "/images/palace-hero.jpg",
              "/images/gallery-animation.webp",
              "/images/hero-homepage.jpg",
            ].map((src, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] rounded-xl overflow-hidden group"
              >
                <Image
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ───── 8. SERVICES OVERVIEW ───── */}
      <section className="py-[80px] md:py-[100px] px-6 md:px-[50px] bg-cream">
        <ScrollReveal>
          <span className="text-xs font-bold uppercase tracking-widest text-dark/50 mb-2 block">
            Our Services
          </span>
          <h2 className="mb-4 max-w-2xl">
            Explore our services and see how we bring creativity and expertise to
            every project
          </h2>
          <Link
            href="/services"
            className="inline-block mb-10 text-accent-orange font-medium text-[15px] hover:underline"
          >
            Explore All Services &rarr;
          </Link>
        </ScrollReveal>
      </section>

      {/* ───── 9. FAQS + CONTACT FORM ───── */}
      <section className="py-[80px] md:py-[100px] px-6 md:px-[50px]">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left — FAQs */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-dark/50 mb-2 block">
                FAQs
              </span>
              <h2 className="mb-8">
                We&apos;ve answered the big questions, but if you still have
                something on your mind, we&apos;re here to help.
              </h2>
              <FAQAccordion items={faqs} />
            </div>

            {/* Right — Contact Form */}
            <div className="bg-cream-dark rounded-xl p-8">
              <p className="text-[15px] text-dark/70 mb-6">
                We&apos;re just a form away&mdash;send us your question, and
                we&apos;ll be happy to help!
              </p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-lg border border-dark/10 bg-white text-[15px] focus:outline-none focus:border-accent-orange transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-4 py-3 rounded-lg border border-dark/10 bg-white text-[15px] focus:outline-none focus:border-accent-orange transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg border border-dark/10 bg-white text-[15px] focus:outline-none focus:border-accent-orange transition-colors"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-dark/10 bg-white text-[15px] focus:outline-none focus:border-accent-orange transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-dark text-white font-medium text-[15px] py-3 rounded-lg hover:bg-dark/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
