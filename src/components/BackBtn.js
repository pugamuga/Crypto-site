import React from "react";
import BackIcon from "./BackIcon";
import { Route, Routes, Link } from "react-router-dom";

const BackBtn = () => {
  return (
    <div
      className="h-12 w-12 bg-violet-600/30 text-white flex justify-center items-center rounded-full
     transition-all duration-300 fixed bottom-5 left-5 opacity-50 hover:opacity-100"
    >
      <Link to="/">
        <BackIcon />
      </Link>
    </div>
  );
};

export default BackBtn;
