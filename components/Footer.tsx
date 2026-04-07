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
            Calm, mindful yoga programs for personal wellness and corporate
            teams.
          </p>
          <p className="mt-4 text-sm text-brand-cream-200">
            Phone: +91 9941764814
          </p>
          <p className="mt-2 max-w-sm text-sm leading-6 text-brand-cream-200">
            9/25, Duraisamy Nagar, East Tambaram, Chennai - 600059
          </p>
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
