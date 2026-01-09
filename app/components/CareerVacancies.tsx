import React from 'react';

export default function CareerVacancies() {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12 font-sans">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* SECTION 1: VACANCIES */}
        <div className="space-y-8">
          <h2 className="text-[#1A3B7A] text-3xl md:text-5xl font-black uppercase tracking-tight">
            VACANCIES WITH BALANCIA SHIP AGENCY
          </h2>
          
          <div className="border-[3px] border-[#1A3B7A] rounded-[2rem] p-8 md:p-12">
            <p className="text-[#1A3B7A] text-lg md:text-xl font-bold leading-relaxed mb-4">
              Thank you for your interest in employment opportunities with BALANCIA Ship Agency. 
              All open positions are listed here. Please choose your category of interest:
            </p>
            <ul className="list-disc list-inside text-[#1A3B7A] text-lg md:text-xl font-bold ml-2">
              <li>n/a</li>
            </ul>
          </div>
        </div>

        {/* SECTION 2: UNSOLICITED APPLICATIONS */}
        <div className="space-y-8">
          <h2 className="text-[#1A3B7A] text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight">
            UNSOLICITED APPLICATIONS ARE WELCOME
          </h2>
          
          <div className="border-[3px] border-[#1A3B7A] rounded-[2rem] p-8 md:p-12 space-y-8">
            <p className="text-[#1A3B7A] text-lg md:text-xl font-bold leading-relaxed">
              We are always looking for talented and motivated people who are interested in making a difference with us. 
              If you would like to join our team, you are welcome to send your unsolicited application to{" "}
              <a 
                href="mailto:career@balancia.co.id" 
                className="text-[#1A3B7A] border-b-2 border-[#1A3B7A] hover:text-[#E86B39] hover:border-[#E86B39] transition-all"
              >
                career@balancia.co.id
              </a>
            </p>
            
            <p className="text-[#1A3B7A] text-xl md:text-2xl font-black uppercase tracking-wide">
              We are looking forward to hearing from you!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}