import { Fragment } from "react";
import { pages } from "./data.js";
import Eyes from "../src/assets/eyes.avif";

function App() {
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-rose-300/30 to-transparent ">
      {/* {-----------------BG----CIRCLES-----------------------------} */}
      <div
        id="circle"
        className=" fixed h-[600px] w-[600px] bg-rose-300/10 -right-[100px] z-10
        -bottom-[200px] bg-circle"
      ></div>
      <div
        id="circle"
        className=" fixed h-[400px] w-[400px] bg-violet-300/40 -left-[100px] -top-[200px] bg-circle"
      ></div>
      {/* {-----------------BG----CIRCLES-----------------------------} */}
      <div className="h-full w-screen flex justify-center items-center ">
        <div className="container  py-24 lg:border-2  border-white/20 rounded-full min-w-[300px] ">
          <div className="h-full flex flex-col justify-center items-center">
            <h1 className="text-4xl mb-12 mt-12 font-extrabold relative z-20">
              Paralax and some shit
            </h1>
            {/* {-----------------MANKI----EYES-----------------------------} */}

            <div
              id="eyes"
              className="bg-clip-content fixed z-0 h-[120px] w-1/2 overflow-auto scrollbar-hide rounded-xl hover:w-2/3 transition-all duration-500"
            >
              <img src={Eyes} alt="eyes" className="mt-[-60%]  w-full hover:mt-[-62%] transition-all duration-500 opacity-75 hover:opacity-100" />
            </div>
            {/* {-----------------MANKI----EYES-----------------------------} */}

            <div className="grid lg:grid-cols-3 grid-cols-2 gap-4 relative z-20 pt-32">
              {pages.map((item, i) => {
                return (
                  <Fragment key={i}>
                    <div className="border-2 border-white/30 font-thin px-4 py-1 rounded-md text-center hover:shadow-md hover:shadow-white/40 text-sm hover:opacity-50 cursor-pointer  transition-all duration-300">
                      <a href={item.href}>{item.name}</a>
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
}

export default App;
