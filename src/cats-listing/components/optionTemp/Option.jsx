import React from "react";

function Option({ str }) {
   let words = str.split(" ");

   return (
      <>
         {words.map((data, index) => {
            return (
               <div className="bg-gray-200 w-fit rounded-2xl px-1.5 mt-2 hover:bg-[#D482DB] duration-300 cursor-pointer hover:text-white">
                  <p key={index} className="text-[11px] w-fit">
                     {data}
                  </p>
               </div>
            );
         })}
      </>
   );
}

export default Option;
