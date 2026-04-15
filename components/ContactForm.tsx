"use client";

import { FormEvent, useState } from "react";

import Button from "@/components/Button";
import { classes } from "@/data/siteData";

// Add your email address here!
const RECEIVER_EMAIL = "vanshv0920@gmail.com"; 

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [preferredType, setPreferredType] = useState("");
  const [preferredBatch, setPreferredBatch] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Get batch timings for group class
  const groupClass = classes.find(c => c.title === "Daily Group Classes");
  const groupBatches = groupClass?.batches || [];

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
          message,
          preferredType,
          preferredBatch: preferredType === "group" ? preferredBatch : "N/A",
          _subject: `New Yoga Class Inquiry from ${name}`,
        }),
      });

      setName("");
      setPhone("");
      setMessage("");
      setPreferredType("");
      setPreferredBatch("");
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Failed to send inquiry:", error);
      alert("Something went wrong. Please try contacting us via WhatsApp instead.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-brand-cream-200 bg-white p-6 shadow-sm"
    >
      {submitted && (
        <div className="rounded-xl bg-brand-green-50 border border-brand-green-100 px-4 py-3 text-sm font-semibold text-brand-green-500 animate-fade-in flex items-center gap-2">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Thank you! We&apos;ll get back to you soon.
        </div>
      )}

      <div>
        <label
          htmlFor="name"
          className="mb-1.5 block text-sm font-semibold text-brand-brown-400"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          className="w-full rounded-xl border border-brand-cream-200 bg-brand-cream-50 px-4 py-3 text-sm text-brand-brown-400 outline-none transition-all focus:border-brand-green-200 focus:ring-2 focus:ring-brand-green-50 placeholder:text-brand-brown-100"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="preferredType"
          className="mb-1.5 block text-sm font-semibold text-brand-brown-400"
        >
          What are you interested in?
        </label>
        <select
          id="preferredType"
          name="preferredType"
          value={preferredType}
          onChange={(e) => {
            setPreferredType(e.target.value);
            setPreferredBatch("");
          }}
          required
          className="w-full rounded-xl border border-brand-cream-200 bg-brand-cream-50 px-4 py-3 text-sm text-brand-brown-400 outline-none transition-all focus:border-brand-green-200 focus:ring-2 focus:ring-brand-green-50"
        >
          <option value="">Choose an option</option>
          <option value="personal">Personal (1-on-1)</option>
          <option value="group">Group Classes</option>
          <option value="prenatal">Prenatal & Postnatal</option>
          <option value="corporate">Corporate Wellness</option>
        </select>
      </div>

      {preferredType === "group" && (
        <div>
          <label
            htmlFor="preferredBatch"
            className="mb-1.5 block text-sm font-semibold text-brand-brown-400"
          >
            Preferred Batch Timing
          </label>
          <select
            id="preferredBatch"
            name="preferredBatch"
            value={preferredBatch}
            onChange={(e) => setPreferredBatch(e.target.value)}
            required
            className="w-full rounded-xl border border-brand-cream-200 bg-brand-cream-50 px-4 py-3 text-sm text-brand-brown-400 outline-none transition-all focus:border-brand-green-200 focus:ring-2 focus:ring-brand-green-50"
          >
            <option value="">Select a batch</option>
            {groupBatches.map((batch) => (
              <option key={batch.id} value={batch.time}>
                {batch.name} — {batch.time}
              </option>
            ))}
          </select>
        </div>
      )}

      <div>
        <label
          htmlFor="phone"
          className="mb-1.5 block text-sm font-semibold text-brand-brown-400"
        >
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          inputMode="numeric"
          pattern="[0-9]*"
          value={phone}
          onChange={(event) => setPhone(event.target.value.replace(/[^0-9]/g, ''))}
          required
          className="w-full rounded-xl border border-brand-cream-200 bg-brand-cream-50 px-4 py-3 text-sm text-brand-brown-400 outline-none transition-all focus:border-brand-green-200 focus:ring-2 focus:ring-brand-green-50 placeholder:text-brand-brown-100"
          placeholder="Your contact number"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-semibold text-brand-brown-400"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
          rows={5}
          className="w-full rounded-xl border border-brand-cream-200 bg-brand-cream-50 px-4 py-3 text-sm text-brand-brown-400 outline-none transition-all focus:border-brand-green-200 focus:ring-2 focus:ring-brand-green-50 placeholder:text-brand-brown-100 resize-none"
          placeholder="Tell us your goals and preferred class type"
        />
      </div>

      <Button type="submit" className="w-full sm:w-auto" disabled={isLoading}>
        {isLoading ? "Sending..." : "Send Inquiry"}
      </Button>

      <p className="text-xs leading-5 text-brand-brown-200">
        We usually reply within 12-24 hours. Your details stay private and are never shared.
      </p>
    </form>
  );
}
