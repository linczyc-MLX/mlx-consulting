"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CaretDown, List, X } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Projects", href: "/projects" },
  { label: "Videos", href: "/videos" },
  { label: "Contact", href: "/contact-us" },
];

const serviceLinks = [
  { label: "D-VELOP360", href: "/services/d-velop360" },
  { label: "Consulting Services", href: "/services/consulting-services" },
  { label: "Master Planning & Design", href: "/services/master-planning-design" },
  { label: "Development Management", href: "/services/development-management" },
  { label: "Project & Construction Management", href: "/services/project-management" },
  { label: "Not4Sale Residential Advisory", href: "/services/not4sale" },
  { label: "Thought Leadership", href: "/services/thought-leadership" },
  { label: "Creative and Branding", href: "/services/creative-branding" },
];

export function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between h-16 px-6 md:px-[50px] bg-cream/90 backdrop-blur-sm border-b border-dark/5">
      {/* Logo */}
      <Link href="/" aria-label="MLX Consulting Home">
        <Image
          src="/images/mlx-logo.png"
          alt="MLX Consulting"
          width={80}
          height={40}
          className="h-8 w-auto"
          priority
        />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-6">
        {navLinks.map((link) =>
          link.hasDropdown ? (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-[16px] font-medium text-dark tracking-[-0.32px] hover:text-accent-orange transition-colors">
                {link.label}
                <CaretDown
                  size={14}
                  className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-[-200px] mt-0 flex bg-cream-dark rounded-xl shadow-xl overflow-hidden"
                  >
                    {/* Left panel — CTA */}
                    <div className="relative w-[300px] p-8 bg-dark text-text-on-dark flex flex-col justify-end">
                      <p className="text-sm opacity-70 mb-2">
                        Custom services? Special requests?
                      </p>
                      <p className="text-sm opacity-70 mb-4">
                        Reach out today, and let&apos;s explore the endless
                        possibilities together!
                      </p>
                      <Link
                        href="/contact-us"
                        className="text-accent-orange font-medium text-sm hover:underline"
                      >
                        &raquo; Let&apos;s Talk
                      </Link>
                    </div>

                    {/* Right panel — Service links */}
                    <div className="w-[350px] py-4">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => setIsDropdownOpen(false)}
                          className="block px-6 py-3 text-dark text-[15px] font-medium hover:bg-cream transition-colors border-b border-cream/50 last:border-b-0"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <Link
              key={link.label}
              href={link.href}
              className="text-[16px] font-medium text-dark tracking-[-0.32px] hover:text-accent-orange transition-colors"
            >
              {link.label}
            </Link>
          )
        )}
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden p-2"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        aria-label="Toggle menu"
      >
        {isMobileOpen ? <X size={24} /> : <List size={24} />}
      </button>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-0 top-16 bg-cream z-40 px-6 py-8 flex flex-col gap-4"
          >
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.label}>
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="w-full flex items-center justify-between text-2xl font-medium text-dark py-2 border-b border-cream-dark"
                  >
                    {link.label}
                    <CaretDown
                      size={20}
                      className={`transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {isMobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 py-2 flex flex-col gap-1">
                          {serviceLinks.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              onClick={() => {
                                setIsMobileOpen(false);
                                setIsMobileServicesOpen(false);
                              }}
                              className="text-lg text-dark/70 hover:text-accent-orange transition-colors py-1.5 border-b border-cream-dark/50 last:border-b-0"
                            >
                              {service.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-2xl font-medium text-dark py-2 border-b border-cream-dark"
                >
                  {link.label}
                </Link>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
