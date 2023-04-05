import React from "react";
import { HiSearch } from "react-icons/hi";

const Search = () => {
  return (
    <label className="flex items-stretch justify-items-stretch w-full">
      <input
        className="border border-DCDCDC placeholder:italic placeholder:text-slate-400 text-black block 
        bg-F5F5F5 w-full rounded-lg py-2 pl-6 pr-3 shadow-sm
        focus:bg-white
        focus:outline-none 
        focus:border-sky-500 
        focus:ring-sky-500 
        focus:ring-1 
        sm:text-sm"
        placeholder="ค้นหา"
        type="search"
        name="search"
      />
      <button type="submit" className="absolute ml-1 self-center">
        <HiSearch color="6B6B6B" width={24} height={24} />
      </button>
    </label>
  );
};

export default Search;
