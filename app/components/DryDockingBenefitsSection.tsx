// app/dry-docking/components/DryDockingBenefitsSection.tsx
import React from "react";

const benefits = [
  "Inspection, maintenance ensure vessel safety, reliability",
  "Address issues for extended service life",
  "Antifouling paint improves performance, fuel efficiency",
  "Comply with regulations through inspections, certifications",
  "Proactive maintenance saves costs",
  "Enhanced safety for crew, cargo, environment",
  "Implement upgrades, comply with regulations",
  "Optimize speed, maneuverability, efficiency",
  "Minimize downtime with planned dry docking",
  "Increase resale value with proper maintenance",
];

export default function DryDockingBenefitsSection() {
  return (
    <section className="w-full bg-[#0B2A4A]">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-16">
        {/* Title */}
        <h2 className="text-white font-extrabold tracking-tight text-4xl md:text-5xl lg:text-6xl">
          BENEFITS OF DRY DOCKING
        </h2>

        {/* Bullet list */}
        <div className="mt-10 md:mt-12">
          <ul className="space-y-4 md:space-y-5">
            {benefits.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className="mt-[10px] h-2 w-2 rounded-full bg-white shrink-0" />
                <p className="text-white/90 text-lg md:text-xl leading-relaxed">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Conclusion */}
        <div className="mt-12 md:mt-14">
          <p className="text-white/85 text-lg md:text-xl leading-relaxed">
            Overall, dry docking is a crucial process that offers a range of
            benefits, allowing ship managers to ensure the longevity, safety,
            and reliability of their vessels while adhering to industry
            regulations and standards.
          </p>
        </div>
      </div>
    </section>
  );
}
