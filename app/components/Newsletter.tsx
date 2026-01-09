import Image from "next/image";

export default function Newsletter() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="flex flex-col md:flex-row min-h-[500px]">
        
        {/* SISI KIRI: Form Newsletter */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-20 py-16 z-10">
          <h2 className="text-[#1A3B7A] text-4xl md:text-6xl font-black uppercase leading-tight mb-10">
            Join Our <br /> Newsletter
          </h2>
          
          <form className="relative flex w-full max-w-md border-2 border-[#E86B39] rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email here"
              className="w-full py-4 px-6 outline-none text-gray-700 placeholder:text-gray-400"
              required
            />
            <button
              type="submit"
              className="bg-[#E86B39] text-white px-8 font-bold hover:bg-[#d55a2d] transition-colors"
            >
              Submit
            </button>
          </form>
        </div>

        {/* SISI KANAN: Gambar Kegiatan Kapal */}
        <div className="relative w-full md:w-1/2 h-[400px] md:h-auto">
          <Image
            src="/crew-activity.png" // Ganti dengan gambar kru kapal kamu
            alt="Crew Activity"
            fill
            className="object-cover"
          />
          {/* Efek Fade Putih di sisi kiri gambar agar menyatu dengan teks */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent hidden md:block" />
        </div>
      </div>
    </section>
  );
}