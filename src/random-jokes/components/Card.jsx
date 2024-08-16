import React, { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { BiMessageRounded } from "react-icons/bi";
import { BiRepost } from "react-icons/bi";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsBookmark } from "react-icons/bs";
import { GoShare } from "react-icons/go";
import { SlOptions } from "react-icons/sl";
import Loading from "./Loading/Loading.jsx";
import axios from "axios";

function getGenerate(){
    const shortMonths = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    let views = Math.floor(Math.random() * 100);
    let likes = Math.floor(Math.random() * 500);
    let retweet = Math.floor(Math.random() * 200);
    let comment = Math.floor(Math.random() * 500);
    let save = Math.floor(Math.random() * 200);
    let date = Math.floor(Math.random() * 31)
    let minutes = Math.floor(Math.random() * 59)
    let hours = Math.floor(Math.random() * 12)
    let month = shortMonths[Math.floor(Math.random() * 12)]

    return {views, likes, retweet, date, minutes, hours, month, comment, save}
}
function Card() {
   const [loading, setLoading] = useState(true);
   const [jokesData, setJokesData] = useState("");

   useEffect(() => {
      axios(
         "https://api.freeapi.app/api/v1/public/randomjokes/joke/random"
      ).then((data) => {
        setJokesData(data.data.data.content)
      }).catch((error)=>{
        console.log(error);
      }).finally(setLoading(false))
   }, [loading]);

   const {retweet,likes,views, date, minutes, hours, month, comment, save} = getGenerate()
   return (
      <>
         {loading ? (
            <>
               <Loading />
            </>
         ) : (
            <>
            <main className="h-[300px] w-[530px] rounded-[12px] text-white bg-black shadow-[#00000040]">
            <div className="h-auto w-full p-3.5 flex items-center gap-x-4 px-8">
               <FaArrowLeftLong className="size-4" />
               <p className="text-xl font-bold">Post</p>
            </div>
            <div className="h-fit w-full flex justify-between px-5 items-center">
               <div className="flex gap-x-2  items-center">
                  <img src="../../public/elon musk.svg" alt="" />
                  <div className="">
                     <div className="flex w-fit gap-x-1">
                        <h2>Elon Musk</h2>
                        <img
                           src="../../public/blue tick.svg"
                           alt=""
                           className="h-[14px] mt-1.5"
                        />
                     </div>
                     <p className="text-xs text-[#A0A0A0]">@elonmusk</p>
                  </div>
               </div>
               <div>
                  <SlOptions className="text-[#A0A0A0]" />
               </div>
            </div>
            {/* random joke block */}
            <div className="px-5 h-16 pt-3">
               <p className="font-normal text-sm">
                  {jokesData}
               </p>
            </div>
            <div className=" h-fit pt-3 px-5    ">
               {/* random create date view etc */}
               <div className=" flex text-[#A0A0A0] text-xs gap-x-1">
                  <p>{hours}:{minutes} PM</p>.<p> {month} {date}, 2024</p>.
                  <p className="">
                     <span className="font-semibold text-white pr-1">
                        {views}M
                     </span>
                     Views
                  </p>
               </div>
               <hr className="border-[#A0A0A0] mt-3" />
               <div className=" text-[#A0A0A0] flex justify-around pt-2">
                  <div className="flex">
                     <BiMessageRounded />
                     <span className="text-xs">{comment}K</span>
                  </div>
                  <div className="flex">
                     <BiRepost />
                     <span className="text-xs">{retweet}K</span>
                  </div>
                  <div className="flex">
                     <IoIosHeartEmpty />
                     <span className="text-xs">{likes}K</span>
                  </div>
                  <div className="flex">
                     <BsBookmark />
                     <span className="text-xs">{save}K</span>
                  </div>
                  <div>
                     <GoShare />
                  </div>
               </div>
               <hr className="border-[#A0A0A0] mt-3" />
            </div>
            <p className="text-[#A0A0A0] text-sm text-center pt-4 ">
               @chai aur code
            </p>
         </main></>
         )}
         
      </>
   );
}

export default Card;
