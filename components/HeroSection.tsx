import Image from "next/image";
import Button from "@/components/Button";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-brand-cream-200 via-brand-cream-100 to-brand-cream-50 grain-overlay"
    >
      {/* Atmospheric background elements */}
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-brand-gold-100/30 blur-[100px] animate-glow-breathe" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-brand-green-50/40 blur-[80px] animate-glow-breathe" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/3 h-[300px] w-[300px] rounded-full bg-brand-cream-300/20 blur-[60px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 pt-16 pb-16 sm:pt-20 sm:pb-20 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:pt-24 lg:pb-24">
        {/* Left side — Text content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Eyebrow */}
          <p className="inline-flex items-center gap-2 rounded-full bg-brand-green-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-brand-green-500 animate-fade-in">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-green-400 animate-pulse" />
            Sattva Yoga Classes
          </p>

          {/* Heading — dramatically larger */}
          <h1 className="mt-6 max-w-xl text-4xl font-bold leading-[1.1] tracking-tight text-brand-brown-400 sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up delay-200">
            Transform your body,{" "}
            <span className="text-brand-green-400">calm your mind</span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 max-w-lg text-lg leading-8 text-brand-brown-300 animate-fade-in-up delay-300 mx-auto lg:mx-0">
            Reconnect with yourself through traditional Hatha yoga. Personalized
            sessions designed for all levels and lifestyles. Join offline in
            Tambaram, Chennai or online from anywhere in the world.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 animate-fade-in-up delay-400 lg:justify-start">
            <Button href="https://wa.me/919941764814">
              Chat on WhatsApp
            </Button>
            <Button href="/classes" variant="secondary">
              Explore Programs
            </Button>
          </div>

          {/* Social proof badge */}
          <div className="mt-8 flex items-center justify-center gap-3 animate-fade-in delay-500 lg:justify-start">
            <div className="flex -space-x-2">
              {["K", "A", "R", "V"].map((letter, i) => (
                <div
                  key={letter}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-xs font-bold shadow-sm"
                  style={{
                    backgroundColor: [
                      "var(--green-50)",
                      "var(--gold-50)",
                      "var(--cream-200)",
                      "var(--green-100)",
                    ][i],
                    color: "var(--brown-400)",
                  }}
                >
                  {letter}
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-brown-300">
              <span className="font-bold text-brand-brown-400">30+ </span> active
              students &middot; Tambaram, Chennai &middot; Online worldwide
            </p>
          </div>
        </div>

        {/* Right side — Visual element */}
        <div className="relative flex-shrink-0 lg:w-[45%] animate-fade-in delay-300">
          {/* Decorative glow behind image */}
          <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-brand-green-200/30 via-brand-gold-200/20 to-brand-cream-300/30 blur-3xl animate-glow-breathe" />

          {/* Yoga image with organic mask */}
          <div className="relative mx-auto w-[280px] h-[340px] sm:w-[340px] sm:h-[420px] lg:w-[400px] lg:h-[480px]">
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-brand-cream-200/50 rotate-2">
              <Image
                src="/images/home_about_yoga.jpg"
                alt="Yoga practice at Sattva Yoga Classes, Tambaram Chennai"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 280px, (max-width: 1024px) 340px, 400px"
                priority
              />
              {/* Warm brand tint */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-brown-400/10 via-transparent to-brand-gold-300/5" />
            </div>

            {/* Floating accent shapes */}
            <div className="absolute -top-4 -right-4 h-20 w-20 rounded-2xl bg-brand-gold-200/40 blur-sm animate-gentle-float" />
            <div className="absolute -bottom-6 -left-6 h-16 w-16 rounded-full bg-brand-green-200/40 blur-sm animate-gentle-float" style={{ animationDelay: "3s" }} />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-cream-100 to-transparent" />
    </section>
  );
}
