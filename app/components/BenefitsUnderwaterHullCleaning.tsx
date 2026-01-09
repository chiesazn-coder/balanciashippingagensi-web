// app/underwater-hull-cleaning/components/BenefitsUnderwaterHullCleaning.tsx
import React from "react";

type Benefit = {
  title: string;
  desc: string;
};

const benefits: Benefit[] = [
  { title: "Fuel efficiency", desc: "Smooth hull reduces resistance, saves fuel." },
  { title: "Speed and performance", desc: "Clean hull improves maneuverability, enhances speed." },
  { title: "Corrosion prevention", desc: "Hull cleaning extends ship’s lifespan." },
  { title: "Environmental compliance", desc: "Clean hull prevents invasive species spread." },
  { title: "Cost savings", desc: "Improved efficiency reduces fuel and maintenance costs." },
  { title: "Enhanced safety", desc: "Clean hull improves stability, reduces risks." },
  { title: "Regulatory compliance", desc: "Regular hull inspections required by authorities." },
  { title: "Professional cleaning", desc: "Trained divers, specialized equipment ensure effective cleaning." },
  { title: "Cleaning frequency", desc: "Depends on vessel’s profile, routes, and environment." },
  { title: "Biofouling management", desc: "Prevents excessive marine growth, maintains hull." },
];

export default function BenefitsUnderwaterHullCleaning() {
  return (
    <section className="w-full bg-[#0B2A4A]">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-16">
        {/* Title */}
        <h2 className="text-white font-extrabold tracking-tight text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
          BENEFITS OF UNDERWATER HULL
          <br />
          CLEANING
        </h2>

        {/* Bullets */}
        <div className="mt-10 md:mt-12">
          <ul className="space-y-5 md:space-y-6">
            {benefits.map((b) => (
              <li key={b.title} className="flex items-start gap-4">
                <span className="mt-[10px] h-2 w-2 rounded-full bg-white/90 shrink-0" />
                <p className="text-white/90 leading-relaxed text-lg md:text-xl">
                  <span className="font-extrabold text-white">
                    {b.title}
                    <span className="font-extrabold">:</span>{" "}
                  </span>
                  {b.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Conclusion */}
        <div className="mt-12 md:mt-14">
          <p className="text-white/85 leading-relaxed text-lg md:text-xl">
            In conclusion, regular hull cleaning is a crucial aspect of ship maintenance to optimize
            performance, ensure environmental compliance, and extend the vessel’s operational life.
            Utilizing professional hull cleaning services and adhering to proper cleaning schedules
            contribute to the overall efficiency and safety of the ship.
          </p>
        </div>
      </div>
    </section>
  );
}
