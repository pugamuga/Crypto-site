import React from "react";
import BGimage from "../../assets/bg-one.jpg";
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import InsideImg from "./InsideImg";

const OneMain = () => {
  
  return (
    <motion.div className=" h-screen w-screen flex justify-center items-center bg-black">
      <InsideImg/>
    </motion.div>
  );
};

export default OneMain;
