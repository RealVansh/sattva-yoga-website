import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const baseStyles =
  "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer";

const variants = {
  primary:
    "bg-brand-green-400 text-white shadow-md hover:bg-brand-green-500 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0",
  secondary:
    "bg-white text-brand-brown-400 ring-1 ring-brand-cream-300 hover:ring-brand-green-200 hover:bg-brand-green-50 hover:-translate-y-0.5 active:translate-y-0",
};

export default function Button({
  children,
  variant = "primary",
  href,
  className = "",
  type = "button",
  ...rest
}: ButtonProps) {
  const classes = `${baseStyles} ${variants[variant]} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
