import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { MdOutlineRefresh } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import Container from "./Container";

function Card() {
   return (
      <div className="w-[358px] h-[610px] border-8 border-white  rounded-2xl bg-[#B6B3F3]">
         <Container>
            <nav className="h-12 w-full  flex justify-between items-center text-2xl">
               <span>
                  <BsArrowLeft />
               </span>
               <span>
                  <h3 className="text-[16px] text-[#000000B2]">
                     Profile Overview
                  </h3>
               </span>
               <span>
                  <MdOutlineRefresh />
               </span>
            </nav>
            <div className="h-52 w-full pt-4 ">
               <div className="  flex justify-center">
                  <div className="h-[100px] w-[100px] flex">
                     <img
                        src="https://avatars.githubusercontent.com/u/133687137?v=4"
                        className="rounded-full h-[100px] w-[100px] shadow-xl"
                        alt=""
                     />
                     <span className="bg-black h-fit px-1.5 text-white text-[10px] rounded-xl  ">
                        Mr
                     </span>
                  </div>
               </div>
               <div className="text-center py-4 space-y-3">
                  <h2 className="text-black text-2xl font-medium">
                     Aakash Malviya
                  </h2>
                  <p className="text-sm">aakashmalviya@123</p>
               </div>
               <div className="space-y-2 py-1.5">
                  <hr className="border-[#00000020]" />
                  <div className="h-auto w-full flex justify-evenly">
                     <div className="flex items-center gap-x-2">
                        <div className=" p-1 rounded-full w-fit bg-black">
                           <IoLocationOutline className="text-white " />
                        </div>
                        <p className="text-xs">Location</p>
                     </div>
                     <div className="flex items-center gap-x-2">
                        <div className=" p-1 rounded-full w-fit bg-black">
                           <BsTelephone className="text-white " />
                        </div>
                        <p className="text-xs">Call me</p>
                     </div>
                  </div>
                  <hr className="border-[#00000020] " />
               </div>
                  <div className="h-fit w-full grid grid-cols-2 mt-2">
                     <div className=" space-y-3 h-fit">
                        <div>
                           <p className="text-[10px]">City</p>
                           <h3 className="text-lg">Falna</h3>
                        </div>
                        <div>
                           <p className="text-[10px]">Date of birth</p>
                           <h3 className="text-lg">01 November 2004</h3>
                        </div>
                        <div>
                           <p className="text-[10px]">Time zone</p>
                           <h3 className="text-lg">-10:00 (Hawaii)</h3>
                        </div>
                     </div>

                     <div className="space-y-3 h-fit">
                        <div>
                           <p className="text-[10px]">Nationality</p>
                           <h3 className="text-lg">Falna</h3>
                        </div>
                        <div>
                           <p className="text-[10px]">Phone no.</p>
                           <h3 className="text-lg">3439883947</h3>
                        </div>
                        <div>
                           <p className="text-[10px]">Registered Since</p>
                           <h3 className="text-lg">13 November, 2013</h3>
                        </div>
                     </div>
               </div>
               <footer className=" h-auto w-full items-end pt-8">
                  <div className="flex justify-end">
                     <img src="../../public/chaicode2.svg" className="h-[62px] w-[60px]" alt="" />
                  </div>
                  <p className="text-[10px] text-[#FFFFFF66] text-center">@ chai aur code</p>
               </footer>
            </div>
         </Container>
      </div>
   );
}

export default Card;
