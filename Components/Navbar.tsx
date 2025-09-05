"use client";
import { userAtom } from "@/app/store/recoil";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useRecoilState} from "recoil";
import Toast from "./Toast";
import { getUserState, logout } from "@/Actions/actions"; // Add logout action
import Link from "next/link";

function Navbar() {
  const [userData, setUserData] = useRecoilState(userAtom);
  const [toastMessage, setToastMessage] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    async function getUser() {
      try {
        const user = await getUserState();
        setUserData(user);
        setLoading(false);
      } catch (error) {
        setUserData(null);
      }
    }
    getUser();
  }, []);

  const handleLogout = async () => {
    try {
      const result = await logout();
      if (result.success) {
        setToastMessage("Logged out successfully");
        setShow(true);
        setUserData(null);
        setTimeout(() => {
          setShow(false);
          setToastMessage("");
          router.push("/signin");
        }, 2000);
      }
    } catch (error) {
      setToastMessage("Logout failed");
      setShow(true);
    }
  };

  return (
    <div className=" mt-3 w-full h-[8vh] flex font-Raleway overflow-x-hidden items-center justify-between px-8 sm:px-16 py-2">
      <div
        onClick={() => {
          setToastMessage("Redirecting to homepage");
          setShow(true);
          setTimeout(() => {
            router.push("/");
            setShow(false);
            setToastMessage("");
          }, 2000);
        }}
        className="h-full max-w-sm w-full hover:cursor-pointer flex justify-start items-center"
      >
        <svg
          className="w-6 h-6 text-bilbao-950 font-semibold"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M20.998 3V5C20.998 14.6274 15.6255 19 8.99805 19L7.0964 18.9999C7.3079 15.9876 8.24541 14.1648 10.6939 11.9989C11.8979 10.9338 11.7965 10.3189 11.2029 10.6721C7.1193 13.1016 5.09114 16.3862 5.00119 21.6302L4.99805 22H2.99805C2.99805 20.6373 3.11376 19.3997 3.34381 18.2682C3.1133 16.9741 2.99805 15.2176 2.99805 13C2.99805 7.47715 7.4752 3 12.998 3C14.998 3 16.998 4 20.998 3Z"></path>
        </svg>
        <h1 className="font-semibold tracking-wide text-bilbao-950 font-raleway text-lg sm:text-xl">
          GreenNet
        </h1>
      </div>
        {
          open && (
            <div className="absolute top-16 h-1/4 items-center justify-center md:hidden transition-all duration-700 ease-in-out w-full left-0 px-8 rounded-md py-4 backdrop-blur-3xl gap-4 flex flex-col ">
              <Link target="_blank" className="w-full text-center font-semibold border-[1px] border-bilbao-900/20 rounded-md p-1" href='https://github.com/sanemishinazugawa11/GreenNet'>Github</Link>
              <button
                onClick={handleLogout}
                className="text-bilbao-950 w-full hover:cursor-pointer bg-bilbao-300 font-raleway border-[0.5px] border-bilbao-500/20 tracking-wide font-semibold px-4 py-1 rounded-lg"
              >
                Logout
              </button>
            </div>
          )
        }
      {!loading  && (
        <svg
          onClick={() => {
            setOpen(!open);
          }}
          className="w-6 h-6 font-semibold text-bilbao-950 block md:hidden"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
        </svg>
      )}

      {loading ? (
        <div className="flex items-center justify-end w-full h-full">
          <svg
            className="w-6 h-6 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M12 2C12.5523 2 13 2.44772 13 3V6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6V3C11 2.44772 11.4477 2 12 2ZM12 17C12.5523 17 13 17.4477 13 18V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V18C11 17.4477 11.4477 17 12 17ZM22 12C22 12.5523 21.5523 13 21 13H18C17.4477 13 17 12.5523 17 12C17 11.4477 17.4477 11 18 11H21C21.5523 11 22 11.4477 22 12ZM7 12C7 12.5523 6.55228 13 6 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H6C6.55228 11 7 11.4477 7 12ZM19.0711 19.0711C18.6805 19.4616 18.0474 19.4616 17.6569 19.0711L15.5355 16.9497C15.145 16.5592 15.145 15.9261 15.5355 15.5355C15.9261 15.145 16.5592 15.145 16.9497 15.5355L19.0711 17.6569C19.4616 18.0474 19.4616 18.6805 19.0711 19.0711ZM8.46447 8.46447C8.07394 8.85499 7.44078 8.85499 7.05025 8.46447L4.92893 6.34315C4.53841 5.95262 4.53841 5.31946 4.92893 4.92893C5.31946 4.53841 5.95262 4.53841 6.34315 4.92893L8.46447 7.05025C8.85499 7.44078 8.85499 8.07394 8.46447 8.46447ZM4.92893 19.0711C4.53841 18.6805 4.53841 18.0474 4.92893 17.6569L7.05025 15.5355C7.44078 15.145 8.07394 15.145 8.46447 15.5355C8.85499 15.9261 8.85499 16.5592 8.46447 16.9497L6.34315 19.0711C5.95262 19.4616 5.31946 19.4616 4.92893 19.0711ZM15.5355 8.46447C15.145 8.07394 15.145 7.44078 15.5355 7.05025L17.6569 4.92893C18.0474 4.53841 18.6805 4.53841 19.0711 4.92893C19.4616 5.31946 19.4616 5.95262 19.0711 6.34315L16.9497 8.46447C16.5592 8.85499 15.9261 8.85499 15.5355 8.46447Z"></path>
          </svg>
        </div>
      ) : (
        <div className="hidden md:flex items-center justify-center gap-4">
          <button className="text-bilbao-950 font-raleway tracking-wide font-semibold px-4 py-1 w-auto bg-de-york-200 border-[0.5px] border-bilbao-500/30 rounded-lg">
            Github
          </button>
          {userData !== null ? (
            <button
              onClick={handleLogout}
              className="text-bilbao-950 hover:cursor-pointer font-raleway border-[0.5px] border-bilbao-500/20 tracking-wide font-semibold px-4 py-1 w-auto rounded-lg"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => router.push("/signup")}
              className="text-bilbao-950 hover:cursor-pointer font-raleway border-[0.5px] border-bilbao-500/20 tracking-wide font-semibold px-4 py-1 w-auto rounded-lg"
            >
              Signup
            </button>
          )}
        </div>
      )}

      {show && toastMessage.length > 2 && (
        <Toast
          message={toastMessage}
          handleClick={() => {
            setShow(false);
            setToastMessage("");
          }}
        />
      )}
    </div>
  );
}

export default Navbar;
