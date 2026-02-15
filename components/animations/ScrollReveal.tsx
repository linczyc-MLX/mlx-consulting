"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

/**
 * Animation variants matching the original Framer site.
 *
 * ScaleIn: element starts at 1.1x scale, settles to 1.0
 * SlideUp: element starts 50px below, slides to final position
 *
 * Both use a 3s critically-damped spring (bounce: 0).
 */

const variants: Record<string, Variants> = {
  scaleIn: {
    hidden: { opacity: 1, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", bounce: 0, duration: 3 },
    },
  },
  slideUp: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", bounce: 0, duration: 3 },
    },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { type: "spring", bounce: 0, duration: 2 },
    },
  },
};

interface ScrollRevealProps {
  children: ReactNode;
  variant?: "scaleIn" | "slideUp" | "fadeIn";
  delay?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  variant = "slideUp",
  delay = 0,
  className,
}: ScrollRevealProps) {
  const selectedVariant = variants[variant];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={selectedVariant}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
