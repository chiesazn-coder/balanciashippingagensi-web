import Image from "next/image";

interface ServiceHeroProps {
  title: string;
  imageSrc: string;
}

export default function ServiceHero({ title, imageSrc }: ServiceHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="relative h-[450px] md:h-[600px] w-full">
        {/* Background Image Pelabuhan */}
        <Image
          src={imageSrc} 
          alt={title}
          fill
          className="object-cover object-center"
          priority
        />
        
        {/* Overlay Putih Halus */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/5 to-transparent h-40" />

        {/* Konten Teks */}
        <div className="relative z-10 flex h-full flex-col items-center justify-start pt-24 px-4 text-center">
          <h1 className="max-w-5xl text-4xl md:text-7xl font-black tracking-tight text-[#1A3B7A] uppercase leading-tight drop-shadow-sm">
            {title}
          </h1>
          <div className="mt-6 h-1.5 w-24 bg-[#E86B39] rounded-full" />
        </div>
      </div>
    </section>
  );
}