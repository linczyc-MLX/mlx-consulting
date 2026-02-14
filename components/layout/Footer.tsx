"use client";

import Link from "next/link";
import {
  Phone,
  Envelope,
  MapPin,
  Clock,
  LinkedinLogo,
} from "@phosphor-icons/react";

export function Footer() {
  return (
    <footer className="bg-dark-alt text-text-on-dark py-16 px-[50px]">
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
            <span className="text-overline font-bold uppercase tracking-wide text-xs">
              Phone
            </span>
          </div>
          <a
            href="tel:+12129603001"
            className="block text-sm opacity-80 hover:opacity-100"
          >
            +1 (212) 960-3001
          </a>
          <a
            href="tel:+16462794845"
            className="block text-sm opacity-80 hover:opacity-100"
          >
            +1 (646) 279-4845 (WhatsApp)
          </a>
        </div>

        {/* Email */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Envelope size={18} className="text-accent-orange" />
            <span className="text-overline font-bold uppercase tracking-wide text-xs">
              Email
            </span>
          </div>
          <a
            href="mailto:info@mlxconsulting.com"
            className="text-sm opacity-80 hover:opacity-100"
          >
            info@mlxconsulting.com
          </a>
        </div>

        {/* Address */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <MapPin size={18} className="text-accent-orange" />
            <span className="text-overline font-bold uppercase tracking-wide text-xs">
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
            <span className="text-overline font-bold uppercase tracking-wide text-xs">
              Opening Hours
            </span>
          </div>
          <p className="text-sm opacity-80">Eastern Standard Time</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-8 border-t border-white/10">
        <div className="flex items-center gap-4">
          {/* Brochure download */}
          <button className="flex items-center gap-2 bg-accent-orange text-dark font-medium text-sm px-5 py-2.5 rounded-md hover:bg-accent-orange/90 transition-colors">
            Download
          </button>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/mlinczyc/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-orange transition-colors"
          >
            <LinkedinLogo size={20} />
          </a>
        </div>

        <div className="flex items-center gap-4 text-xs opacity-60">
          <Link href="/privacy-policy" className="hover:opacity-100">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:opacity-100">
            Terms
          </Link>
          <span>&copy; MLX Consulting</span>
        </div>
      </div>
    </footer>
  );
}
