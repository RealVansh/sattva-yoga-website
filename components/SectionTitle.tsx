type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionTitleProps) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-brand-green-400">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight text-brand-brown-400 sm:text-4xl md:text-5xl leading-[1.15]">
        {title}
      </h2>
      {/* Gold decorative divider */}
      <div className={centered ? "gold-divider-centered" : "gold-divider"} />
      {description ? (
        <p className="mt-6 text-lg leading-8 text-brand-brown-200">
          {description}
        </p>
      ) : null}
    </div>
  );
}
