import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiDashboard2Fill } from "react-icons/ri";
import { AiFillCalendar, AiFillShopping } from "react-icons/ai";
import { BiSolidContact, BiTask, BiSolidMessageSquareMinus, } from "react-icons/bi";
import {
  MdEmail,
  MdViewKanban,
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
  MdOutlineArrowRightAlt,
} from "react-icons/md";
import { IoChatbubblesSharp, IoSettingsSharp } from "react-icons/io5";
import { LiaSearchSolid, LiaFileInvoiceSolid } from "react-icons/lia";
import { IoMdNotifications } from "react-icons/io";
import { BsFolderFill } from "react-icons/bs";
import { RxDoubleArrowLeft } from "react-icons/rx";


const Sidebar = ({togglemenu, menu, state}) => {
  return (
    <>
      <div className="shadow-md shadow-black text-base font-medium bg-[#15132B] h-full lg:w-44 xl:w-72 fixed space-y-2 overflow-hidden z-50 hidden sm:hidden md:hidden lg:block">
        <div className="flex flex-row justify-center items-center h-20 w-full px-8 gap-x-2">
          <h2 className="flex justify-center items-center text-[#FFFFFF] w-full text-xl font-extralight">
            weframetech
          </h2>
          <div className="flex justify-end items-center">
            <GiHamburgerMenu className="h-5 w-5 text-[#7879F1]" />
          </div>
        </div>

        <div className="flex flex-col gap-y-4 w-full h-auto lg:px-1 xl:px-8">
          <span className="text-[#FFFFFF] text-xs font-normal uppercase">
            Main Menu
          </span>
          <div className="flex flex-col gap-y-3">
            <div className="flex flex-row gap-x-6 items-center">
              <RiDashboard2Fill className="text-[#464366] h-6 w-6" />
              <span className="text-[#464366] text-sm">Dashboard</span>
            </div>
            <div className="flex flex-row gap-x-6 items-center justify-between">
              <div className="flex flex-row items-center gap-x-6">
                <MdEmail className="text-[#464366] h-6 w-6" />
                <span className="text-[#464366] text-sm">Email</span>
              </div>
              <div className="flex flex-row items-center gap-x-2">
                <span className="flex justify-center items-center font-bold text-sm rounded-full h-6 w-6 text-[#FFFFFF] bg-[#5ECFFF]">
                  17
                </span>
                <MdKeyboardArrowDown className="h-6 w-6 text-[#7879F1]" />
              </div>
            </div>
            <div className="flex flex-row gap-x-6 items-center">
              <IoChatbubblesSharp className="text-[#7879F1] h-6 w-6" />
              <span className="text-[#7879F1] text-sm">Chat</span>
            </div>
            <div className="flex flex-row gap-x-6 items-center justify-between">
              <div className="flex flex-row gap-x-6 items-center">
                <MdViewKanban className="text-[#6418C3] h-6 w-6" />
                <span className="text-[#6418C3] text-sm">Kanban</span>
              </div>
              <div className="items-center">
                <MdKeyboardArrowRight className="h-6 w-6 text-[#7879F1]" />
              </div>
            </div>

            <div className="flex flex-row gap-x-6 items-center justify-between">
              <div className="flex flex-row gap-x-6 items-center">
                <BiSolidContact className="text-[#7879F1] h-6 w-6" />
                <span className="text-[#7879F1] text-sm">Contact</span>
              </div>
              <div className="h-5 w-14 items-center justify-center rounded-full bg-[#E328AF]">
                <span className="h-5 w-14 flex justify-center items-center text-xs  text-[#FFFFFF] uppercase">
                  New
                </span>
              </div>
            </div>
            <div className="flex flex-row gap-x-6 items-center">
              <AiFillCalendar className="text-[#7879F1] h-6 w-6" />
              <span className="text-[#7879F1] text-sm">Calendar</span>
            </div>
            <div className="flex flex-row gap-x-6 items-center justify-between">
              <div className="flex flex-row gap-x-6 items-center">
                <BiTask className="text-[#464366] h-6 w-6" />
                <span className="text-[#7879F1] text-sm">Courses</span>
              </div>
              <div className="items-center">
                <MdKeyboardArrowRight className="h-6 w-6 text-[#7879F1]" />
              </div>
            </div>
            <div className="flex flex-row gap-x-6 items-center">
              <AiFillShopping className="text-[#464366] h-6 w-6" />
              <span className="text-[#7879F1] text-sm">Shop</span>
            </div>

            <div className="flex flex-row gap-x-6 items-center justify-between">
              <div className="flex flex-row gap-x-6 items-center">
                <LiaFileInvoiceSolid className="text-[#7879F1] h-6 w-6" />
                <span className="text-[#7879F1] text-sm">Invoices</span>
              </div>
              <div className="items-center">
                <MdKeyboardArrowRight className="h-6 w-6 text-[#7879F1]" />
              </div>
            </div>
            <div className="flex flex-row gap-x-6 items-center">
              <IoSettingsSharp className="text-[#7879F1] h-6 w-6" />
              <span className="text-[#7879F1] text-sm">Settings</span>
            </div>
          </div>
          <div className="bg-sky-500 h-32 flex flex-col items-center justify-center rounded-xl relative shadow-md shadow-sky-500">
            <span className="z-20 px-4 flex justify-center items-center text-[#FFFFFF]">
              Increase your work with Kanban
            </span>
            <div className="flex justify-start items-start w-full px-4">
              <MdOutlineArrowRightAlt className="text-[#FFFFFF] h-8 w-8 z-20" />
            </div>
            <div className="absolute h-20 w-20 bg-sky-400 bottom-0 right-0 rounded-tl-full shadow-md shadow-sky-400"></div>
          </div>
        </div>
      </div>

  

        <div className={`shadow-md shadow-black text-base font-medium bg-[#15132B] space-y-6 h-full w-72 fixed z-50 block ${state} sm:${state} md:${state} lg:hidden overflow-y-scroll py-4 ${
              menu == "invisible"
                ? "transition ease-out delay-100 duration-100 opacity-0 translate-x-1"
                : "transition ease-in duration-100 opacity-100 translate-x-0"
            }`}>
          {/*  */}

          <div className="flex flex-row justify-center items-center h-12 w-full px-8 gap-x-2">
            <h2 className="flex justify-start items-center text-[#FFFFFF] w-full text-xl font-extralight">
              weframetech
            </h2>
            <div className="flex justify-end items-center">
              <RxDoubleArrowLeft onClick={togglemenu} className="h-8 w-8 text-[#7879F1]" />
            </div>
          </div>

          <div className="flex justify-center items-center relative px-6">
              <LiaSearchSolid className="left-10 flex items-center text-[#7879F1] h-6 w-6 absolute" />
              <input
                className="text-sm text-[#FFFFFF] h-10 px-12 w-full rounded-full bg-[#211A75]"
                type="search"
                placeholder="Search here"
              />
            </div>


            <div className="flex flex-row justify-between items-center px-8">
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



          <div className="flex flex-col gap-y-4 w-full h-auto px-8">
            <span className="text-[#FFFFFF] text-xs font-normal uppercase">
              Main Menu
            </span>
            <div className="flex flex-col gap-y-3">
              <div className="flex flex-row gap-x-6 items-center">
                <RiDashboard2Fill className="text-[#464366] h-6 w-6" />
                <span className="text-[#464366] text-sm">Dashboard</span>
              </div>
              <div className="flex flex-row gap-x-6 items-center justify-between">
                <div className="flex flex-row items-center gap-x-6">
                  <MdEmail className="text-[#464366] h-6 w-6" />
                  <span className="text-[#464366] text-sm">Email</span>
                </div>
                <div className="flex flex-row items-center gap-x-2">
                  <span className="flex justify-center items-center font-bold text-sm rounded-full h-6 w-6 text-[#FFFFFF] bg-[#5ECFFF]">
                    17
                  </span>
                  <MdKeyboardArrowDown className="h-6 w-6 text-[#7879F1]" />
                </div>
              </div>
              <div className="flex flex-row gap-x-6 items-center">
                <IoChatbubblesSharp className="text-[#7879F1] h-6 w-6" />
                <span className="text-[#7879F1] text-sm">Chat</span>
              </div>
              <div className="flex flex-row gap-x-6 items-center justify-between">
                <div className="flex flex-row gap-x-6 items-center">
                  <MdViewKanban className="text-[#6418C3] h-6 w-6" />
                  <span className="text-[#6418C3] text-sm">Kanban</span>
                </div>
                <div className="items-center">
                  <MdKeyboardArrowRight className="h-6 w-6 text-[#7879F1]" />
                </div>
              </div>

              <div className="flex flex-row gap-x-6 items-center justify-between">
                <div className="flex flex-row gap-x-6 items-center">
                  <BiSolidContact className="text-[#7879F1] h-6 w-6" />
                  <span className="text-[#7879F1] text-sm">Contact</span>
                </div>
                <div className="h-5 w-14 items-center justify-center rounded-full bg-[#E328AF]">
                  <span className="h-5 w-14 flex justify-center items-center text-xs  text-[#FFFFFF] uppercase">
                    New
                  </span>
                </div>
              </div>
              <div className="flex flex-row gap-x-6 items-center">
                <AiFillCalendar className="text-[#7879F1] h-6 w-6" />
                <span className="text-[#7879F1] text-sm">Calendar</span>
              </div>
              <div className="flex flex-row gap-x-6 items-center justify-between">
                <div className="flex flex-row gap-x-6 items-center">
                  <BiTask className="text-[#464366] h-6 w-6" />
                  <span className="text-[#7879F1] text-sm">Courses</span>
                </div>
                <div className="items-center">
                  <MdKeyboardArrowRight className="h-6 w-6 text-[#7879F1]" />
                </div>
              </div>
              <div className="flex flex-row gap-x-6 items-center">
                <AiFillShopping className="text-[#464366] h-6 w-6" />
                <span className="text-[#7879F1] text-sm">Shop</span>
              </div>

              <div className="flex flex-row gap-x-6 items-center justify-between">
                <div className="flex flex-row gap-x-6 items-center">
                  <LiaFileInvoiceSolid className="text-[#7879F1] h-6 w-6" />
                  <span className="text-[#7879F1] text-sm">Invoices</span>
                </div>
                <div className="items-center">
                  <MdKeyboardArrowRight className="h-6 w-6 text-[#7879F1]" />
                </div>
              </div>
              <div className="flex flex-row gap-x-6 items-center">
                <IoSettingsSharp className="text-[#7879F1] h-6 w-6" />
                <span className="text-[#7879F1] text-sm">Settings</span>
              </div>
            </div>
            <div className="bg-sky-500 h-32 flex flex-col items-center justify-center rounded-xl relative shadow-md shadow-sky-500">
              <span className="z-20 px-4 flex justify-center items-center text-[#FFFFFF]">
                Increase your work with Kanban
              </span>
              <div className="flex justify-start items-start w-full px-4">
                <MdOutlineArrowRightAlt className="text-[#FFFFFF] h-8 w-8 z-20" />
              </div>
              <div className="absolute h-20 w-20 bg-sky-400 bottom-0 right-0 rounded-tl-full shadow-md shadow-sky-400"></div>
            </div>
          </div>

        </div>

     
    </>
  );
};

export default Sidebar;
