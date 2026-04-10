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
    <footer className="bg-brand-brown-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:px-8">
        {/* Brand column */}
        <section>
          <h2 className="mb-4 text-lg font-bold text-brand-cream-100 font-[var(--font-playfair)]">
            Sattva Yoga Classes
          </h2>
          <p className="max-w-sm text-sm leading-6 text-brand-cream-300">
            Calm, mindful hatha yoga programs for personal wellness and
            corporate teams in Tambaram, Chennai.
          </p>
          <p className="mt-4 text-sm text-brand-cream-200">
            Phone: +91 9941764814
          </p>
          <p className="mt-2 max-w-sm text-sm leading-6 text-brand-cream-200">
            9/25, Duraisamy Nagar, East Tambaram, Chennai - 600059
          </p>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=12.920822,80.1282402"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-gold-300 transition-colors hover:text-brand-gold-200"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            Get Directions on Google Maps
          </a>
          <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-brand-gold-300">
            No other branches
          </p>
        </section>

        {/* Navigation */}
        <section>
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand-gold-300 mb-4">
            Quick Links
          </h2>
          <ul className="flex flex-col gap-2">
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
      <div className="border-t border-brand-brown-300/30 px-6 py-5 text-center text-xs text-brand-cream-300">
        © {new Date().getFullYear()} Sattva Yoga Classes. All rights reserved.
      </div>
    </footer>
  );
}
