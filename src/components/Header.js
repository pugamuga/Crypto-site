import React from "react";
import Logo from "../assets/ape_gif.gif";
import AccountsBtn from "./AccountsBtn";
import Nav from "./Nav";

import { CgMenuRight } from "react-icons/cg";

const Header = () => {
  return (
    <header className="py-[24px] lg:pt-[60px]">
      <div className="container">
        <a
        className="flex items-center" 
        href="#">
            <img
            className="w-10"
            src={Logo} alt="logo" />
            <h1>REKT Crypto</h1>
        </a>
      </div>
    </header>
  );
};

export default Header;
