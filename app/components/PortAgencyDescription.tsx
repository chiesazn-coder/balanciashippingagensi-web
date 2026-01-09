export default function PortAgencyDescription() {
  return (
    <section className="w-full bg-[#0B1D3F] py-20 px-6">
      <div className="max-w-6xl mx-auto text-white">
        <div className="flex flex-col gap-10">
          
          {/* Paragraf Pertama */}
          <p className="text-lg md:text-xl leading-relaxed text-justify opacity-90">
            BALANCIA... Consider us your trusted partner at every Indonesian port. 
            Whether you&apos;re a Shipowner, Ship Operator, Charterer, or any maritime 
            enthusiast, we&apos;re here to extend our expertise just for you. 
            Drawing from years of experience, our commitment is to deliver 
            top-notch services rooted in skill and dedication, always keeping 
            your satisfaction at the forefront. Tell us your needs, and discover 
            a variety of top-tier solutions tailored for your enterprise.
          </p>

          {/* Paragraf Kedua dengan Penekanan Bold */}
          <p className="text-lg md:text-xl leading-relaxed text-justify opacity-90">
            Navigating the complexities of port operations has never been easier.{" "}
            <span className="font-black text-white">
              At BALANCIA, we stand as the beacon for ships across the globe, 
              guiding you safely, efficiently, and with the utmost expertise.
            </span>
          </p>
          
        </div>
      </div>
    </section>
  );
}