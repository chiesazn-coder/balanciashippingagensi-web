import { Search } from "lucide-react"; // Pastikan sudah install lucide-react

export default function SearchBar() {
  return (
    <section className="w-full bg-[#0B1D3F] py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Container Search: Lonjong sempurna dengan border oranye */}
        <form className="relative flex w-full border-2 border-[#E86B39] rounded-full overflow-hidden bg-white shadow-lg">
          <input
            type="text"
            placeholder="Search"
            className="w-full py-4 md:py-5 px-8 outline-none text-gray-700 text-lg md:text-xl placeholder:text-gray-400"
          />
          
          {/* Tombol Search Oranye */}
          <button
            type="submit"
            className="bg-[#E86B39] text-white px-6 md:px-10 flex items-center justify-center hover:bg-[#d55a2d] transition-all group"
          >
            <Search 
              size={28} 
              className="group-hover:scale-110 transition-transform" 
            />
          </button>
        </form>
      </div>
    </section>
  );
}