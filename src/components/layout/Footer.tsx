"use client";

import { footer, navLinks, socials } from "@/data/portfolio";
import { SocialIcons } from "@/components/ui/SocialIcons";

export function Footer() {
  const Icon = footer.icon;
  const quickLinks = socials.filter((s) =>
    ["github", "linkedin", "mail"].includes(s.icon),
  );

  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="container-px mx-auto max-w-7xl py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <a
              href="#home"
              className="flex items-center gap-2 font-display text-lg font-semibold text-white"
            >
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent/15 text-accent">
                <Icon className="h-4 w-4" />
              </span>
              {footer.name}
            </a>
            <p className="mt-3 text-sm text-white/45">{footer.blurb}</p>
            <div className="mt-5">
              <SocialIcons />
            </div>
          </div>

          <div className="flex gap-16">
            <nav>
              <p className="text-xs font-medium uppercase tracking-wide text-white/35">
                Navigate
              </p>
              <ul className="mt-4 space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-white/55 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <nav>
              <p className="text-xs font-medium uppercase tracking-wide text-white/35">
                Connect
              </p>
              <ul className="mt-4 space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-sm text-white/55 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-6 text-xs text-white/35 sm:flex-row">
          <p>
            © {footer.year} {footer.name}. All rights reserved.
          </p>
          <p className="font-mono">Built with Next.js, Tailwind &amp; Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
