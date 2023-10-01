import React, { useState } from "react";
import { IoMdNotifications } from "react-icons/io";
import {
  BiSolidMessageSquareMinus,
  BiSolidDownArrow,
  BiTask,
} from "react-icons/bi";
import { BsFolderFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { LiaSearchSolid } from "react-icons/lia";
import Sidebar from "./Sidebar";
import Content from "./Content";

const Navbar = () => {

  const [menu, setMenu] = useState("invisible")
  const [state, setState] = useState("hidden")


  const togglemenu = () => {
    if (menu === "invisible") {
      setState("block")
      setTimeout(() => {
        setMenu("visible")
      }, 100);
    } else {
      
        setMenu("invisible")
        setTimeout(() => {
          setState("hidden")
        }, 100);
    }
  }

  return (
    <>
      <div className="flex flex-row">
        <div>
          <Sidebar togglemenu = {togglemenu} menu = {menu} state = {state}/>
        </div>
        <div className=" xl:pl-72 lg:pl-44 w-full ">
          <div className="h-24 w-full flex-row justify-between px-2 items-center gap-x-5 bg-[#15132B] hidden sm:hidden md:hidden lg:flex xl:flex">
            <div className="flex justify-center items-center relative">
              <LiaSearchSolid className="left-6 flex items-center text-[#7879F1] h-6 w-6 absolute" />
              <input
                className="text-sm h-10 px-16 lg:w-60 xl:w-80 rounded-full bg-[#211A75]"
                type="search"
                placeholder="Search here"
              />
            </div>

            <div className="flex justify-center items-center">
              <span className="text-[#6418C3] uppercase text-sm underline">
                Other menus
              </span>
            </div>

            <div className="flex flex-row gap-x-6">
              <div className="relative">
                <IoMdNotifications className="text-[#7879F1] h-7 w-7" />
                <span className="-top-2 -right-2 text-[#0D0B21] flex justify-center items-center font-bold text-sm rounded-xl h-5 w-5 bg-[#5ECFFF] absolute">
                  12
                </span>
              </div>
              <div className="relative">
                <BiTask className="text-[#464366] h-7 w-7" />
                <span className="-top-2 -right-2 text-[#0D0B21] flex justify-center items-center font-bold text-sm rounded-xl h-5 w-5 bg-[#5ECFFF] absolute">
                  5
                </span>
              </div>

              <div className="relative">
                <BiSolidMessageSquareMinus className="text-[#7879F1] h-7 w-7" />
                <span className="-top-2 -right-2 text-[#0D0B21] flex justify-center items-center font-bold text-sm rounded-xl h-5 w-5 bg-[#5ECFFF] absolute">
                  2
                </span>
              </div>
              <div className="relative">
                <BsFolderFill className="text-[#7879F1] h-7 w-7" />
                <span className="-top-2 -right-2 text-[#0D0B21] flex justify-center items-center font-bold text-sm rounded-xl h-5 w-5 bg-[#E328AF] absolute">
                  1
                </span>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="bg-[#211A75] flex flex-row gap-x-3 justify-center items-center h-10 w-36 rounded-full uppercase font-bold text-[#FFFFFF]">
                <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
                <span>English</span>
              </div>
            </div>

            <div className="flex flex-row gap-x-4 items-center">
              <div className="bg-[#C4C4C4] rounded-lg h-10 w-10"></div>
              <div className="flex flex-col">
                <span className="text-[#FFFFFF] text-sm font-bold">
                  Instructor Day
                </span>
                <span className="text-[#7879F1] text-xs">Super Admin</span>
              </div>
              <BiSolidDownArrow className="text-[#6418C3] text-sm" />
            </div>
          </div>

          <div className="h-16 w-full bg-[#15132B] px-2 flex-row justify-between items-center flex sm:flex md:flex lg:hidden xl:hidden">

            <div className="flex flex-row justify-center items-center h-20 px-2 gap-x-4">
              <div className="flex justify-end items-center">
                <GiHamburgerMenu onClick={(()=>{togglemenu()})} className="h-6 w-6 text-[#7879F1]" />
              </div>
              <h2 className="flex justify-center items-center text-[#FFFFFF] w-full text-xl font-normal">
                weframetech
              </h2>
            </div>

             <div className="flex flex-row gap-x-4 items-center">
              <div className="bg-[#C4C4C4] rounded-lg h-10 w-10"></div>
              <div className="flex flex-col">
                <span className="text-[#FFFFFF] text-xs font-bold">
                  Instructor Day
                </span>
                <span className="text-[#7879F1] text-xs">Super Admin</span>
              </div>
              <BiSolidDownArrow className="text-[#6418C3] text-sm" />
            </div>

          </div>

          <Content />
        </div>
      </div>
    </>
  );
};

export default Navbar;
