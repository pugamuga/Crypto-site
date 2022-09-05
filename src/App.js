import Header from "./components/Header";
import Hero from "./components/Hero";
import { useState } from "react";
import NavMobile from "./components/NavMobile";
import Stats from "./components/Stats";
import Why from "./components/Why";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [navMobile, setNavMobile] = useState(false);

  return (
    <div className=" font-primary overflow-hidden scrollbar-hide">
      <AnimatePresence>
        {!navMobile ? (
          ""
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0 }}
            id="blur"
            className={` fixed h-screen w-screen z-10  bg-black/80`}
          ></motion.div>
        )}
      </AnimatePresence>
        <Header setNavMobile={setNavMobile} />
      <Hero />
      <div
        className={`${
          navMobile ? "right-0" : "-right-full"
        } fixed z-20 top-0 h-full transition-all duration-500`}
      >
        <NavMobile setNavMobile={setNavMobile} />
      </div>
      <Stats />
      <Why />
      <div className="h-[2000px]"></div>
    </div>
  );
}

export default App;
