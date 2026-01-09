import React from 'react';

const WhatIsHusbandry = () => {
  const servicePoints = [
    { label: "Port Agency Services", desc: "Representing the ship's interests and handling administrative tasks like documentation, customs, and permits." },
    { label: "Crew Assistance", desc: "Supporting crew members with crew changes, shore passes, and personal/medical needs." },
    { label: "Supply and Provisioning", desc: "providing Fuel, Fresh Water, and Provisions for the ship's crew while in port." },
    { label: "Technical Support", desc: "Organizing technical services, repairs, and spare parts if needed." },
    { label: "Waste Removal", desc: "Ensuring proper disposal of ship-generated waste as per environmental regulations." },
    { label: "Cash to Master (CTM)", desc: "Assisting with delivering funds to the ship's master for petty cash expenses." },
    { label: "Crew Welfare", desc: "Helping with crew recreational activities, transportation, and welfare matters." },
    { label: "Documentation and Reporting", desc: "Maintaining accurate records and providing necessary reports to ship owners and operators." }
  ];

  return (
    <section className="w-full bg-[#F0F9FA] py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Judul Utama */}
        <h2 className="text-[#1A3B7A] text-4xl md:text-5xl font-black uppercase tracking-tight mb-10 leading-tight">
          WHAT IS <span className="text-[#E86B39]">HUSBANDRY SERVICE</span>?
        </h2>

        {/* Deskripsi Pembuka */}
        <div className="text-[#1A3B7A] text-lg md:text-xl leading-relaxed space-y-6 mb-10 text-justify">
          <p>
            Husbandry services in the context of ship agency refer to a range of services provided to ships while 
            they are in port or at anchor. These services are essential to ensure the smooth operations of the vessel 
            and the well-being of its crew during their stay in port. The term &quot;husbandry&quot; comes from the maritime 
            tradition where a &quot;ship&apos;s husband&quot; was responsible for managing the vessel&apos;s affairs onshore:
          </p>
        </div>

        {/* Daftar Poin Layanan */}
        <ul className="space-y-4 mb-10">
          {servicePoints.map((point, index) => (
            <li key={index} className="flex gap-3 items-start text-[#1A3B7A] text-lg md:text-xl leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#1A3B7A] shrink-0" />
              <p>
                <span className="font-bold">{point.label}:</span> {point.desc}
              </p>
            </li>
          ))}
        </ul>

        {/* Deskripsi Penutup */}
        <div className="text-[#1A3B7A] text-lg md:text-xl leading-relaxed text-justify">
          <p>
            Husbandry services are essential for efficient port stays. A reliable agency with a network of agents 
            ensures timely fulfillment of requirements, allowing shipowners to focus on core operations while their 
            vessels receive necessary support and care in port.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIsHusbandry;