"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "How much space do I need to start a center?",
    answer:
      "Most centers operate comfortably in 800–1,200 sq. ft. We'll assess your proposed location during the site evaluation stage and confirm it meets our space and footfall criteria before you sign anything.",
  },
  {
    question: "Do I need a background in education or tech?",
    answer:
      "No prior experience in either is required. We look for strong local market knowledge and a willingness to follow our operating playbook. Staff training and curriculum delivery are covered in your launch support phase.",
  },
  {
    question: "What ongoing support does CLC provide?",
    answer:
      "Every franchisee gets a dedicated regional partner, marketing assets and campaign support, staff training materials, and access to our operations dashboard for performance tracking — for the life of the agreement, not just launch.",
  },
  {
    question: "How is the royalty structured?",
    answer:
      "Royalties are a flat percentage of monthly gross revenue, billed and reconciled through your franchise portal. There are no hidden tiers — the exact rate is laid out in the franchise agreement you'll review in Week 3.",
  },
  {
    question: "How long does the application process take?",
    answer:
      "From submitting your application to opening day is typically 8–10 weeks, depending on how quickly your site evaluation and build-out checklist are completed. Most of that time is your build-out, not waiting on us.",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="bg-[#0a0e14] px-6 py-16 sm:py-20 md:py-24 lg:mx-28">
      <div className="max-w-3xl">
        {/* Eyebrow */}
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-8 bg-[#10B981]" aria-hidden="true" />
          <span className="text-xs font-medium tracking-[0.2em] text-[#10B981]">
            FREQUENTLY ASKED
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-[2.75rem]">
          Questions before you apply
        </h2>

        {/* Accordion */}
        <div className="mt-10 border-t border-slate-800 sm:mt-12">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div key={faq.question} className="border-b border-slate-800">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(index)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-violet-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60 sm:py-6"
                  >
                    <span className="text-base font-semibold text-white sm:text-lg">
                      {faq.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className="relative flex h-5 w-5 shrink-0 items-center justify-center text-violet-400"
                    >
                      <span className="absolute h-px w-3 bg-current" />
                      <span
                        className={`absolute h-3 w-px bg-current transition-transform duration-200 ${
                          isOpen ? "scale-y-0" : "scale-y-100"
                        }`}
                      />
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid overflow-hidden transition-all duration-200 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0">
                    <p className="pb-5 pr-10 text-sm leading-relaxed text-slate-400 sm:pb-6 sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}