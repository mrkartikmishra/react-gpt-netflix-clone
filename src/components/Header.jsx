import React from "react";
import { BsGlobe2 } from "react-icons/bs";

const Header = () => {
  return (
    <div className="flex justify-between mx-10 md:mx-32 lg:mx-48 items-center py-6 z-10 sticky">
      <div>
        <img
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="Netflix Logo"
          className="w-44"
        />
      </div>
      <div className="flex item gap-4 relative">
        <div className="text-white w-14 absolute top-3 left-2 cursor-pointer">
          <BsGlobe2 />
        </div>
        <select className="px-8 cursor-pointer rounded-md bg-black text-white border border-slate-300">
          <option>English</option>
          <option>Hindi</option>
        </select>
        <button className="bg-red-600 py-2 px-4 flex justify-center items-center rounded-md text-white font-bold">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Header;
