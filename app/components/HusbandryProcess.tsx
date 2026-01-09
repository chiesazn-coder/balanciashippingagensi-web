import React from 'react';

const HusbandryProcess = () => {
  const processes = [
    "PRE-PLAN", "LOCAL AGENTS", "COMMUNICATION", 
    "TIMELY", "PROBLEM-SOLVING", "DOCUMENTATION"
  ];

  return (
    <section className="bg-[#F4F9FA] py-20 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1D3F] mb-4">
          WE ALWAYS FOCUS ON <span className="text-[#E65100]">EFFECTIVENESS</span>
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1D3F] mb-8">
          AND <span className="text-[#E65100]">EFFICACY</span>
        </h2>
        
        <p className="text-[#0B1D3F] max-w-3xl mx-auto mb-12 font-medium">
          We&apos;re very adaptive to changes and suggestions. Contact us if you need tailored service. By default, these are our Service Processes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {processes.map((item, index) => (
            <div 
              key={index}
              className="bg-[#1A3668] text-white py-6 px-4 rounded shadow-lg font-bold text-xl tracking-wider flex items-center justify-center"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HusbandryProcess;