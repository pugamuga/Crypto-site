import React from "react";

const AccountsBtn = () => {
  return (
    <div className="flex items-center ">
      <a
        href="#"
        className="text-sm  font-bold hover:text-blue transition-all duration-300"
      >
        Login
      </a>
      <h1 className=" mx-6 font-extralight text-white/20">|</h1>
      <a href="#" className="btn text-sm font-bold h-[40px]">
        Register
      </a>
    </div>
  );
};

export default AccountsBtn;
