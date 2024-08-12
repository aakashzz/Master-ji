import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { MdOutlineRefresh } from "react-icons/md";

function Card() {
   return (
      <div className="w-[358px] h-[570px] border-8 border-white  rounded-2xl bg-[#B6B3F3]">
         <nav className="h-12 w-full  flex justify-between items-center px-4 text-2xl">
            <span>
               <BsArrowLeft />
            </span>
            <span>
               <h2 className="text-xl">Profile Overview</h2>
            </span>
            <span>
               <MdOutlineRefresh />
            </span>
         </nav>
         <div className="h-52 w-full border">
            <div>
                <img src="" alt="" />
            </div>
         </div>
      </div>
   );
}

export default Card;
