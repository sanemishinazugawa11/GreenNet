import React from "react";

function Navbar() {
  return (
    <div className="mt-3 w-full h-[8vh]  flex overflow-x-hidden items-center justify-between px-8 sm:px-16 py-2 ">
      <div className=" h-full max-w-sm w-full  flex justify-start items-center">
        <svg
          className="w-6 h-6 text-bilbao-950 font-semibold"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M20.998 3V5C20.998 14.6274 15.6255 19 8.99805 19L7.0964 18.9999C7.3079 15.9876 8.24541 14.1648 10.6939 11.9989C11.8979 10.9338 11.7965 10.3189 11.2029 10.6721C7.1193 13.1016 5.09114 16.3862 5.00119 21.6302L4.99805 22H2.99805C2.99805 20.6373 3.11376 19.3997 3.34381 18.2682C3.1133 16.9741 2.99805 15.2176 2.99805 13C2.99805 7.47715 7.4752 3 12.998 3C14.998 3 16.998 4 20.998 3Z"></path>
        </svg>
        <h1 className="font-semibold tracking-wide text-bilbao-950 font-Raleway text-lg sm:text-xl">
          GreenNet
        </h1>
      </div>
      <svg
        className="w-6 h-6 font-semibold text-bilbao-950 block md:hidden"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
      </svg>
      <div className="hidden md:flex items-center justify-center gap-4">
        <button className="text-bilbao-950 font-Raleway tracking-wide  font-semibold px-4 py-1 w-auto bg-de-york-200 border-[0.5px] border-bilbao-500/30 rounded-lg">Github</button>
        <button className="text-bilbao-950 font-Raleway border-[0.5px] border-bilbao-500/20 tracking-wide font-semibold  px-4 py-1 w-auto rounded-lg">Signup</button>
      </div>
    </div>
  );
}

export default Navbar;
