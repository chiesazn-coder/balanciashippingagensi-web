// app/components/BenefitsCashToMaster.tsx
import React from "react";

type Benefit = {
  title: string;
  desc: string;
};

const benefits: Benefit[] = [
  {
    title: "Efficient Financial Support",
    desc: "CTM ensures the availability of immediate funds, streamlining the ship’s operations during its time in port.",
  },
  {
    title: "Convenience for Ship’s Master",
    desc: "By receiving cash on board, the ship’s master can quickly address small expenses without the need for external transactions.",
  },
  {
    title: "Provision Procurement",
    desc: "CTM allows the purchase of provisions such as food, fuel, and water, ensuring the crew’s needs are met during the port stay.",
  },
  {
    title: "Crew Welfare",
    desc: "The funds obtained through CTM can be used to provide welfare support to the crew, enhancing their well-being and morale.",
  },
  {
    title: "Swift Port Transactions",
    desc: "Cash to Master expedites payment of various port-related fees and services, ensuring a smooth port visit.",
  },
  {
    title: "Flexibility in Expenses",
    desc: "Ship managers can tailor the cash amount provided to suit the specific requirements of each port visit.",
  },
  {
    title: "Security Measures",
    desc: "CTM services are managed with security protocols to safeguard the transfer of funds on board.",
  },
  {
    title: "Proactive Financial Planning",
    desc: "Ship managers coordinate CTM services to ensure sufficient funds are available for all anticipated expenses.",
  },
  {
    title: "Documentation and Accountability",
    desc: "All CTM transactions are recorded and documented to maintain financial accountability.",
  },
  {
    title: "Compliance with Regulations",
    desc: "CTM transactions must adhere to local regulations and customs requirements in each port of call.",
  },
];

export default function BenefitsCashToMaster() {
  return (
    <section className="w-full bg-[#0B2A4A]">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-16">
        <h2 className="text-white font-extrabold tracking-tight text-4xl md:text-5xl lg:text-6xl">
          BENEFITS OF CASH TO MASTER
        </h2>

        <div className="mt-10 md:mt-12">
          <ul className="space-y-6 md:space-y-7">
            {benefits.map((item) => (
              <li key={item.title} className="flex items-start gap-4">
                <span className="mt-[10px] h-2 w-2 rounded-full bg-white/90 shrink-0" />
                <p className="text-white/90 leading-relaxed text-lg md:text-xl">
                  <span className="font-extrabold text-white">
                    {item.title}
                    <span className="font-extrabold">:</span>{" "}
                  </span>
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-12 md:mt-14">
            <p className="text-white/85 leading-relaxed text-lg md:text-xl">
              In summary, Cash to Master services play a vital role in providing
              financial support to ships during their port stays. It ensures the
              smooth functioning of vessel operations and crew welfare while
              adhering to financial regulations and security measures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
