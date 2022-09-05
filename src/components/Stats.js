import React from "react";
import { HiChartBar, HiUser, HiGlobe } from "react-icons/hi";
import ItemForStats from "./ItemForStats";
import { motion } from "framer-motion";


const Stats = () => {
  return (
    <motion.section 
    animate={{y:[100,0], opacity:[0,1]}}
    transition={{duration:1, delay:0.6, ease:"easeOut"}}
    className="pt-24">
      <div className="container mx-auto">
        <div className=" flex flex-col gap-y-6 lg:flex-row lg:justify-between">
          <ItemForStats
            textBig={"$30B"}
            textSmall={"Digital Currency Exchanged"}
            icon={1}
          />
          <ItemForStats
            textBig={"$10M+"}
            textSmall={"Trusted Wallet Investors"}
            icon={2}
          />
          <ItemForStats
            textBig={"195"}
            textSmall={"Contries Supported"}
            icon={3}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Stats;
