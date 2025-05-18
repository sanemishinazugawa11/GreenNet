import Image from "next/image";
import React from "react";
function Hero() {
  return (
    <div className="w-full px-8 py-3 mt-10 sm:mt-14 overflow-x-hidden max-w-screen-lg mx-auto ">
      <div className="w-full md:w-[95%] mx-auto flex flex-col gap-4 items-center">
        <h1 className="w-full text-center text-text text-xl font-semibold  font-Raleway sm:text-2xl md:text-4xl">
          Join the Network for a Cleaner Planet.
        </h1>
        <h2 className="w-full text-center text-wrap text-gray-600 mt-4  text-md font-semibold font-Raleway md:text-2xl">
          GreenNet is a digital platform empowering communities to discover,
          organize, and participate in local environmental programs — from
          clean-up drives to tree plantation events.
        </h2>

        <button className="max-w-md w-full bg-de-york-400 px-4 py-2 text-center flex items-center justify-center font-Raleway font-semibold gap-1 mt-8 rounded-md">
          Find programs nearby
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Hero;
