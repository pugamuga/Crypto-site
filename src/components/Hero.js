import React from "react";
import Image from "../assets/hero-img.png";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className=" flex flex-col lg:flex-row items-center">
          <div className="flex-1">
            <motion.div
              animate={{ y: [-100, 0], opacity: [0, 1] }}
              transition={{ duration: 1, delay: 0, ease: "easeOut" }}
              className=" bg-white/10 p-1 mb-6 rounded-full pl-1 pr-3 max-w-[365px]"
            >
              <div className=" flex items-center justify-between text-sm lg:text-base">
                <div className=" bg-white text-darkblue py-1 px-3 rounded-full">
                  75% SAVE
                </div>
                <div>For the Black Fryday weekend</div>
              </div>
            </motion.div>
            <motion.h1
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
              className=" text-[32px] lg:text-[64px] font-bold leading-tight mb-6"
            >
              Fastest & secure platform to REKT in crypto
            </motion.h1>
            <motion.p
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="max-w-[440px] leading-relaxed mb-8"
            >
              Buy and sell cryptocurrencies, trusted by 10M wallets with over
              30$ billion in transactions.
            </motion.p>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            >
              <button className="btn gap-x-6 text-sm lg:text-base pl-6 lg:h-16">
                Try for free
                <IoIosArrowDroprightCircle className=" hover:opacity-50 hover:scale-[150%] text-2xl lg:text-3xl transition-all duration-300" />
              </button>
            </motion.div>
          </div>
          <div>
            <motion.img
              animate={{ y: [100, 0], opacity: [0, 1] }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="flex-1"
              src={Image}
              alt="img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
