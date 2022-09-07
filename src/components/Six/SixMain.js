import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";

const SixMain = () => {
  const [scrollY, setScrollY] = useState(0);

  function logit() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });
  console.log("here "+scrollY);

  const [scaleBlack, setScaleBlack] = useState(100);

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2.5]);

  const heightLevel = [
    200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600,
    2800, 3000, 3200, 3400
  ];

  return (
    <div className=" bg-gradient-to-t from-indigo-600 to-violet-600 w-[100vw] h-[300vw] overflow-x-hidden p-0 m-0">
      {heightLevel.map((item, i) => {
        return (
          <div
            key={i}
            className="h-[200px] border-b-2 border-white/20 flex items-end"
          >
            <h1 className="ml-5 mb-2">{item}</h1>
          </div>
        );
      })}
      <div className="w-[150px] h-[150px] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <motion.div
          className="w-[100%] h-[100%] overflow-hidden bg-slate-500 rounded-lg p-2"
          style={{
            scale,
          }}
        >
          <motion.div
            className=" w-[inherit] h-[inherit] bg-white origin-bottom rounded-sm"
            style={{
              scaleY: scrollYProgress,
            }}
          />
        </motion.div>
        <div
          style={{
            width: scrollY / 15,
            height: scrollY / 15,
            right: scrollY / 10,
          }}
          className="  bg-black rounded-full fixed top-[250px]"
        ></div>
        <div
          style={{
            width: scrollY / 30,
            height: scrollY / 30,
            left: scrollY / 10,
          }}
          className="  bg-white rounded-full fixed bottom-[300px]"
        ></div>
      </div>
    </div>
  );
};

export default SixMain;
