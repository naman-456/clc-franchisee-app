"use client";

import type { ReactNode } from "react";

interface Step {
  number: string;
  title: string;
  description: string;
  timeframe: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Submit application",
    description:
      "Tell us about yourself, your city, and your space — takes about 10 minutes.",
    timeframe: "DAY 1",
  },
  {
    number: "02",
    title: "Screening call",
    description:
      "A CLC team member walks through your background, goals, and market fit.",
    timeframe: "DAY 2–4",
  },
  {
    number: "03",
    title: "Site evaluation",
    description:
      "We assess your proposed location against our space and footfall criteria.",
    timeframe: "WEEK 2",
  },
  {
    number: "04",
    title: "Agreement & setup",
    description:
      "Sign the franchise agreement and begin center build-out with our checklist.",
    timeframe: "WEEK 3–8",
  },
  {
    number: "05",
    title: "Launch support",
    description:
      "Staff training, marketing kickoff, and your first batch intake — fully guided.",
    timeframe: "WEEK 8+",
  },
];

export function HowItWorks(): ReactNode {
  return (
    <section className="bg-[#0a0e14] px-6 py-16 sm:py-20 md:py-24">
      <div className="sm:mx-12 lg:mx-28 max-w-3xl">
        {/* Eyebrow */}
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-8 bg-emerald-400" aria-hidden="true" />
          <span className="text-xs font-medium tracking-[0.2em] text-emerald-400">
            HOW IT WORKS
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-[2.75rem]">
          From application to launch
        </h2>

        {/* Subheading */}
        <p className="mt-4 max-w-xl text-base text-slate-400 sm:text-lg">
          A structured five-step path — each stage clears the way for the
          next.
        </p>

        {/* Timeline */}
        <ol className="mt-12 sm:mt-16">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;
            return (
              <li key={step.number} className="relative flex gap-5 sm:gap-6">
                {/* Marker + connecting line */}
                <div className="flex flex-col items-center">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-emerald-400/40 bg-[#0d1420] sm:h-11 sm:w-11"
                    aria-hidden="true"
                  >
                    <span className="text-xs font-semibold text-emerald-400 sm:text-sm">
                      {step.number}
                    </span>
                  </div>
                  {!isLast && (
                    <span
                      className="w-px flex-1 bg-slate-700/60"
                      aria-hidden="true"
                    />
                  )}
                </div>

                {/* Content */}
                <div className={isLast ? "pb-0" : "pb-10 sm:pb-12"}>
                  <h3 className="pt-1.5 text-lg font-semibold text-white sm:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400 sm:text-base">
                    {step.description}
                  </p>
                  <span className="mt-3 block text-xs font-medium tracking-wider text-slate-500">
                    {step.timeframe}
                  </span>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}