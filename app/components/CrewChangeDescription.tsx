export default function CrewChangeDescription() {
  return (
    <section className="w-full bg-[#0B1D3F] py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-white space-y-10">
        
        {/* Paragraf Pertama */}
        <p className="text-lg md:text-xl leading-relaxed text-justify opacity-95">
          At <span className="font-bold">BALANCIA Ship Agency</span>, we take pride in having a 
          comprehensive range of services to ensure the smooth and efficient handling of vessels 
          during their port calls in Indonesia. Our commitment to excellence and years of 
          experience in the maritime industry make us the perfect Owner Protectives Agent for 
          all your port-related requirements.
        </p>

        {/* Paragraf Kedua dengan penekanan Bold di akhir */}
        <p className="text-lg md:text-xl leading-relaxed text-justify opacity-95">
          Whether you require assistance with Crew Change, Docking, Underwater Hull Cleaning, 
          Bunkering, Provision Supply, Cash to Master or any other maritime service,{" "}
          <span className="font-black text-white">
            BALANCIA Ship Agency is ready to deliver outstanding results.
          </span>
        </p>

      </div>
    </section>
  );
}