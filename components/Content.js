import React from "react";
import {
  BiArrowBack,
  BiSolidCommentDots,
  BiSolidPlusSquare,
  BiDotsHorizontalRounded,
} from "react-icons/bi";
import { BsThreeDotsVertical, BsDot } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { IoMdTimer } from "react-icons/io";

const Content = () => {
  return (
    <>
      <div className="xl:px-6 lg:px-2 md:px-4 sm:px-4 px-4 pt-8 h-auto w-full">
        <div className="px-4 py-8 flex flex-col bg-[#15132B] h-auto w-full rounded-xl gap-y-6">
          <div className="flex justify-between">
            <div className="flex flex-row gap-x-5">
              <div className="h-8 w-8 hidden sm:hidden md:hidden lg:flex xl:flex justify-center items-center rounded-full bg-[#A5A5A5]">
                <BiArrowBack className="h-4 w-4" />
              </div>
              <div className="flex flex-col gap-y-2">
                <span className="text-[#FFFFFF] text-lg font-bold">
                  School November Tasks
                </span>
                <span className="text-[#FFFFFF] text-sm font-extralight">
                  Created by Instructor Day on November 31, 2022
                </span>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex-row gap-x-2 hidden sm:hidden md:hidden lg:flex xl:flex">
                <div className="flex flex-col">
                  <span className="text-[#FFFFFF] text-base font-semibold">
                    Centered Martial Arts
                  </span>
                  <span className="text-[#A5A5A5] text-sm font-extralight">
                    Sunnyvale, Ca
                  </span>
                </div>
                <div className="h-10 w-10 bg-gray-300 rounded-lg"></div>
              </div>
              <BsThreeDotsVertical className="h-6 w-6 text-[#A5A5A5] rounded-lg" />
            </div>
          </div>

          <div className="px-0 sm:px-0 md:px-0 lg:px-12 xl:px-12 flex flex-row flex-wrap gap-y-8 gap-x-8">
            <div className="flex flex-row">
            <div className="h-10 w-10 z-40 border flex justify-center items-center border-blue-400 bg-[#FFFFFF] rounded-full"></div>
            <div className="h-10 w-10 z-30 border flex justify-center items-center border-blue-400 -translate-x-4 bg-[#FFFFFF] rounded-full"></div>
            <div className="h-10 w-10 z-20 border flex justify-center items-center border-blue-400 -translate-x-8 bg-[#FFFFFF] rounded-full"></div>
            <div className="h-10 w-10 z-10 border flex justify-center items-center border-blue-400 -translate-x-12 bg-[#FFFFFF] rounded-full"></div>
            <div className="h-10 w-10 z-0 border flex justify-center items-center border-blue-400 -translate-x-16 bg-[#FFFFFF] rounded-full">
              +4
            </div>
            </div>

            {/* <div className="flex flex-wrap gap-6"> */}

            <div className="px-2 bg-[#6418C3] cursor-pointer flex justify-between items-center rounded-lg w-36 h-10">
              <FaUserFriends className="h-5 w-5 text-[#FFFFFF]" />
              <button className="text-[#FFFFFF] font-semibold">
                Invite people
              </button>
            </div>

            <div className="px-2 flex border border-[#6418C3] cursor-pointer  justify-center items-center rounded-lg w-20 h-10">
              <button className="text-[#FFFFFF] font-semibold">Private</button>
            </div>

            <div className="px-2 bg-[#7879F1] cursor-pointer flex justify-center items-center rounded-lg w-16 h-10">
              <button className="text-[#FFFFFF] font-semibold">Edit</button>
            </div>

            <div className="px-2 border border-[#6418C3] cursor-pointer  flex justify-between items-center rounded-lg w-36 h-10">
              <BiSolidCommentDots className="h-5 w-5 text-[#FFFFFF]"/>
              <button className="text-[#FFFFFF] font-semibold">
                45 Comments
              </button>
            </div>

            {/* </div> */}
          </div>

          <div className="flex flex-row flex-wrap justify-start items-center gap-x-4 gap-y-4 sm:gap-x-4 md:gap-x-4 lg:gap-x-0 xl:gap-x-0">
            <span className="px-0 sm:px-0 md:px-0 lg:px-12 xl:px-12 text-sm text-[#FFFFFF] font-semibold justify-start">
              Total Progress 60%
            </span>
            <div className="h-3 w-80 bg-[#FFFFFF] rounded-xl relative">
              <div className="bg-[#6418C3] h-3 w-[60%] absolute left-0 rounded-xl"></div>
            </div>
          </div>
        </div>

        <div className="py-8 flex flex-row gap-x-8 overflow-x-scroll">
          <div className="flex flex-col gap-y-6">
            <div className="pl-4 flex flex-row justify-between items-center w-72">
              <span className="text-[#FFFFFF] text-lg">To-Do List(24)</span>
              <BiSolidPlusSquare className="h-10 w-10 rounded-xl text-[#6418C3]" />
            </div>

            <div className="h-56 w-72 px-2 py-4 flex flex-col gap-y-4 rounded-xl bg-[#211A75]">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center">
                  <BsDot className="h-10 w-10 text-[#FFAB2D]" />
                  <span className="text-lg text-[#FFAB2D]">Important</span>
                </div>
                <BiDotsHorizontalRounded className="text-[#A5A5A5] h-8 w-8 mr-4" />
              </div>
              <div className="px-4">
                <span className="text-[#FFFFFF] text-sm font-bold">
                  Create sign up sheet for holiday student/parent.
                </span>
              </div>
              <div className="px-4">
                <div className="h-3 w-full bg-[#FFFFFF] rounded-xl relative">
                  <div className="bg-[#FFAB2D] h-3 w-[20%] absolute left-0 rounded-xl"></div>
                </div>
              </div>
              <div className="flex flex-row px-4 justify-between items-center">
                <div className="h-8 w-8 z-40 border flex justify-center items-center border-blue-400 bg-[#FFFFFF] rounded-full"></div>
                <div className="h-8 w-8 z-30 border flex justify-center items-center border-blue-400 -translate-x-5 bg-[#FFFFFF] rounded-full"></div>
                <div className="h-8 w-8 z-20 border flex justify-center items-center border-blue-400 -translate-x-10 bg-[#FFFFFF] rounded-full"></div>
                <div className="h-8 w-8 z-10 border flex justify-center items-center border-blue-400 -translate-x-[3.7rem] bg-[#FFFFFF] rounded-full"></div>

                <div className="flex flex-row justify-center items-center gap-x-1">
                  <IoMdTimer className="text-[#A5A5A5]" />
                  <span className="text-[#A5A5A5] text-sm">Due in 4 days</span>
                </div>
              </div>
            </div>

            <div className="h-56 w-72 px-2 py-4 flex flex-col gap-y-4 rounded-xl bg-[#211A75]">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center">
                  <BsDot className="h-10 w-10 text-[#E328AF]" />
                  <span className="text-lg text-[#E328AF]">
                    Instructor Meeting
                  </span>
                </div>
                <BiDotsHorizontalRounded className="text-[#A5A5A5] h-8 w-8 mr-4" />
              </div>
              <div className="px-4">
                <span className="text-[#FFFFFF] text-sm font-bold">
                  Plan holiday demonstration program. Create outline.
                </span>
              </div>
              <div className="px-4">
                <div className="h-3 w-full bg-[#FFFFFF] rounded-xl relative">
                  <div className="bg-[#E328AF] h-3 w-[40%] absolute left-0 rounded-xl"></div>
                </div>
              </div>
              <div className="flex flex-row px-4 justify-between items-center">
                <div className="h-8 w-8 z-40 border flex justify-center items-center border-blue-400 bg-[#FFFFFF] rounded-full"></div>
                <div className="h-8 w-8 z-30 border flex justify-center items-center border-blue-400 -translate-x-5 bg-[#FFFFFF] rounded-full"></div>
                <div className="h-8 w-8 z-20 border flex justify-center items-center border-blue-400 -translate-x-10 bg-[#FFFFFF] rounded-full"></div>
                <div className="h-8 w-8 z-10 border flex justify-center items-center border-blue-400 -translate-x-[3.7rem] bg-[#FFFFFF] rounded-full"></div>

                <div className="flex flex-row justify-center items-center gap-x-1">
                  <IoMdTimer className="text-[#A5A5A5]" />
                  <span className="text-[#A5A5A5] text-sm">Due in 4 days</span>
                </div>
              </div>
            </div>

            <div className="h-56 w-72 px-2 py-4 flex flex-col gap-y-4 rounded-xl bg-[#211A75]">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center">
                  <BsDot className="h-10 w-10 text-[#38E25D]" />
                  <span className="text-lg text-[#38E25D]">Database</span>
                </div>
                <BiDotsHorizontalRounded className="text-[#A5A5A5] h-8 w-8 mr-4" />
              </div>
              <div className="px-4">
                <span className="text-[#FFFFFF] text-sm font-bold">
                  Determine how many boards need to be ordered for testing and
                  demo.
                </span>
              </div>
              <div className="px-4">
                <div className="h-3 w-full bg-[#FFFFFF] rounded-xl relative">
                  <div className="bg-[#38E25D] h-3 w-[15%] absolute left-0 rounded-xl"></div>
                </div>
              </div>
              <div className="flex flex-row px-4 justify-between items-center">
                <div className="h-8 w-8 z-40 border flex justify-center items-center border-blue-400 bg-[#FFFFFF] rounded-full"></div>
                <div className="h-8 w-8 z-30 border flex justify-center items-center border-blue-400 -translate-x-5 bg-[#FFFFFF] rounded-full"></div>
                <div className="h-8 w-8 z-20 border flex justify-center items-center border-blue-400 -translate-x-10 bg-[#FFFFFF] rounded-full"></div>
                <div className="h-8 w-8 z-10 border flex justify-center items-center border-blue-400 -translate-x-[3.7rem] bg-[#FFFFFF] rounded-full"></div>

                <div className="flex flex-row justify-center items-center gap-x-1">
                  <IoMdTimer className="text-[#A5A5A5]" />
                  <span className="text-[#A5A5A5] text-sm">Due in 4 days</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-6">
            <div className="pl-4 flex flex-row justify-between items-center w-72">
              <span className="text-[#FFFFFF] text-lg">In Progress(2)</span>
              <BiSolidPlusSquare className="h-10 w-10 rounded-xl text-[#211A75]" />
            </div>

            <div className="h-56 w-72 px-2 py-4 flex flex-col gap-y-4 rounded-xl bg-[#211A75]">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center">
                  <BsDot className="h-10 w-10 text-[#5ECFFF]" />
                  <span className="text-lg text-[#5ECFFF]">Video</span>
                </div>
                <BiDotsHorizontalRounded className="text-[#A5A5A5] h-8 w-8 mr-4" />
              </div>
              <div className="px-4">
                <span className="text-[#FFFFFF] text-sm font-bold">
                  Create sparring tutorial video for the weekly class.
                </span>
              </div>
              <div className="px-4">
                <div className="h-3 w-full bg-[#FFFFFF] rounded-xl relative">
                  <div className="bg-[#5ECFFF] h-3 w-[80%] absolute left-0 rounded-xl"></div>
                </div>
              </div>
              <div className="flex flex-row px-4 justify-between items-center">
                <div className="h-8 w-8 z-40 border flex justify-center items-center border-blue-400 bg-[#FFFFFF] rounded-full"></div>
                <div className="h-8 w-8 z-30 border flex justify-center items-center border-blue-400 -translate-x-5 bg-[#FFFFFF] rounded-full"></div>
                <div className="h-8 w-8 z-20 border flex justify-center items-center border-blue-400 -translate-x-10 bg-[#FFFFFF] rounded-full"></div>
                <div className="h-8 w-8 z-10 border flex justify-center items-center border-blue-400 -translate-x-[3.7rem] bg-[#FFFFFF] rounded-full"></div>

                <div className="flex flex-row justify-center items-center gap-x-1">
                  <IoMdTimer className="text-[#A5A5A5]" />
                  <span className="text-[#A5A5A5] text-sm">Due in 4 days</span>
                </div>
              </div>
            </div>

            <div className="h-56 w-72 bg-[#07051A] rounded-xl">
              <div className="h-56 w-72 px-2 py-4 flex flex-col gap-y-4 rounded-xl bg-[#211A75] translate-x-2 translate-y-6 rotate-6">
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center">
                    <BsDot className="h-10 w-10 text-[#FF4A55]" />
                    <span className="text-lg text-[#FF4A55]">BUGS FIXING</span>
                  </div>
                  <BiDotsHorizontalRounded className="text-[#A5A5A5] h-8 w-8 mr-4" />
                </div>
                <div className="px-4">
                  <span className="text-[#FFFFFF] text-sm font-bold">
                    Payment gateway needs reauthorization.
                  </span>
                </div>
                <div className="px-4">
                  <div className="h-3 w-full bg-[#FFFFFF] rounded-xl relative">
                    <div className="bg-[#FF4A55] h-3 w-[100%] absolute left-0 rounded-xl"></div>
                  </div>
                </div>
                <div className="flex flex-row px-4 justify-between items-center">
                  <div className="h-8 w-8 z-40 border flex justify-center items-center border-blue-400 bg-[#FFFFFF] rounded-full"></div>
                  <div className="h-8 w-8 z-30 border flex justify-center items-center border-blue-400 -translate-x-5 bg-[#FFFFFF] rounded-full"></div>
                  <div className="h-8 w-8 z-20 border flex justify-center items-center border-blue-400 -translate-x-10 bg-[#FFFFFF] rounded-full"></div>
                  <div className="h-8 w-8 z-10 border flex justify-center items-center border-blue-400 -translate-x-[3.7rem] bg-[#FFFFFF] rounded-full"></div>

                  <div className="flex flex-row justify-center items-center gap-x-1">
                    <IoMdTimer className="text-[#A5A5A5]" />
                    <span className="text-[#A5A5A5] text-sm">
                      Due in 4 days
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-6">
            <div className="pl-4 flex flex-row justify-between items-center w-72">
              <span className="text-[#FFFFFF] text-lg">Done(3)</span>
              <BiSolidPlusSquare className="h-10 w-10 rounded-xl text-[#211A75]" />
            </div>

            <div className="h-56 w-72 px-2 py-4 flex flex-col gap-y-4 rounded-xl bg-[#211A75]">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center">
                  <BsDot className="h-10 w-10 text-[#FF4A55]" />
                  <span className="text-lg text-[#FF4A55]">BUGS FIXING</span>
                </div>
                <BiDotsHorizontalRounded className="text-[#A5A5A5] h-8 w-8 mr-4" />
              </div>
              <div className="px-4">
                <span className="text-[#FFFFFF] text-sm font-bold">
                  Action Buttons needed for Google Maps visits.
                </span>
              </div>
              <div className="px-4">
                <div className="h-3 w-full bg-[#FFFFFF] rounded-xl relative">
                  <div className="bg-[#FF4A55] h-3 w-[100%] absolute left-0 rounded-xl"></div>
                </div>
              </div>
              <div className="flex flex-row px-4 justify-between items-center">
                <div className="h-8 w-8 z-40 border flex justify-center items-center border-blue-400 bg-[#FFFFFF] rounded-full"></div>
                <div className="h-8 w-8 z-30 border flex justify-center items-center border-blue-400 -translate-x-5 bg-[#FFFFFF] rounded-full"></div>
                <div className="h-8 w-8 z-20 border flex justify-center items-center border-blue-400 -translate-x-10 bg-[#FFFFFF] rounded-full"></div>
                <div className="h-8 w-8 z-10 border flex justify-center items-center border-blue-400 -translate-x-[3.7rem] bg-[#FFFFFF] rounded-full"></div>

                <div className="flex flex-row justify-center items-center gap-x-1">
                  <IoMdTimer className="text-[#A5A5A5]" />
                  <span className="text-[#A5A5A5] text-sm">Due in 4 days</span>
                </div>
              </div>
            </div>

            <div className="h-56 w-72 px-2 py-4 flex flex-col gap-y-4 rounded-xl bg-[#211A75]">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center">
                  <BsDot className="h-10 w-10 text-[#38E25D]" />
                  <span className="text-lg text-[#38E25D]">Database</span>
                </div>
                <BiDotsHorizontalRounded className="text-[#A5A5A5] h-8 w-8 mr-4" />
              </div>
              <div className="px-4">
                <span className="text-[#FFFFFF] text-sm font-bold">
                  Update new instructor photos.
                </span>
              </div>
              <div className="px-4">
                <div className="h-3 w-full bg-[#FFFFFF] rounded-xl relative">
                  <div className="bg-[#38E25D] h-3 w-[100%] absolute left-0 rounded-xl"></div>
                </div>
              </div>
              <div className="flex flex-row px-4 justify-between items-center">
                <div className="h-8 w-8 z-40 border flex justify-center items-center border-blue-400 bg-[#FFFFFF] rounded-full"></div>
                <div className="h-8 w-8 z-30 border flex justify-center items-center border-blue-400 -translate-x-5 bg-[#FFFFFF] rounded-full"></div>
                <div className="h-8 w-8 z-20 border flex justify-center items-center border-blue-400 -translate-x-10 bg-[#FFFFFF] rounded-full"></div>
                <div className="h-8 w-8 z-10 border flex justify-center items-center border-blue-400 -translate-x-[3.7rem] bg-[#FFFFFF] rounded-full"></div>

                <div className="flex flex-row justify-center items-center gap-x-1">
                  <IoMdTimer className="text-[#A5A5A5]" />
                  <span className="text-[#A5A5A5] text-sm">Due in 4 days</span>
                </div>
              </div>
            </div>

            <div className="h-56 w-72 px-2 py-4 flex flex-col gap-y-4 rounded-xl bg-[#211A75]">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center">
                  <BsDot className="h-10 w-10 text-[#E328AF]" />
                  <span className="text-lg text-[#E328AF]">
                    Instructor Meeting
                  </span>
                </div>
                <BiDotsHorizontalRounded className="text-[#A5A5A5] h-8 w-8 mr-4" />
              </div>
              <div className="px-4">
                <span className="text-[#FFFFFF] text-sm font-bold">
                  Review/correct yellow belt techniques.
                </span>
              </div>
              <div className="px-4">
                <div className="h-3 w-full bg-[#FFFFFF] rounded-xl relative">
                  <div className="bg-[#E328AF] h-3 w-[100%] absolute left-0 rounded-xl"></div>
                </div>
              </div>
              <div className="flex flex-row px-4 justify-between items-center">
                <div className="h-8 w-8 z-40 border flex justify-center items-center border-blue-400 bg-[#FFFFFF] rounded-full"></div>
                <div className="h-8 w-8 z-30 border flex justify-center items-center border-blue-400 -translate-x-5 bg-[#FFFFFF] rounded-full"></div>
                <div className="h-8 w-8 z-20 border flex justify-center items-center border-blue-400 -translate-x-10 bg-[#FFFFFF] rounded-full"></div>
                <div className="h-8 w-8 z-10 border flex justify-center items-center border-blue-400 -translate-x-[3.7rem] bg-[#FFFFFF] rounded-full"></div>

                <div className="flex flex-row justify-center items-center gap-x-1">
                  <IoMdTimer className="text-[#A5A5A5]" />
                  <span className="text-[#A5A5A5] text-sm">Due in 4 days</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-6">
            <div className="pl-4 flex flex-row justify-between items-center w-72">
              <span className="text-[#FFFFFF] text-lg">Revised(0)</span>
              <BiSolidPlusSquare className="h-10 w-10 rounded-xl text-[#211A75]" />
            </div>

            <div className="h-24 w-72 px-2 py-4 flex flex-col justify-center items-center gap-y-4 rounded-xl bg-[#211A75]">
              <div className="bg-[#15132B] flex justify-center items-center h-12 w-60 rounded-xl outline-dashed outline-2 outline-[#7879F1]">
                <span className="text-[#7879F1]">Move card here</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-6">
            <div className="pl-4 flex flex-row justify-between items-center w-72">
              <span className="text-[#FFFFFF] text-lg">Contant(2)</span>
              <BiSolidPlusSquare className="h-10 w-10 rounded-xl text-[#211A75]" />
            </div>

            <div className="h-56 w-72 px-2 py-4 flex flex-col gap-y-4 rounded-xl bg-[#211A75]">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center">
                  <BsDot className="h-10 w-10 text-[#38E25D]" />
                  <span className="text-lg text-[#38E25D]">Database</span>
                </div>
                <BiDotsHorizontalRounded className="text-[#A5A5A5] h-8 w-8 mr-4" />
              </div>
              <div className="px-4">
                <span className="text-[#FFFFFF] text-sm font-bold">
                  Determine how many boards need to be ordered for testing and
                  demo.
                </span>
              </div>
              <div className="px-4">
                <div className="h-3 w-full bg-[#FFFFFF] rounded-xl relative">
                  <div className="bg-[#38E25D] h-3 w-[20%] absolute left-0 rounded-xl"></div>
                </div>
              </div>
              <div className="flex flex-row px-4 justify-between items-center">
                <div className="h-8 w-8 z-40 border flex justify-center items-center border-blue-400 bg-[#FFFFFF] rounded-full"></div>
                <div className="h-8 w-8 z-30 border flex justify-center items-center border-blue-400 -translate-x-5 bg-[#FFFFFF] rounded-full"></div>
                <div className="h-8 w-8 z-20 border flex justify-center items-center border-blue-400 -translate-x-10 bg-[#FFFFFF] rounded-full"></div>
                <div className="h-8 w-8 z-10 border flex justify-center items-center border-blue-400 -translate-x-[3.7rem] bg-[#FFFFFF] rounded-full"></div>

                <div className="flex flex-row justify-center items-center gap-x-1">
                  <IoMdTimer className="text-[#A5A5A5]" />
                  <span className="text-[#A5A5A5] text-sm">Due in 4 days</span>
                </div>
              </div>
            </div>

            <div className="h-56 w-72 px-2 py-4 flex flex-col gap-y-4 rounded-xl bg-[#211A75]">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center">
                  <BsDot className="h-10 w-10 text-yellow-300" />
                  <span className="text-lg text-yellow-300">Database</span>
                </div>
                <BiDotsHorizontalRounded className="text-[#A5A5A5] h-8 w-8 mr-4" />
              </div>
              <div className="px-4">
                <span className="text-[#FFFFFF] text-sm font-bold">
                  Update new instructor photos.
                </span>
              </div>
              <div className="px-4">
                <div className="h-3 w-full bg-[#FFFFFF] rounded-xl relative">
                  <div className="bg-yellow-300 h-3 w-[25%] absolute left-0 rounded-xl"></div>
                </div>
              </div>
              <div className="flex flex-row px-4 justify-between items-center">
                <div className="h-8 w-8 z-40 border flex justify-center items-center border-blue-400 bg-[#FFFFFF] rounded-full"></div>
                <div className="h-8 w-8 z-30 border flex justify-center items-center border-blue-400 -translate-x-5 bg-[#FFFFFF] rounded-full"></div>
                <div className="h-8 w-8 z-20 border flex justify-center items-center border-blue-400 -translate-x-10 bg-[#FFFFFF] rounded-full"></div>
                <div className="h-8 w-8 z-10 border flex justify-center items-center border-blue-400 -translate-x-[3.7rem] bg-[#FFFFFF] rounded-full"></div>

                <div className="flex flex-row justify-center items-center gap-x-1">
                  <IoMdTimer className="text-[#A5A5A5]" />
                  <span className="text-[#A5A5A5] text-sm">Due in 4 days</span>
                </div>
              </div>
            </div>

            <div className="h-56 w-72 px-2 py-4 flex flex-col gap-y-4 rounded-xl bg-[#211A75]">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center">
                  <BsDot className="h-10 w-10 text-[#38E25D]" />
                  <span className="text-lg text-[#38E25D]">Database</span>
                </div>
                <BiDotsHorizontalRounded className="text-[#A5A5A5] h-8 w-8 mr-4" />
              </div>
              <div className="px-4">
                <span className="text-[#FFFFFF] text-sm font-bold">
                  Update new instructor photos.
                </span>
              </div>
              <div className="px-4">
                <div className="h-3 w-full bg-[#FFFFFF] rounded-xl relative">
                  <div className="bg-[#38E25D] h-3 w-[100%] absolute left-0 rounded-xl"></div>
                </div>
              </div>
              <div className="flex flex-row px-4 justify-between items-center">
                <div className="h-8 w-8 z-40 border flex justify-center items-center border-blue-400 bg-[#FFFFFF] rounded-full"></div>
                <div className="h-8 w-8 z-30 border flex justify-center items-center border-blue-400 -translate-x-5 bg-[#FFFFFF] rounded-full"></div>
                <div className="h-8 w-8 z-20 border flex justify-center items-center border-blue-400 -translate-x-10 bg-[#FFFFFF] rounded-full"></div>
                <div className="h-8 w-8 z-10 border flex justify-center items-center border-blue-400 -translate-x-[3.7rem] bg-[#FFFFFF] rounded-full"></div>

                <div className="flex flex-row justify-center items-center gap-x-1">
                  <IoMdTimer className="text-[#A5A5A5]" />
                  <span className="text-[#A5A5A5] text-sm">Due in 4 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
