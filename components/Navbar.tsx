"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/corporate", label: "Corporate Yoga" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Track scroll position for visual changes
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Spacer behind the floating bar so content doesn't overlap */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          scrolled
            ? "bg-white/70 backdrop-blur-xl shadow-[0_1px_3px_rgba(93,53,28,0.08)]"
            : "bg-transparent"
        }`}
      />

      <nav
        className="relative mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-3 lg:px-8"
        aria-label="Main Navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.png"
            alt="Sattva Yoga Classes Logo"
            width={40}
            height={40}
            className="transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <span className="text-lg font-bold tracking-tight text-brand-brown-400 font-[var(--font-playfair)]">
            Sattva Yoga Classes
          </span>
        </Link>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="relative z-10 rounded-xl p-2.5 text-brand-brown-300 hover:bg-brand-cream-200/80 transition-colors md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle menu</span>
          <div className="flex h-5 w-5 flex-col items-center justify-center gap-1.5">
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                open ? "translate-y-[4px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                open ? "opacity-0 scale-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                open ? "-translate-y-[4px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "text-brand-green-500"
                      : "text-brand-brown-300 hover:text-brand-brown-400"
                  }`}
                >
                  {link.label}
                  {/* Active indicator dot */}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-brand-green-400" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`relative border-t border-brand-cream-200/50 bg-white/80 backdrop-blur-xl md:hidden overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="mx-auto flex max-w-screen-2xl flex-col px-6 py-3 gap-1">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-brand-green-50 text-brand-green-500"
                      : "text-brand-brown-300 hover:bg-brand-cream-100 hover:text-brand-brown-400"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-green-400" />
                  )}
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
