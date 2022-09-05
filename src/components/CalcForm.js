import React from "react";

const CalcForm = () => {
  return (
    <div
      className="w-full bg-white max-w-[940px] mx-auto
    rounded-2xl text-darkblue p-12"
    >
      <form className="flex flex-col lg:flex-row lg:justify-between lg:space-y-0 space-y-12 lg:items-center">
        <input
          className=" input placeholder:text-darkblue placeholder:opacity-30"
          type="number"
          placeholder="Enter your hash rate"
        />
        <select className="select">
          <option value="">TH/s</option>
          <option value="">H/s</option>
          <option value="">KH/s</option>
          <option value="">MH/s</option>
          <option value="">GH/s</option>
        </select>
        <button className="btn flex self-start px-8 text-white">Calculate</button>
      </form>
      <div className="mt-24">
        <div className="text-blue font-medium mb-4">ESTIMATED 24 HOUR REVENUE:</div>
        <div className=" text-[32px] font-bold mb-3">
          0.055 130 59 ETH <span className="text-blue">(1275$)</span>{" "}
        </div>
        <div className=" text-slate-400">Revenue will change based on mining difficulty and Ethereum price.</div>
      </div>
    </div>
  );
};

export default CalcForm;
