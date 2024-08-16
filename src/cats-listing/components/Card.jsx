import React from "react";
import "./Card.css";
import Option from "./optionTemp/Option";
import { Link } from "react-router-dom";

function Card() {
   return (
      <div className="h-[600px] w-[375px] shadow-xl  rounded-[18px] ">
         <div className="h-[300px] w-full">
            <img
               src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
               alt=""
               className="  rounded-t-[18px] size-[100%] object-cover"
            />
         </div>
         <div className="bg-white h-[300px] w-full rounded-b-[18px] px-4 py-3">
            <h2 className="text-2xl font-semibold ">Abyssinian</h2>
            <p className="text-xs pt-2">
               The Abyssinian is easy to care for, and a joy to have in your
               home. They’re affectionate cats and love both people and other
               animals.
            </p>
            <div className="pt-3 space-x-14 text-[14px]">
               <i className="font-medium">Origin</i>
               <span className="">Egypt</span>
            </div>
            <div className="pt-3 text-[14px]">
               <i className="font-medium">Temperament</i>
               <Option str={"Active"} />
            </div>
            <div className="pt-3 space-x-14 text-[14px]">
               <i className="font-medium">Life Span</i>
               <span className="">14-15 Year</span>
            </div>
            <div className="pt-8">
               <Link to={"/"} className="text-[14px] text-[#7D99E2]">
                  Learn More
               </Link>
            </div>
         </div>
      </div>
   );
}

export default Card;
