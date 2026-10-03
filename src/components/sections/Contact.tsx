"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Loader2, MapPin } from "lucide-react";
import { useState } from "react";
import { contact } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SocialIcons } from "@/components/ui/SocialIcons";

type Status = "idle" | "submitting" | "success";

const fields = [
  { name: "name", label: "Name", type: "text", full: false },
  { name: "email", label: "Email", type: "email", full: false },
  { name: "subject", label: "Subject", type: "text", full: true },
] as const;

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    // Demo only — plug in your form handler / API route here.
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="mb-24 scroll-mt-16 md:mb-32 lg:scroll-mt-24">
      <div>
        <div>
          <Reveal>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-accent">
              Contact
            </p>
            <h2 className="font-display text-3xl font-medium leading-[1.1] tracking-[-0.02em] text-white/90 sm:text-4xl">
              {contact.heading}
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-10">
            <div>
              <Reveal>
                <p className="max-w-md text-base leading-relaxed text-[#998f8f] sm:text-lg">
                  {contact.text}
                </p>
                <a
                  href={`mailto:${contact.email}`}
                  className="group mt-8 inline-flex items-center gap-2 border-b border-accent pb-1 font-display text-lg font-medium text-white transition-colors hover:text-accent"
                >
                  {contact.email}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <p className="mt-6 flex items-center gap-2 text-sm text-[#998f8f]">
                  <MapPin className="h-4 w-4" />
                  {contact.location}
                </p>
                <div className="mt-8">
                  <SocialIcons />
                </div>
              </Reveal>
            </div>

            <Reveal direction="left">
              <form
                onSubmit={handleSubmit}
                className="grid gap-6"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  {fields.map((field) => (
                    <div
                      key={field.name}
                      className={field.full ? "sm:col-span-2" : ""}
                    >
                      <label
                        htmlFor={field.name}
                        className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-white/45"
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        required
                        className="w-full border-0 border-b border-white/20 bg-transparent px-0 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-accent"
                        placeholder={`Your ${field.label.toLowerCase()}`}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-white/45"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full resize-none border-0 border-b border-white/20 bg-transparent px-0 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-accent"
                    placeholder="Tell me about your project or opportunity…"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status !== "idle"}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-accent-soft disabled:opacity-70"
                >
                  {status === "submitting" && (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  )}
                  {status === "success" && <Check className="h-4 w-4" />}
                  {status === "idle"
                    ? "Send Message"
                    : status === "submitting"
                      ? "Sending…"
                      : "Message sent"}
                </motion.button>
                <p className="text-center text-xs text-white/30">
                  This is a demo form. Connect it to an API route or a service
                  like Formspree.
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
