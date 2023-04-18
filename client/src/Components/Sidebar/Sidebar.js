import React from "react";
import Logo from "../../utils/images/Logo.png";
import Stats from "../../utils/icons/Stats.svg";
import folder from "../../utils/icons/folder.svg";
import Support from "../../utils/icons/Support.svg";
import Setting from "../../utils/icons/Setting.svg";
import Logout from "../../utils/icons/Logout.svg";
import Globe from "../../utils/icons/Globe.svg";

const Sidebar = () => {
  return (
    <div className="shadow-2xl h-screen w-[300px] px-[18px] pt-[24px] bg-white text-[14px] font-semibold absolute top-0 left-0 flex flex-col">
      <div>
        <div>
          <a href="">
            <img src={Logo} alt="" />
          </a>
        </div>
        <div className="sidebarsection text-[#5F6980]">
          <div className="sidebarTitle px-[2px] mt-[37px] mb-[16px] text-[12px] text-[#9D9FA2] leading-[14px] tracking-[.2rem] uppercase">
            Dashboard
          </div>
          <div className="sidebarHeading px-[2.5px] text-[#282828]  flex items-center mb-[16px]">
            <span className="mr-[10.5px]">
              <img src={Stats} alt="" />
            </span>{" "}
            Dashboard
            <span class="material-symbols-outlined ml-auto">
              expand_less
            </span>{" "}
          </div>
          <ul className="">
            <li className="px-[18px] hover:bg-slate-200 text-[#282828] py-[6px]">
              Record
            </li>
            <li className="px-[18px] hover:bg-slate-200 py-[6px]">Report</li>
            <li className="px-[18px] hover:bg-slate-200 py-[6px]">Analyze</li>
            <li className="px-[18px] hover:bg-slate-200 py-[6px]">Learn</li>
          </ul>
        </div>
        <div className="sidebarsection">
          <div className="sidebarTitle px-[2px] mt-[37px] mb-[16px] text-[12px] text-[#9D9FA2] leading-[14px] tracking-[.2rem] uppercase">
            Pages
          </div>
          <ul>
            <li className="px-[2.5px] flex items-center mb-[12px]">
              {" "}
              <span className="mr-[10.5px]">
                <img src={Support} alt="" />
              </span>{" "}
              Help Center
              <span class="material-symbols-outlined ml-auto">expand_more</span>
            </li>
            <li className="px-[2.5px] flex items-center">
              {" "}
              <span className="mr-[10.5px]">
                <img src={folder} alt="" />
              </span>{" "}
              File Manager
              <span class="material-symbols-outlined ml-auto">expand_more</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer flex items-center justify-around px-4 py-4 mt-auto">
        <div className="hover:bg-slate-200 p-4 rounded-lg">
          <img src={Setting} alt="" />
        </div>
        <div className="hover:bg-slate-200 p-4 rounded-lg">
          <img src={Logout} alt="" />
        </div>
        <div className="hover:bg-slate-200 p-4 rounded-lg">
          <img src={Globe} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
