"use client";

import { useState, FormEvent } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import {
  MapPin,
  Phone,
  Envelope,
  Clock,
  PaperPlaneTilt,
  CheckCircle,
} from "@phosphor-icons/react";

export default function ContactUsPage() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: integrate with form submission API (e.g. Formspree, Netlify Forms, or custom endpoint)
    setSubmitted(true);
  };

  return (
    <>
      {/* ───── HERO ───── */}
      <section className="pt-[120px] md:pt-[150px] pb-[40px] md:pb-[60px] px-6 md:px-[50px] bg-cream">
        <ScrollReveal variant="slideUp">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-dark/10 rounded-full text-xs font-bold uppercase tracking-widest text-dark/60 mb-4">
            <MapPin size={14} />
            CONTACT US
          </span>
          <h1 className="max-w-3xl">Get in touch</h1>
          <p className="mt-4 text-[17px] md:text-[18px] leading-[25.2px] tracking-[-0.18px] text-dark/60 max-w-2xl">
            Have a project in mind? We&apos;d love to hear about it. Reach out
            and let&apos;s explore the possibilities together.
          </p>
        </ScrollReveal>
      </section>

      {/* ───── CONTACT INFO CARDS ───── */}
      <section className="px-6 md:px-[50px] pb-[40px] md:pb-[60px] bg-cream">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <ScrollReveal variant="slideUp" delay={0}>
            <div className="bg-cream-dark rounded-xl p-6">
              <Phone size={24} className="text-accent-orange mb-3" />
              <h4 className="text-[14px] font-bold uppercase tracking-wider text-dark/50 mb-2">
                Phone
              </h4>
              <a
                href="tel:+12129603001"
                className="block text-[15px] text-dark hover:text-accent-orange transition-colors"
              >
                +1 (212) 960-3001
              </a>
              <a
                href="tel:+16462794845"
                className="block text-[15px] text-dark/70 hover:text-accent-orange transition-colors"
              >
                +1 (646) 279-4845
              </a>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="slideUp" delay={0.08}>
            <div className="bg-cream-dark rounded-xl p-6">
              <Envelope size={24} className="text-accent-orange mb-3" />
              <h4 className="text-[14px] font-bold uppercase tracking-wider text-dark/50 mb-2">
                Email
              </h4>
              <a
                href="mailto:info@mlxconsulting.com"
                className="text-[15px] text-dark hover:text-accent-orange transition-colors"
              >
                info@mlxconsulting.com
              </a>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="slideUp" delay={0.16}>
            <div className="bg-cream-dark rounded-xl p-6">
              <MapPin size={24} className="text-accent-orange mb-3" />
              <h4 className="text-[14px] font-bold uppercase tracking-wider text-dark/50 mb-2">
                Address
              </h4>
              <p className="text-[15px] text-dark">
                9 West 31st Street, Suite 26F
              </p>
              <p className="text-[15px] text-dark/70">New York, NY 10001</p>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="slideUp" delay={0.24}>
            <div className="bg-cream-dark rounded-xl p-6">
              <Clock size={24} className="text-accent-orange mb-3" />
              <h4 className="text-[14px] font-bold uppercase tracking-wider text-dark/50 mb-2">
                Hours
              </h4>
              <p className="text-[15px] text-dark">Eastern Standard Time</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ───── MAP + FORM ───── */}
      <section className="px-6 md:px-[50px] pb-[80px] md:pb-[100px] bg-cream">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8">
          {/* Google Maps Embed */}
          <ScrollReveal variant="fadeIn">
            <div
              className="relative w-full rounded-xl overflow-hidden border border-dark/5"
              style={{ height: "min(calc(100vh - 280px), 600px)", minHeight: "400px" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.5175753445!2d-73.9880837!3d40.7473197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a926a69507%3A0x6c49e186bbba3402!2s9%20W%2031st%20St%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MLX Consulting Office Location"
                className="absolute inset-0"
              />
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal variant="slideUp" delay={0.15}>
            <div className="bg-cream-dark rounded-xl p-8 h-full flex flex-col">
              <h3 className="text-[20px] leading-[26px] tracking-[-0.6px] font-medium mb-2">
                Send us a message
              </h3>
              <p className="text-[15px] text-dark/60 mb-6">
                We&apos;re just a form away — send us your question, and
                we&apos;ll be happy to help!
              </p>

              {submitted ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center py-10">
                  <CheckCircle
                    size={48}
                    weight="fill"
                    className="text-accent-orange mb-4"
                  />
                  <h4 className="text-[18px] font-medium mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-[15px] text-dark/60">
                    Thank you for reaching out. We&apos;ll get back to you
                    shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: "", phone: "", email: "", message: "" });
                    }}
                    className="mt-6 text-accent-orange font-medium text-[14px] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-4">
                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-wider text-dark/80 mb-1.5">
                      NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Smith"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-dark/10 bg-white text-[15px] focus:outline-none focus:border-accent-orange transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-wider text-dark/80 mb-1.5">
                      PHONE
                    </label>
                    <input
                      type="tel"
                      placeholder="(123) 456-7890"
                      value={formState.phone}
                      onChange={(e) =>
                        setFormState({ ...formState, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-dark/10 bg-white text-[15px] focus:outline-none focus:border-accent-orange transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-wider text-dark/80 mb-1.5">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@gmail.com"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-dark/10 bg-white text-[15px] focus:outline-none focus:border-accent-orange transition-colors"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-[12px] font-bold uppercase tracking-wider text-dark/80 mb-1.5">
                      MESSAGE
                    </label>
                    <textarea
                      required
                      placeholder="Write your message here"
                      rows={4}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-dark/10 bg-white text-[15px] focus:outline-none focus:border-accent-orange transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-accent-orange text-white font-medium text-[15px] py-3 rounded-lg hover:bg-accent-orange/90 transition-colors"
                  >
                    <PaperPlaneTilt size={18} weight="fill" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
