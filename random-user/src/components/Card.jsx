import React, { useCallback, useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { MdOutlineRefresh } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import Container from "./Container";
import axios from "axios";
import Loading from "./Loader/Loader";
import {Loader} from 'google-maps'


function Card() {
   const loader = new Loader(import.meta.env.VITE_GOOGLE_MAP_KEY) 
   const [response, setResponse] = useState(null);
   const [loading, setLoading] = useState(true);
   const [counter, setCounter] = useState(0);

   const currentLocationMap = async()=>{
      const google = await loader.load();
      const map = new google.maps.Map(document.getElementById('map'), {
         center: {lat: Number(response?.location.coordinates.latitude), lng:Number(response?.location.coordinates.longitude)},
         zoom: 8,
     });
     new google.maps.Marker({
      position:{lat:  Number(response?.location.coordinates.latitude), lng: Number( response?.location.coordinates.longitude)},
      map
     })
   
   }

   useEffect(() => {
      axios("https://api.freeapi.app/api/v1/public/randomusers/user/random")
         .then((data) => {
            console.log(data.data.data);
            setResponse(data.data.data);
         })
         .catch((err) => {
            console.log(err);
            throw err;
         })
         .finally(() => {
            setLoading(false);
         });
   }, [loading, counter]);

   return (
      <>
         {loading ? (
            <>
               <Loading />
            </>
         ) : (
            <>
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
                           <MdOutlineRefresh
                              className="cursor-pointer"
                              onClick={() => setCounter((value) => value + 1)}
                           />
                        </span>
                     </nav>
                     <div className="h-52 w-full pt-4 ">
                        <div className="  flex justify-center">
                           <div className="h-[100px] w-[100px] flex">
                              <img
                                 src={response?.picture.large}
                                 loading="lazy"
                                 className="rounded-full h-[100px] w-[100px] shadow-xl"
                                 alt=""
                              />
                              <span className="bg-black h-fit px-1.5 text-white text-[10px] rounded-xl  ">
                                 {response?.name?.title}
                              </span>
                           </div>
                        </div>
                        <div className="text-center py-4 space-y-3">
                           <h2 className="text-black text-2xl font-medium">
                              {`${response?.name.first} ${response?.name?.last}`}
                           </h2>
                           <p className="text-sm">
                              {response?.login?.username}
                           </p>
                        </div>
                        <div className="space-y-2 py-1.5">
                           <hr className="border-[#00000020]" />
                           <div className="h-auto w-full flex justify-evenly">
                              <div className="flex items-center gap-x-2">
                                 <div className=" p-1 rounded-full w-fit bg-black">
                                    <IoLocationOutline className="text-white " onClick={currentLocationMap}/>
                                 </div>
                                 <p className="text-xs">Location</p>
                              </div>
                              <div className="flex items-center gap-x-2 group">
                                 <div className=" p-1 rounded-full w-fit bg-black">
                                    <BsTelephone className="text-white " />
                                 </div>
                                 <p className="text-xs">Call me</p>
                                 <span class="absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-7 duration-700 text-sm">
                                    Information
                                 </span>
                              </div>
                           </div>
                           <hr className="border-[#00000020] " />
                        </div>
                        <div className="h-fit w-full grid grid-cols-2 mt-2">
                           <div className=" space-y-3 h-fit">
                              <div>
                                 <p className="text-[10px]">City</p>
                                 <h3 className="text-lg">
                                    {response?.location?.city}
                                 </h3>
                              </div>
                              <div>
                                 <p className="text-[10px]">Date of birth</p>
                                 <h3 className="text-lg">01 November 2004</h3>
                              </div>
                              <div>
                                 <p className="text-[10px]">Time zone</p>
                                 <h3 className="text-lg">
                                    {`${
                                       response?.location?.timezone.offset
                                    } (${response?.location.timezone.description.slice(
                                       0,
                                       8
                                    )})`}
                                 </h3>
                              </div>
                           </div>

                           <div className="space-y-3 h-fit">
                              <div>
                                 <p className="text-[10px]">Nationality</p>
                                 <h3 className="text-lg">
                                    {response?.location?.country}
                                 </h3>
                              </div>
                              <div>
                                 <p className="text-[10px]">Phone no.</p>
                                 <h3 className="text-lg">{response?.phone}</h3>
                              </div>
                              <div>
                                 <p className="text-[10px]">Registered Since</p>
                                 <h3 className="text-lg">13 November, 2013</h3>
                              </div>
                           </div>
                        </div>
                        <footer className=" h-auto w-full items-end pt-8">
                           <div className="flex justify-end">
                              <img
                                 src="../../public/chaicode2.svg"
                                 className="h-[62px] w-[60px] fixed  "
                                 alt=""
                              />
                           </div>
                           <p className="text-[10px] text-[#FFFFFF66] text-center">
                              @ chai aur code
                           </p>
                        </footer>
                     </div>
                  </Container>
                  <div id="map">

                  </div>
               </div>
            </>
         )}
      </>
   );
}

export default Card;
