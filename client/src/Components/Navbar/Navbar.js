import React from 'react'
import Indicator from "../../utils/icons/Indicator.svg";
import Calendar from "../../utils/icons/Calendar.svg";
import LayoutGrid from "../../utils/icons/LayoutGrid.svg";
import Avatar from "../../utils/images/Avatar.png";

const Navbar = () => {
  return (
    <div className="ml-[300px] px-8 py-[10px] bg-white shadow-lg">
      <div className="flex items-center">
        <div className="flex-1 flex items-center border border-slate-300 rounded-lg  py-3 px-2">
          <span class="material-symbols-outlined mr-2">search</span>{" "}
          <input
            className="w-full  outline-none "
            placeholder="Search..."
            type="text"
          />
        </div>
        <div className="w-1/5">
          <ul className="flex items-center justify-around">
            <li className="">
              <img src={Indicator} alt="" />
            </li>
            <li>
              <img src={Calendar} alt="" />
            </li>
            <li>
              <img src={LayoutGrid} alt="" />
            </li>
            <li>
              <img src={Avatar} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar