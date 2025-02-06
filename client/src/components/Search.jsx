import React, { useContext } from "react";
import { userData } from "../App";

export const Search = () => {
  const userDatas = useContext(userData);
  return (
    <div className="w-full my-2 flex justify-between items-center">
      <div className="search-bar w-3/4 relative">
        <input
          type="text"
          className="w-full py-2 pl-4 pr-8 border-2 border-gray-400 rounded-xl outline-none"
          placeholder="Search Here"
          onChange={(e) => userDatas.handleSearch(e)}
        />
        <button className="absolute right-0 top-2 px-4  z-10 font-bold">
          X
        </button>
      </div>
      <div>
        <button
          className="py-2 px-4 bg-yellow-400 font-semibold  rounded-2xl "
          onClick={() => userDatas.setIsOpen(true)}
        >
          Add Data
        </button>
      </div>
    </div>
  );
};
