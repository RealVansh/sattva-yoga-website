import Image from "next/image";
import Button from "@/components/Button";

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-brand-cream-200 via-brand-cream-100 to-brand-cream-50">
      {/* Decorative background circles */}
      <div className="absolute top-10 right-10 h-64 w-64 rounded-full bg-brand-gold-100/40 blur-3xl" />
      <div className="absolute bottom-10 left-10 h-48 w-48 rounded-full bg-brand-green-50/50 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 pt-10 pb-10 sm:pt-12 sm:pb-14 lg:px-8 text-center">
        {/* Logo */}
        <div className="animate-scale-in">
          <Image
            src="/logo.png"
            alt="Sattva Yoga Classes"
            width={300}
            height={300}
            className="drop-shadow-lg"
            priority
          />
        </div>

        {/* Heading */}
        <h1 className="-mt-8 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-brand-brown-400 sm:text-5xl lg:text-6xl animate-fade-in-up delay-300">
          Transform Your Life with{" "}
          <span className="text-brand-green-400">Sattva Yoga Classes</span>
        </h1>

        {/* Subtext */}
        <p className="max-w-2xl text-lg leading-8 text-brand-brown-300 animate-fade-in-up delay-400">
          Build strength, calm your mind, and restore balance through traditional Hatha yoga sessions designed for all levels and lifestyles.
        </p>

        {/* Conversion CTA */}
        <div className="-mt-2 flex flex-wrap items-center justify-center gap-3 animate-fade-in-up delay-500">
          <Button href="https://wa.me/919941764814">
            Chat on WhatsApp
          </Button>
          <Button href="/contact" variant="secondary">
            Book Free Trial
          </Button>
        </div>

        {/* Badge */}
        <div className="-mt-4 animate-fade-in delay-200">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-gold-100 px-5 py-2 text-sm font-semibold text-brand-brown-400 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-brand-gold-300 animate-pulse" />
            Holistic Hatha Yoga for Mind &amp; Body
          </span>
        </div>
      </div>
    </section>
  );
}
