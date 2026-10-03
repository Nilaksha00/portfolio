import { footer } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="max-w-md pb-8 text-sm leading-relaxed text-white/35">
      <p>
        © {footer.year} {footer.name}. Designed and built with Next.js, Tailwind
        CSS and Framer Motion.
      </p>
    </footer>
  );
}
