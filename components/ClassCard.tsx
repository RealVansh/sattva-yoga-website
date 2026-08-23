"use client";

import { useState } from "react";
import type { YogaClass } from "@/data/siteData";
import EnquiryModal from "./EnquiryModal";

type ClassCardProps = {
  yogaClass: YogaClass;
};

export default function ClassCard({ yogaClass }: ClassCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBatch, setSelectedBatch] = useState<{name: string, time: string} | null>(null);

  const hasBatches = yogaClass.batches && yogaClass.batches.length > 0;

  const getModeLabel = (mode?: "offline" | "online" | "online-offline") => {
    if (mode === "offline") return "Offline";
    if (mode === "online") return "Online";
    if (mode === "online-offline") return "Online & Offline";
    return null;
  };

  const handleEnquireClick = (e: React.MouseEvent, batchName: string, batchTime: string) => {
    e.stopPropagation();
    setSelectedBatch({ name: batchName, time: batchTime });
    setModalOpen(true);
  };

  return (
    <>
      <article 
        onClick={() => hasBatches && setIsExpanded(!isExpanded)}
        className={`flex flex-col group rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg ${hasBatches ? 'cursor-pointer hover:-translate-y-1.5' : ''} ${isExpanded ? 'border-brand-green-300 ring-1 ring-brand-green-300' : 'border-brand-cream-200 hover:border-brand-green-100'}`}
      >
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-xl font-bold text-brand-brown-400 group-hover:text-brand-green-500 transition-colors">
            {yogaClass.title}
          </h3>
          {hasBatches && (
            <div className={`mt-1 transform transition-transform duration-300 ${isExpanded ? 'rotate-180 text-brand-green-500' : 'text-brand-brown-200'}`}>
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          )}
        </div>

          <p className={`mt-3 min-h-[4.5rem] text-sm leading-6 text-brand-brown-200`}>
          {yogaClass.description}
        </p>

        <ul
          className="mt-4 flex flex-wrap gap-2"
          aria-label={`${yogaClass.title} benefits`}
        >
          {yogaClass.benefits.map((benefit) => (
            <li
              key={benefit}
              className="rounded-full bg-brand-green-50 px-3 py-1 text-xs font-semibold text-brand-green-500"
            >
              {benefit}
            </li>
          ))}
        </ul>

        {/* Expandable Batches Section using Tailwind Grid trick */}
        <div 
          className={`grid transition-all duration-300 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0'}`}
        >
          <div className="overflow-hidden flex flex-col gap-3">
            <div className="h-px w-full bg-brand-cream-200 mb-2" />

            {yogaClass.title === "Personal Foundations" && (
              <p className="rounded-xl border border-brand-green-100 bg-brand-green-50 px-4 py-3 text-sm font-semibold text-brand-green-500">
                New to yoga? Start with Personal Foundations, then move to group batches.
              </p>
            )}
            
            {yogaClass.batches?.map((batch) => (
              <div 
                key={batch.id} 
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-brand-cream-200 bg-brand-cream-50 p-4"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-brand-brown-400">{batch.name}</h4>
                    {getModeLabel(batch.mode) && (
                      <span className="inline-flex items-center rounded-md bg-brand-green-50 px-2 py-0.5 text-xs font-medium text-brand-green-500">
                        {getModeLabel(batch.mode)}
                      </span>
                    )}
                    {batch.status === 'forming' && (
                      <span className="inline-flex items-center rounded-md bg-brand-brown-100 px-2 py-0.5 text-xs font-medium text-brand-brown-400">
                        Batch Paused
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-brand-brown-300">
                    <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {batch.time}
                  </div>
                </div>
                
                <button
                  onClick={(e) => handleEnquireClick(e, batch.name, batch.time)}
                  className="shrink-0 rounded-lg bg-brand-green-400 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green-400"
                >
                  Enquire
                </button>
              </div>
            ))}
          </div>
        </div>
      </article>

      {/* Renders safely outside the main flex structure but managed by this card component */}
      {selectedBatch && (
        <EnquiryModal 
          isOpen={modalOpen} 
          onClose={() => setModalOpen(false)} 
          className={yogaClass.title}
          batchName={selectedBatch.name}
          batchTime={selectedBatch.time}
        />
      )}
    </>
  );
}
