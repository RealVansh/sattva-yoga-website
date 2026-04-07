import type { Testimonial } from "@/data/siteData";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="relative rounded-2xl border border-brand-cream-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-brand-gold-200 overflow-hidden">
      {/* Left accent border */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-brand-gold-300 to-brand-green-200" />

      {/* Quote icon */}
      <div className="mb-4 text-brand-gold-200">
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849H10v10H0z" />
        </svg>
      </div>

      {/* Stars */}
      <div
        className="mb-3 flex items-center gap-1 text-brand-gold-300"
        aria-label={`Rated ${testimonial.rating} out of 5`}
      >
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <svg
            key={`${testimonial.name}-star-${index}`}
            className="h-4 w-4 fill-current"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Comment */}
      <p className="text-sm leading-6 text-brand-brown-300 italic">
        &ldquo;{testimonial.comment}&rdquo;
      </p>

      {/* Author */}
      <div className="mt-4 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-green-50 text-brand-green-500 font-bold text-sm">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-bold text-brand-brown-400">
            {testimonial.name}
          </p>
          <p className="text-xs text-brand-brown-100">Verified Student</p>
        </div>
      </div>
    </article>
  );
}
