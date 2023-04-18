import React from "react";

const Smallcard = (props) => {

  const {emission ,amount,highlighted,badge,badgeHighlighted} = props;

  const lastword = amount.split(' ').pop();
  const C02Name = amount.substring(0, amount.lastIndexOf(" "));



  return (
    <div className=" p-[20px] w-[262px] h-[182px] rounded-lg bg-white m-3 shadow-md">
      <div className="smallHeading text-[#5F6980]">{emission}  </div>
      <div className="text-[26px] font-semibold w-[70%] mb-4">
        {C02Name} <span className={`${highlighted? "":"font-normal text-[16px]"}`}>{lastword}</span>
      </div>
      <span className={`Badge text-[12px]   rounded-3xl  px-[10px] py-[2px] ${badgeHighlighted? "text-[#20C997] bg-[#DCFFF5]":"bg-[#f2f4f7]"}`}>
        {badge}
      </span>
    </div>
  );
};

export default Smallcard;
