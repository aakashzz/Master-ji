import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { MdOutlineRefresh } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import Container from "./Container";

function Card() {
   return (
      <div className="w-[358px] h-[570px] border-8 border-white  rounded-2xl bg-[#B6B3F3]">
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
                  <div className="h-28 w-28 flex">
                     <img
                        src="https://avatars.githubusercontent.com/u/133687137?v=4"
                        className="rounded-full h-28 w-28 shadow-xl"
                        alt=""
                     />
                     <span className="bg-black h-fit px-1.5 text-white text-[10px] rounded-xl  ">
                        Mr
                     </span>
                  </div>
               </div>
               <div className="text-center py-4 space-y-3">
                  <h2 className="text-black text-2xl font-medium">Aakash Malviya</h2>
                  <p className="text-sm">aakashmalviya@123</p>
               </div>
               <div className="space-y-3 py-2">
                  <hr className="border-[#00000020]" />
                  <div className="h-auto w-full flex justify-around">
                     <div className="flex items-center gap-x-2">
                        <div className=" p-1 rounded-full w-fit bg-black">
                           <IoLocationOutline className="text-white " />
                        </div>
                        <p className="text-sm">Location</p>
                     </div>
                     <div className="flex items-center gap-x-2">
                        <div className=" p-1 rounded-full w-fit bg-black">
                           <BsTelephone className="text-white " />
                        </div>
                        <p className="text-sm">Call me</p>
                     </div>
                  </div>
                  <hr className="border-[#00000020] " />
               </div>
            </div>
         </Container>
      </div>
   );
}

export default Card;
