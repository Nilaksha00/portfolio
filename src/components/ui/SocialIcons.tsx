"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, type LucideIcon } from "lucide-react";
import { socials, type SocialLink } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const iconMap: Record<SocialLink["icon"], LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  twitter: Twitter,
};

export function SocialIcons({ className }: { className?: string }) {
  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {socials.map((social, i) => {
        const Icon = iconMap[social.icon];
        const external = social.href.startsWith("http");
        return (
          <li key={social.label}>
            <motion.a
              href={social.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              aria-label={social.label}
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
  );
}
