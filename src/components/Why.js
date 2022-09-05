import React from "react";
import Image from "../assets/why-img.png";
import { motion } from "framer-motion";

const Why = () => {
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-x-8 lg:flex-row">
          <div className="order-2 lg:order-1">
            <motion.img
              animate={{ x: [-100, 0], opacity: [0, 1] }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              src={Image}
              alt="img"
            />
          </div>
          <motion.div
            animate={{ x: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className=" order-1 lg:order-2 max-w-[480px]"
          >
            <h2 className=" section-title">Why you should REKT in crypto?</h2>
            <p className=" section-subtitle">
              Expirience the next generation REKT platform. Financial borders,
              extra fees, and fake reviews.{" "}
            </p>
            <button className="btn px-6">Learn more</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Why;
