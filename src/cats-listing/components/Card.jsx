import React from "react";
import "./Card.css";
import Option from "./optionTemp/Option";
import { Link } from "react-router-dom";
import Text from './textMini/Text'

function Card({img, content,title, origin, temp, life,wikiLink}) {
   
   return (
      <>
      <div className="h-[600px] w-[375px] shadow-xl  rounded-[18px] mx-4 ">
         <div className="h-[300px] w-full">
            <img
               src={img}
               alt=""
               className="  rounded-t-[18px] size-[100%] object-cover"
            />
         </div>
         <div className="bg-white h-[300px] w-full rounded-b-[18px] px-4 py-3">
            <h2 className="text-2xl font-semibold ">{title}</h2>
               <Text text={content} limit={200} className={"text-xs pt-2"}/>
            <div className="pt-3 space-x-14 text-[14px]">
               <i className="font-medium">Origin</i>
               <span className="">{origin}</span>
            </div>
            <div className="pt-3 text-[14px]  w-full">
               <i className="font-medium">Temperament</i>
               <span className="flex gap-x-3">

               <Option str={temp} />
               </span>
            </div>
            <div className="pt-3 space-x-14 text-[14px]">
               <i className="font-medium">Life Span</i>
               <span className="">{life} Year</span>
            </div>
            <div className="pt-8">
               <Link to={wikiLink} className="text-[14px] text-[#7D99E2]">
                  Learn More
               </Link>
            </div>
         </div>
      </div>
      </>
   );
}

export default Card;
