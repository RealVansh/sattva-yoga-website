"use client";

import { FormEvent, useState, useEffect } from "react";
import Button from "@/components/Button";

type EnquiryModalProps = {
  isOpen: boolean;
  onClose: () => void;
  className: string;
  batchName: string;
  batchTime: string;
};

// Add your email address here!
const RECEIVER_EMAIL = "vanshv0920@gmail.com";

export default function EnquiryModal({ isOpen, onClose, className, batchName, batchTime }: EnquiryModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      await fetch(`https://formsubmit.co/ajax/${RECEIVER_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          interestedIn: className,
          batch: batchName,
          timings: batchTime,
          _subject: `New Quick Enquiry for ${className} from ${name}`,
        }),
      });

      setName("");
      setPhone("");
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 3000);
    } catch (error) {
      console.error("Failed to send inquiry:", error);
      alert("Something went wrong. Please try contacting us directly.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Dimmed Overlay */}
      <div 
        className="absolute inset-0 bg-brand-brown-400/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal Dialog */}
      <div className="relative w-full max-w-md transform overflow-hidden rounded-3xl bg-white p-8 text-left shadow-2xl transition-all animate-scale-in">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-6 top-6 text-brand-brown-200 hover:text-brand-brown-400 transition-colors"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h3 className="text-2xl font-bold text-brand-brown-400 font-[var(--font-playfair)]">
          Quick Enquiry
        </h3>
        
        <p className="mt-2 text-sm text-brand-brown-300">
          Leave your details and we&apos;ll get back to you regarding the <span className="font-semibold text-brand-green-500">{className} — {batchName}</span>.
        </p>

        {submitted ? (
          <div className="mt-6 rounded-xl bg-brand-green-50 border border-brand-green-100 px-4 py-4 text-sm font-semibold text-brand-green-500 animate-fade-in flex items-center gap-2">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Got it! We will contact you shortly.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="modal-name" className="sr-only">Full Name</label>
              <input
                id="modal-name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Full Name"
                className="w-full rounded-xl border-0 bg-brand-cream-50 px-4 py-3.5 text-brand-brown-400 shadow-sm ring-1 ring-inset ring-brand-cream-200 focus:ring-2 focus:ring-inset focus:ring-brand-green-300 placeholder:text-brand-brown-200 sm:text-sm sm:leading-6"
              />
            </div>
            <div>
              <label htmlFor="modal-phone" className="sr-only">Phone Number</label>
              <input
                id="modal-phone"
                name="phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Contact Number (WhatsApp preferred)"
                className="w-full rounded-xl border-0 bg-brand-cream-50 px-4 py-3.5 text-brand-brown-400 shadow-sm ring-1 ring-inset ring-brand-cream-200 focus:ring-2 focus:ring-inset focus:ring-brand-green-300 placeholder:text-brand-brown-200 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="pt-2">
              <Button type="submit" variant="primary" className="w-full justify-center text-center">
                {isLoading ? "Sending..." : "Request Call Back"}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
