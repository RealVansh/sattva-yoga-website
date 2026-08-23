import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/corporate", label: "Corporate" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-brand-brown-400">
      {/* Top gradient transition from page */}
      <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-brown-300/30 to-transparent" />

      {/* ── Emotional Closing Section ──────────────────── */}
      <div className="border-b border-brand-brown-300/20">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold-300/70">
            Begin with a breath
          </p>
          <blockquote className="mt-4 text-2xl font-bold leading-snug tracking-tight text-brand-cream-100 sm:text-3xl font-[var(--font-playfair)] max-w-2xl mx-auto">
            Your journey toward balance begins with a single breath.
          </blockquote>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-brand-gold-300 px-7 py-3.5 text-sm font-bold tracking-wide text-brand-brown-500 shadow-md transition-all duration-300 hover:bg-brand-gold-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Begin Your Journey
            </Link>
            <a
              href="https://wa.me/919941764814"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-brown-500/50 px-7 py-3.5 text-sm font-bold tracking-wide text-brand-cream-200 ring-1 ring-brand-brown-300/30 transition-all duration-300 hover:bg-brand-brown-500/70 hover:-translate-y-0.5"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* ── Footer Grid ───────────────────────────────── */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:px-8">
        {/* Brand column */}
        <section>
          <h2 className="mb-5 text-lg font-bold text-brand-cream-100 font-[var(--font-playfair)]">
            Sattva Yoga Classes
          </h2>
          <p className="max-w-sm text-sm leading-7 text-brand-cream-300">
            Calm, mindful hatha yoga programs for personal wellness and
            corporate teams in Tambaram, Chennai.
          </p>
          <p className="mt-5 text-sm text-brand-cream-200">
            Phone: +91 9941764814
          </p>
          <p className="mt-2 max-w-sm text-sm leading-6 text-brand-cream-200">
            9/25, Duraisamy Nagar, East Tambaram, Chennai - 600059
          </p>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=12.920822,80.1282402"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-gold-300 transition-colors hover:text-brand-gold-200"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            Get Directions on Google Maps
          </a>
          <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-brand-gold-300">
            No other branches
          </p>
        </section>

        {/* Navigation */}
        <section>
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand-gold-300 mb-5">
            Quick Links
          </h2>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-brand-cream-300 transition-colors hover:text-brand-gold-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-brown-300/30 px-6 py-6 text-center text-xs text-brand-cream-300">
        © {new Date().getFullYear()} Sattva Yoga Classes. All rights reserved.
      </div>
    </footer>
  );
}
