"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, type LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { socials, type SocialLink } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Toast } from "@/components/ui/Toast";

const iconMap: Record<SocialLink["icon"], LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  twitter: Twitter,
};

async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Clipboard API is missing on older browsers and non-HTTPS origins
    const field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    const ok = document.execCommand("copy");
    field.remove();
    return ok;
  }
}

export function SocialIcons({ className }: { className?: string }) {
  const [copied, setCopied] = useState(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => clearTimeout(hideTimer.current), []);

  // The mail icon copies the address instead of opening a mail client;
  // if copying fails it falls back to the mailto: link.
  const copyEmail = async (
    e: React.MouseEvent<HTMLAnchorElement>,
    email: string,
  ) => {
    e.preventDefault();
    if (!(await copyText(email))) {
      window.location.href = `mailto:${email}`;
      return;
    }
    setCopied(true);
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setCopied(false), 2500);
  };

  const email = socials
    .find((s) => s.icon === "mail")
    ?.href.replace(/^mailto:/, "");

  return (
    <>
      <ul className={cn("flex items-center gap-2", className)}>
        {socials.map((social, i) => {
          const Icon = iconMap[social.icon];
          const external = social.href.startsWith("http");
          const isMail = social.icon === "mail";
          return (
            <li key={social.label}>
              <motion.a
                href={social.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                aria-label={isMail ? "Copy email address" : social.label}
                title={isMail ? "Copy email address" : undefined}
                onClick={
                  isMail && email ? (e) => copyEmail(e, email) : undefined
                }
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.08, duration: 0.4 }}
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.02] text-white/60 transition-colors duration-300 hover:border-accent/40 hover:text-white"
              >
                <Icon
                  className="h-[18px] w-[18px]"
                  strokeWidth={1.75}
                />
              </motion.a>
            </li>
          );
        })}
      </ul>

      {email && (
        <Toast open={copied} message="Email copied to clipboard" />
      )}
    </>
  );
}
