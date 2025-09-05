import React from "react";
import mainImage from "../public/Assets/Dirty/young-man-covering-base-hole-after-planting-small-tree-woods.jpg";
import Image from "next/image";
function Main() {
  return (
    <div className="p-3 overflow-hidden  mx-auto w-full mt-16 grid gap-3 grid-flow-dense grid-cols-2">
      <div className="flex flex-col w-full gap-2 col-span-2 md:col-span-1 md:col-start-1 p-1 border-[2px] border-x-bilbao-500/20 border-y-bilbao-600/20 overflow-hidden rounded-lg">
        <div className="w-full flex flex-col gap-3 border-b-[1px] bg-bilbao-200/30 p-2 border-b-bilbao-500/30 rounded-t-md">
          <svg
            className="w-5 h-5 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M9 19H12V12.9416L8 9.45402L4 12.9416V19H7V15H9V19ZM21 21H3C2.44772 21 2 20.5523 2 20V12.4868C2 12.1978 2.12501 11.9229 2.34282 11.733L6 8.54435V4C6 3.44772 6.44772 3 7 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21ZM16 11V13H18V11H16ZM16 15V17H18V15H16ZM16 7V9H18V7H16ZM12 7V9H14V7H12Z"></path>
          </svg>
          <h1 className="font-semibold font-Raleway w-full text-start text-text text-md">
            Empowering communities worldwide by providing an accessible platform where individuals can easily discover, join, and contribute to local environmental initiatives, from tree plantations to beach cleanups.
          </h1>
        </div>
        <h1 className="font-semibold font-Raleway  w-full text-start text-gray-600 text-md px-2">
          Turn Actions Into Impact.
        </h1>
      </div>
      <div className="flex flex-col w-full gap-2 col-span-2 md:col-span-1 md:col-start-2 p-2 border-[0.5px] border-x-bilbao-500/30 border-y-bilbao-600/40 overflow-hidden rounded-lg">
        <div className="w-full flex flex-col gap-3 border-b-[1px] bg-bilbao-200/30 p-2 border-b-bilbao-500/30 rounded-t-md">
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M3 12C3 13.933 4.567 15.5 6.5 15.5C7.7035 15.5 8.51959 15.0662 9.19914 14.3866C9.82141 13.7644 10.3213 12.9468 10.8546 12C10.3213 11.0532 9.82141 10.2356 9.19914 9.61336C8.51959 8.9338 7.7035 8.5 6.5 8.5C4.567 8.5 3 10.067 3 12ZM6.5 17.5C3.46243 17.5 1 15.0376 1 12C1 8.96243 3.46243 6.5 6.5 6.5C8.2965 6.5 9.60541 7.1912 10.6134 8.19914C11.1486 8.7344 11.5999 9.36157 12 10.0017C12.4001 9.36157 12.8514 8.7344 13.3866 8.19914C14.3946 7.1912 15.7035 6.5 17.5 6.5C20.5376 6.5 23 8.96243 23 12C23 15.0376 20.5376 17.5 17.5 17.5C15.7035 17.5 14.3946 16.8088 13.3866 15.8009C12.8514 15.2656 12.4001 14.6384 12 13.9983C11.5999 14.6384 11.1486 15.2656 10.6134 15.8009C9.60541 16.8088 8.2965 17.5 6.5 17.5ZM13.1454 12C13.6787 12.9468 14.1786 13.7644 14.8009 14.3866C15.4804 15.0662 16.2965 15.5 17.5 15.5C19.433 15.5 21 13.933 21 12C21 10.067 19.433 8.5 17.5 8.5C16.2965 8.5 15.4804 8.9338 14.8009 9.61336C14.1786 10.2356 13.6787 11.0532 13.1454 12Z"></path>
          </svg>
          <h1 className="font-semibold font-Raleway w-full text-start text-text text-md">
            Fostering meaningful collaboration between eco-conscious citizens, grassroots organizations, and volunteers, ensuring that every effort towards environmental preservation has maximum impact.
          </h1>
        </div>
        <h1 className="font-semibold font-Raleway  w-full text-start text-gray-600 text-md px-2">
         Your Local Climate Action Board.
        </h1>
      </div>
      <div className="flex flex-col w-full gap-2 col-span-2 md:col-span-1 md:col-start-1 p-2 border-[0.5px] border-x-bilbao-500/30 border-y-bilbao-600/40 overflow-hidden rounded-lg">
        <div className="w-full flex flex-col gap-3 border-b-[1px] bg-bilbao-200/30 p-2 border-b-bilbao-500/30 rounded-t-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M12 14V16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM20.8284 21.0711L18 24L15.1716 21.0711C13.6095 19.4535 13.6095 16.8308 15.1716 15.2132C16.7337 13.5956 19.2663 13.5956 20.8284 15.2132C22.3905 16.8308 22.3905 19.4535 20.8284 21.0711ZM19.3897 19.6818C20.2034 18.8392 20.2034 17.4451 19.3897 16.6025C18.614 15.7992 17.386 15.7992 16.6103 16.6025C15.7966 17.4451 15.7966 18.8392 16.6103 19.6818L18 21.1209L19.3897 19.6818Z"></path>
          </svg>
          <h1 className="font-semibold font-Raleway w-full text-start text-text text-md">
            Promoting sustainable living practices by connecting people with resources, events, and educational programs that inspire long-term environmental responsibility.
          </h1>
        </div>
        <h1 className="font-semibold font-Raleway  w-full text-start text-gray-600 text-md px-2">
          Cleaner Cities, Connected Citizens.
        </h1>
      </div>
      <div className="flex flex-col w-full  gap-2 col-span-2 md:col-span-1 md:col-start-2 p-2 border-[0.5px] border-x-bilbao-500/30 border-y-bilbao-600/40 overflow-hidden rounded-lg">
      <div className="w-full flex flex-col gap-3 border-b-[1px] bg-bilbao-200/30 p-2 border-b-bilbao-500/30 rounded-t-md">
          <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M12.455 2.30885L11.9998 2.07617L11.5447 2.30885C10.3952 2.89646 9.35317 3.6638 8.45557 4.57394C9.77392 5.26024 10.9693 6.15018 12.0001 7.20207C13.0308 6.15028 14.2261 5.26041 15.5443 4.57414C14.6466 3.66391 13.6045 2.8965 12.455 2.30885ZM10.6993 8.73433C8.98925 6.93503 6.72625 5.66541 4.18066 5.19783L3 4.98096V13.0002C3 16.8047 5.36065 20.0579 8.69711 21.3748C8.24472 19.9984 8 18.5278 8 17C8 13.9083 9.00215 11.0507 10.6993 8.73433ZM21 4.98096L19.8193 5.19783C14.233 6.22396 10 11.1168 10 17.0002C10 18.5362 10.2891 20.0071 10.8167 21.3598L11.0569 21.9754C11.3711 21.9852 11.6856 22.0002 12 22.0002C16.9706 22.0002 21 17.9708 21 13.0002V4.98096Z"></path>
        </svg>
          <h1 className="font-semibold font-Raleway w-full text-start text-text text-md">
            Driving collective action for a greener future by uniting diverse communities under one digital network, encouraging participation in activities that protect and restore our planet. 
          </h1>
        </div>
        <h1 className="font-semibold font-Raleway  w-full text-start text-gray-600 text-md px-2">
          Your Local Green Movement Starts Here.
        </h1>
      </div>
    </div>
  );
}

export default Main;
