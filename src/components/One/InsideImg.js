import React from "react";
import BGimage from "../../assets/bg-one.jpg";
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

const InsideImg = () => {
const [btn, setBtn] = useState(false)
console.log(btn)

let jungle = document.getElementById('jungle')

  useEffect(() => {
    document.getElementById('jungle').scrollTo(0, 900);
  }, [btn]);

  return (
    <div
    id="jungle"
    className="bg-slate-300 container h-[90%] rounded-lg lg:mx-[20%] mx-[10%]  overflow-auto scrollbar-hide">
      <div className="left-[50%] top-[50%] fixed">
        <button
        onClick={()=>setBtn(!btn)}
        className="  bg-slate-900 py-2 px-6 rounded-full active:opacity-70 ">
          Click
        </button>
      </div>
      <img
        
        src={BGimage}
        alt="bg"
        className=" object-cover h-[1400px] lg:h-[1400px]"
      />
    </div>
  );
};

export default InsideImg;
