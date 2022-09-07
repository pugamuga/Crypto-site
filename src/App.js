import { Fragment } from "react";
import { pages } from "./data.js";
import Eyes from "../src/assets/eyes.avif";
import { Route, Routes, Link } from "react-router-dom";
import OneMain from "./components/One/OneMain.js";
import Home from "./components/Home.js";
import BackBtn from "./components/BackBtn.js";
import SixMain from "./components/Six/SixMain.js";

function App() {
  return (
    <div>
      <BackBtn />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/1" element={<OneMain />} />
        <Route path="/6" element={<SixMain />} />
      </Routes>
    </div>
  );
}

export default App;
