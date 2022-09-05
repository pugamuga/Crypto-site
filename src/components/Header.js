import React from "react";
import Logo from "../assets/ape_gif.gif";
import AccountsBtn from "./AccountsBtn";
import Nav from "./Nav";
import { motion } from "framer-motion";

import { CgMenuRight } from "react-icons/cg";

const Header = ({ setNavMobile}) => {

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      className="py-[24px] lg:pt-[30px]"
    >
      <div className="container mx-auto flex items-center justify-between">
        <a className="flex items-center" href="#">
          <img className="w-12 lg:w-20" src={Logo} alt="logo" />
          <h1 className="ml-4 text-lg border-y-[1px]  px-2 border-slate-500 lg:text-[24px] font-extrabold ">
            REKT in Crypto since 2017
          </h1>
        </a>
        <div className=" hidden lg:flex gap-x-[80px]">
          <Nav />
          <AccountsBtn />
        </div>
        <div className="lg:hidden cursor-pointer ">
          <CgMenuRight
          onClick={()=>setNavMobile(true)}
          className="w-8 h-8" />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
