import React from "react";
import { Fragment } from "react";
import { pages } from "../data.js";
import Eyes from "../assets/eyes.avif";
import { Route, Routes, Link } from "react-router-dom";
import OneMain from "../components/One/OneMain.js";
import ApeWood from "../assets/ape_wood.png";
import ApeWoodD from "../assets/ape_wood_d.png";
import ApeRope from "../assets/ape_rope.png";
import { motion } from "framer-motion";
import { useState } from "react";

const Home = () => {
  const [color, setColor] = useState(true);
  return (
    <div
      className={`h-screen w-screen bg-gradient-to-b transition-all duration-700 from-red-400/50 to-transparent ${
        color ? "bg-green-600/50" : "grayscale bg-black"
      }`}
    >
      {/* {-----------------BG----CIRCLES-----------------------------} */}
      <div
        id="circle"
        className={`fixed h-[600px] w-[600px] bg-white/10 -right-[100px] z-0 ${
          color ? "" : "hidden"
        }
    -bottom-[200px] bg-circle`}
      ></div>
      <div
        id="circle"
        className={`fixed h-[400px] w-[400px] bg-white/10 -left-[100px] -top-[200px] bg-circle ${
          color ? "" : "hidden"
        }`}
      ></div>
      {/* {-----------------BG----CIRCLES-----------------------------} */}
      <div className="h-full w-screen flex justify-center items-center ">
        <div className="container  py-24 lg:border-2  border-white/20 rounded-full min-w-[300px] ">
          <div className="h-full flex flex-col justify-center items-center">
            <h1 className="text-3xl lg:text-4xl mb-12 mt-12 font-extrabold relative z-20">
              Paralax and some shit
            </h1>
            {/* {-----------------MANKI----EYES-----------------------------} */}
            <motion.div
              onClick={() => setColor(!color)}
              animate={{ rotate: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="fixed top-0 right-[10%] origin-top z-10 active:opacity-50 "
            >
              <img
                src={ApeRope}
                alt="rope"
                className="w-[120px] lg:w-[160px] -mt-2 hover:scale-125 transition-all duration-1000 grayscale-0 "
              />
            </motion.div>
            <div className=" fixed bottom-0 left-[5%] z-10">
              <motion.img
                animate={{ rotate: [0, 10, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                src={color ? ApeWood : ApeWoodD}
                alt="wood"
                className="  h-[200px] w-[200px] origin-bottom "
              />
            </div>

            <div
              id="eyes"
              className="bg-clip-content fixed z-0 h-[80px] lg:h-[120px] lg:w-1/2 w-3/4 overflow-auto scrollbar-hide rounded-xl  transition-all duration-500"
            >
              <img
                src={Eyes}
                alt="eyes"
                className="mt-[-60%]  w-full hover:mt-[-62%] transition-all duration-500 "
              />
            </div>
            {/* {-----------------MANKI----EYES-----------------------------} */}

            <div className="grid lg:grid-cols-3 grid-cols-2 gap-4 relative z-20 pt-32">
              {pages.map((item, i) => {
                return (
                  <Fragment key={i}>
                    <div className="border-2 border-white/30 font-thin px-4 py-1 rounded-md text-center hover:shadow-md hover:shadow-white/40 text-sm hover:opacity-50 cursor-pointer  transition-all duration-300">
                      <Link to={item.href}>{item.name}</Link>
                    </div>
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
