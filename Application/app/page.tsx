import Image from "next/image";
import PollutedRiver from "../public/Assets/Dirty/pollution-concept-water-with-garbage.jpg";
import nature from "../public/Assets/Dirty/young-man-covering-base-hole-after-planting-small-tree-woods.jpg";
import forest from "../public/Assets/Dirty/people-cleaning-garbage-from-nature.jpg";
import aerial from "../public/Assets/Clean/aerial-view-colorful-mixed-forest-shrouded-morning-fog-beautiful-autumn-day.jpg";
const images = [PollutedRiver, nature, forest];

// function handleImage(images: any[]) {
//   const randomIndex = Math.floor(Math.random() * images.length);
//   return images[randomIndex];
// }

export default function Home() {
  return (
    <div className=" relative min-h-screen overflow-x-hidden flex flex-col items-center bg-background">
      <div className="relative h-screen w-screen ">
        <div className="absolute w-full h-full z-30 ">
          <div className="w-full border-b-[0.5] h-[10vh] border-b-bilbao-50/20">
            <header className="text-bilbao-50 tracking-wide z-50  p-4 w-[90%] mx-auto flex justify-between ">
              <div className="flex items-center  ">
                <p className="font-semibold font-Raleway text-2xl ">GreenNet</p>
              </div>
            </header>
          </div>

          <div className="w-full border-b-[0.5] h-[50vh] border-b-bilbao-50/20">
            <div className="  text-bilbao-50 w-[90%] p-3 mx-auto flex flex-col justify-center h-full">
              <h1 className="font-extrabold font-Raleway text-4xl md:text-6xl ">
                Cleaner Cities, Connected Citizens.
              </h1>
            </div>
          </div>
          <div className=" flex flex-col sm:flex sm:flex-row justify-evenly gap-2 items-center w-full p-4 h-[40vh]">
            <div className="bg-bilbao-50/10 w-full sm:w-1/4 flex justify-center items-center p-3 rounded-lg backdrop-blur-sm border-[0.5px] border-bilbao-50/20 font-Raleway text-bilbao-50 font-semibold  tracking-wide text-md  h-1/2">
              Connect
            </div>
            <div className="bg-bilbao-50/10 w-full sm:w-1/4 flex justify-center items-center p-3 rounded-lg backdrop-blur-sm border-[0.5px] border-bilbao-50/20 font-Raleway text-bilbao-50 font-semibold tracking-wide text-md  h-1/2">
              Act
            </div>
            <div className="bg-bilbao-50/10 w-full sm:w-1/4 flex justify-center items-center p-3 rounded-lg backdrop-blur-sm border-[0.5px] border-bilbao-50/20 font-Raleway text-bilbao-50 font-semibold tracking-wide text-md h-1/2">
              Together
            </div>
          </div>
        </div>
        <div className="w-full h-full absolute bg-black/60 z-20  top-0 "></div>
        <Image
          src={nature}
          alt="polluted river"
          className="w-full h-full absolute top-0 z-10 blur-[2px] object-cover"
        />
      </div>

      <div className="  w-screen h-screen flex flex-col p-3 bg-de-york-50">
        <div className="w-[90%] mx-auto text-center mt-20">
          <div className="w-full p-3 h-auto ">
            <h1 className="font-Raleway text-md text-bilbao-950 font-semibold tracking-wider ">
              GREEN BEGINS WITH YOU.
            </h1>
            <h3 className="font-Raleway text-3xl mt-10 font-extrabold leading-10 text-bilbao-950 ">
              GreenNet is a digital platform empowering communities to discover,
              organize, and participate in local environmental programs — from
              clean-up drives to tree plantation events. We aim to create a
              connected network of eco-conscious citizens working together for a
              cleaner, greener tomorrow.
            </h3>
          </div>
        </div>
      </div>

      <div className="w-screen h-screen flex justify-center items-center bg-de-york-50 ">
        <div className="relative w-[90%] h-[90%] bg-yellow-200">
          <Image
            src={aerial}
            alt="aerial view of a forest"
            className=" object-cover w-full rounded-lg h-full"
          />
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center  bg-black/60 rounded-lg">
            <h1 className="font-Raleway font-semibold text-bilbao-50 text-center w-[90%] mx-auto text-wrap text-4xl leading-12">Community-driven platform that connects people with real-world environmental initiatives in their localities, fostering civic participation, environmental education, and sustainable living.</h1>
          </div>
        </div>
      </div>
      <div className="w-screen h-screen bg-yellow-50"></div>
    </div>
  );
}
