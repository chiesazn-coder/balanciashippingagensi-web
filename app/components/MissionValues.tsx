"use client";

import { useState } from "react";

const missionData = [
  {
    id: "harmony",
    label: "HARMONY",
    content: [
      "Represents the commitment to fostering a positive and collaborative environment where individuals work together cohesively, respecting one another's differences and contributing to a collective goal. This core value emphasizes the importance of teamwork, effective communication, and a shared sense of purpose.",
      "Balancia Ship Agency values harmony and encourages employees to collaborate and work together across departments and roles. This leads to improved efficiency, idea sharing, and the pooling of diverse perspectives for better decision-making.",
      "Incorporating \"Harmony\" as a core value encourages a company to focus on building strong relationships between our company and our customers, fostering mutual respect, and creating an environment where everyone can thrive. It promotes a sense of belonging, emotional well-being, and a positive reputation both within the company and in the broader business community."
    ]
  },
  {
    id: "enable",
    label: "ENABLE",
    content: [
      "Focuses on empowering our team and our clients by providing the necessary tools, knowledge, and environment to succeed. We believe that by enabling others, we create a ripple effect of growth and excellence throughout the maritime industry.",
      "We strive to remove barriers and streamline processes, allowing for faster response times and more reliable service delivery across all Indonesian ports.",
      "Enabling also means continuous investment in our human resources and technology, ensuring that Balancia remains at the forefront of ship agency innovation."
    ]
  },
  {
    id: "kaizen",
    label: "KAIZEN",
    content: [
      "Derived from the Japanese philosophy of 'continuous improvement'. In Balancia, Kaizen means we never settle for the status quo. We are constantly looking for ways to refine our operations and enhance customer satisfaction.",
      "Every team member is encouraged to suggest small, incremental changes that lead to significant long-term improvements in our service quality and operational safety.",
      "Our commitment to Kaizen ensures that our clients benefit from the most efficient, cost-effective, and modern ship agency practices available today."
    ]
  }
];

export default function MissionValues() {
  const [activeTab, setActiveTab] = useState("harmony");

  // Mencari data yang aktif berdasarkan state activeTab
  const activeData = missionData.find((item) => item.id === activeTab);

  return (
    <section className="w-full bg-[#0B1D3F] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Title Section */}
        <div className="mb-12">
          <h2 className="text-white text-4xl md:text-5xl font-black uppercase tracking-tight">
            Our Mission
          </h2>
          <p className="text-white/80 mt-6 text-lg max-w-4xl leading-relaxed">
            We are a leading port agent service provider, steadfastly committed to ensuring our Customers attain 
            their objectives with unparalleled satisfaction. We extend competitive pricing and tailored services, 
            consistently upholding the highest quality benchmarks. Our primary role is to safeguard the interests 
            of the vessel&apos;s owner/principal and ensure optimal financial prudence.
          </p>
        </div>

        {/* Tab Headers */}
        <div className="flex w-full">
          {missionData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-6 text-xl md:text-2xl font-black tracking-widest uppercase transition-all duration-300 rounded-t-[1.5rem] ${
                activeTab === tab.id
                  ? "bg-white text-[#1A3B7A] shadow-[0_-4px_10px_rgba(0,0,0,0.1)]"
                  : "bg-[#1A3B7A]/40 text-white/50 hover:bg-[#1A3B7A]/60"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Card */}
        <div className="bg-white rounded-b-[1.5rem] p-8 md:p-16 shadow-2xl min-h-[400px]">
          <div className="flex flex-col gap-8">
            {activeData?.content.map((paragraph, index) => (
              <p 
                key={index} 
                className="text-[#1A3B7A] text-lg md:text-xl leading-relaxed animate-in fade-in slide-in-from-bottom-2 duration-500"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}