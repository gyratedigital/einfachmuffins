import React from "react";
import { FiSearch } from "react-icons/fi";
import "./Banner.css"

const Banner = () => {
  return (
    <div className="gy_banner relative min-h-[400px] flex items-center justify-center text-center text-white overflow-hidden bg-cover bg-center">
      {/* Small Welcome Banner */}
      <div className="small-banner absolute top-[26%] left-1/2 -translate-x-1/2 bg-[#d14b62] text-white px-4 py-1.5 text-sm font-bold rounded-[20px] shadow-md z-10 max-sm:top-[19%] max-sm:text-[11px] max-sm:px-[10px] max-sm:py-[3px] max-md:top-[22%] max-md:text-[12px] max-md:px-[12px] max-md:py-[4px]">HERZLICH WILLKOMMEN</div>

      {/* Subscribe Form Styled to Match Reference */}
      <div className="overlay max-md:w-[90%] bg-[#dff0db] p-10 rounded-[20px] shadow-lg flex items-center gap-3 w-[400px] flex-col">
        <h2 className="text-[25px] font-bold text-[#3b514a] m-0">WAS MÖCHTEST DU KOCHEN?</h2>
        <form className="search-form flex max-md:flex-col items-center border border-[#ccc] rounded-[30px] overflow-hidden bg-white px-[60px] py-0">
          {/* Search Icon */}
          <div className="icon p-2 bg-transparent flex items-center justify-center">
            <FiSearch size={18} color="#555" />
          </div>
          <input className="flex-1 border-none p-2 text-[16px] outline-none bg-transparent text-black w-full"  placeholder="Rezepte, Zutaten, Trends..." required />
        </form>
      </div>
    </div>
  );
};

export default Banner;
