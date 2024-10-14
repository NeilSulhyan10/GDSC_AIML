import React, { useState, useEffect } from "react";
import { BackgroundLines } from "./components/ui/background-lines.jsx";
import Logo from "./assets/logo.png";
import Timer from "./Timer.jsx";
import AIImage from "./assets/Robo.png";

function App() {
  return (
    <>
      <div className="relative w-full h-full">
        <div className="absolute top-0 left-0 p-2 w-[10%]">
          <img src={Logo} />
        </div>
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-9xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight animate-pulse">
          AIML Bootcamp
        </h2>
        <Timer />
        <div className="flex flex-col md:flex-row justify-evenly items-center w-full mt-6 font-poppins space-y-4 md:space-y-0 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6">
          <div className="md:w-1/2 px-4 md:px-0 text-center md:text-left">
            <h3 className="text-gray-300 text-base md:text-lg lg:text-xl font-medium">
              Google Developer Students' Club - WCE aims to inculcate the
              culture of development and problem-solving within local
              communities using technology.
              <span className="block mt-4">
                "Coming together is the beginning. Keeping together is progress.
                Working together is success."
              </span>
            </h3>
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0 flex justify-center">
            <img
              src={AIImage}
              alt="AI/ML Representation"
              className="w-1/2 h-auto"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly items-center w-full mt-6 font-poppins space-y-4 md:space-y-0 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6">
          <div className="md:w-1/2 px-4 md:px-0 text-center md:text-left">
            <h3 className="text-gray-300 text-base md:text-lg lg:text-xl font-medium">
              Google Developer Students' Club - WCE aims to inculcate the
              culture of development and problem-solving within local
              communities using technology.
              <span className="block mt-4">
                "Coming together is the beginning. Keeping together is progress.
                Working together is success."
              </span>
            </h3>
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0 flex justify-center">
            <img
              src={AIImage}
              alt="AI/ML Representation"
              className="w-1/2 h-auto"
            />
          </div>
        </div>
      </div>
      <BackgroundLines />
    </>
  );
}

export default App;
