import React from "react";
import { HiChartBar, HiUser, HiGlobe } from "react-icons/hi";

const ItemForStats = ({ textBig, textSmall, icon }) => {
  return (
    <div className="flex items-center gap-x-6">
      <div className=" bg-white/10 w-20 h-20 lg:text-4xl text-blue text-2xl rounded-full flex items-center justify-center">
        {icon == 1 ? (
          <HiChartBar />
        ) : icon == 2 ? (
          <HiUser />
        ) : icon == 3 ? (
          <HiGlobe />
        ) : (
          ""
        )}
      </div>
      <div>
        <div className="text-2xl font-extrabold lg:text-[40px] lg:mb-2">
          {textBig}
        </div>
        <div className="text-slate-500">{textSmall}</div>
      </div>
    </div>
  );
};

export default ItemForStats;
