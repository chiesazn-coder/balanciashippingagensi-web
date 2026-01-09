// app/components/ServiceProcessSection.tsx
import React from "react";

type ProcessItem = {
  label: string;
};

const items: ProcessItem[] = [
  { label: "PRE-PLAN" },
  { label: "SECURE AND RELIABLE" },
  { label: "COMMUNICATION" },
  { label: "DOCUMENTATION" },
  { label: "OPTIMIZED" },
  { label: "RECONCILIATION" },
];

export default function ServiceProcessSection() {
  return (
    <section className="w-full bg-[#F3FBFB]">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-16">
        <h2 className="font-extrabold tracking-tight leading-[1.05] text-[#0F3C78] text-4xl sm:text-5xl md:text-6xl">
          WE ALWAYS FOCUS ON{" "}
          <span className="text-[#F2672E]">EFFECTIVENESS</span>
          <br />
          AND <span className="text-[#F2672E]">EFFICACY</span>
        </h2>

        <p className="mt-8 max-w-4xl text-[#0F3C78] font-semibold leading-relaxed text-lg md:text-xl">
          We’re very adaptive to changes and suggestions. Contact us if you need
          tailored service. By default, these are our Service Processes.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-10 md:mt-16">
          {items.map((it) => (
            <div
              key={it.label}
              className="h-[92px] sm:h-[110px] w-full bg-[#163E86] border border-white/15
                         flex items-center justify-center text-center
                         shadow-[0_14px_22px_rgba(0,0,0,0.22)]
                         ring-1 ring-black/5"
            >
              <span className="text-white font-extrabold tracking-wide text-xl sm:text-2xl">
                {it.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
