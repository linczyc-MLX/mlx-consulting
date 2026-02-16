"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Envelope,
  MapPin,
  Clock,
  LinkedinLogo,
  DownloadSimple,
  X,
  CheckCircle,
} from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";

export function Footer() {
  const [showBrochureModal, setShowBrochureModal] = useState(false);
  const [brochureEmail, setBrochureEmail] = useState("");
  const [brochureSubmitted, setBrochureSubmitted] = useState(false);

  const handleBrochureSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!brochureEmail) return;
    // Log the request (same pattern as contact form)
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Brochure Request",
          email: brochureEmail,
          message: "Requested MLX Brochure download",
        }),
      });
    } catch {
      // Silent fail — still show success
    }
    setBrochureSubmitted(true);
  };

  return (
    <>
    <footer className="bg-dark-alt text-text-on-dark py-16 px-6 md:px-[50px]">
      {/* Tagline */}
      <p className="text-[18px] font-medium tracking-[-0.18px] mb-12 max-w-md">
        Leadership in Real Estate Development, Design and Construction
      </p>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Phone */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Phone size={18} className="text-accent-orange" />
            <span className="font-bold uppercase tracking-wide text-xs">
              Phone
            </span>
          </div>
          <a
            href="tel:+12129603001"
            className="block text-sm opacity-80 hover:opacity-100 transition-opacity"
          >
            +1 (212) 960-3001
          </a>
          <a
            href="tel:+16462794845"
            className="block text-sm opacity-80 hover:opacity-100 transition-opacity"
          >
            +1 (646) 279-4845 (WhatsApp)
          </a>
        </div>

        {/* Email */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Envelope size={18} className="text-accent-orange" />
            <span className="font-bold uppercase tracking-wide text-xs">
              Email
            </span>
          </div>
          <a
            href="mailto:info@mlxconsulting.com"
            className="text-sm opacity-80 hover:opacity-100 transition-opacity"
          >
            info@mlxconsulting.com
          </a>
        </div>

        {/* Address */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <MapPin size={18} className="text-accent-orange" />
            <span className="font-bold uppercase tracking-wide text-xs">
              Address
            </span>
          </div>
          <p className="text-sm opacity-80">
            9 West 31st Street, Suite 26F
            <br />
            New York NY 10001
          </p>
        </div>

        {/* Hours */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Clock size={18} className="text-accent-orange" />
            <span className="font-bold uppercase tracking-wide text-xs">
              Opening Hours
            </span>
          </div>
          <p className="text-sm opacity-80">Eastern Standard Time</p>
        </div>
      </div>

      {/* Brochure Download */}
      <div className="mb-12">
        <p className="text-sm opacity-60 mb-3">Download the MLX Brochure</p>
        <button
          onClick={() => {
            setShowBrochureModal(true);
            setBrochureSubmitted(false);
            setBrochureEmail("");
          }}
          className="flex items-center gap-2 bg-accent-orange text-dark font-medium text-sm px-5 py-2.5 rounded-md hover:bg-accent-orange/90 transition-colors"
        >
          <DownloadSimple size={16} weight="bold" />
          Download
        </button>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-8 border-t border-white/10">
        <div className="flex items-center gap-4">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/mlinczyc/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-orange transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinLogo size={20} />
          </a>
        </div>

        <div className="flex items-center gap-4 text-xs opacity-60">
          <Link href="/privacy-policy" className="hover:opacity-100 transition-opacity">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:opacity-100 transition-opacity">
            Terms
          </Link>
          <span>&copy; MLX Consulting</span>
          <a
            href="http://redline.productions/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-100 transition-opacity"
          >
            A RedLine Production
          </a>
        </div>
      </div>
    </footer>

    {/* Brochure Email Modal */}
    <AnimatePresence>
      {showBrochureModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-dark/80 backdrop-blur-sm p-6"
          onClick={() => setShowBrochureModal(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", bounce: 0, duration: 0.3 }}
            className="relative bg-cream rounded-xl p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowBrochureModal(false)}
              className="absolute top-4 right-4 text-dark/40 hover:text-dark transition-colors"
              aria-label="Close"
            >
              <X size={20} weight="bold" />
            </button>

            {brochureSubmitted ? (
              <div className="text-center py-4">
                <CheckCircle size={48} weight="fill" className="text-accent-orange mx-auto mb-4" />
                <h3 className="text-[20px] font-semibold text-dark mb-2">Thank you!</h3>
                <p className="text-[14px] text-dark/60">
                  We&apos;ll send the MLX Brochure to your email shortly.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-[20px] font-semibold text-dark mb-2">
                  Download the MLX Brochure
                </h3>
                <p className="text-[14px] text-dark/60 mb-6">
                  Enter your email to receive our latest brochure.
                </p>
                <form onSubmit={handleBrochureSubmit} className="space-y-4">
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    value={brochureEmail}
                    onChange={(e) => setBrochureEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-dark/10 bg-white text-dark text-[14px] focus:outline-none focus:ring-2 focus:ring-accent-orange/40"
                  />
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-accent-orange text-dark font-medium text-sm px-5 py-3 rounded-lg hover:bg-accent-orange/90 transition-colors"
                  >
                    <DownloadSimple size={16} weight="bold" />
                    Send Brochure
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
