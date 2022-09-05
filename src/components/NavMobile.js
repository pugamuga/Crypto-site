import React from "react";
import { navData } from "../data";
import { CgClose } from "react-icons/cg";

const NavMobile = ({ setNavMobile }) => {
  return (
    <nav
      className="lg:hidden bg-violet h-full top-0 bottom-0 w-80 flex justify-center
    items-center"
    >
      <div className=" absolute top-2 left-2 cursor-pointer">
        <CgClose onClick={() => setNavMobile(false)} className="text-3xl" />
      </div>
      <ul className="text-xl flex flex-col gap-y-8">
        {navData.map((item, i) => {
          return (
            <li key={i}>
              <a href={item.href}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
