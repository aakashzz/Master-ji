import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import axios from "axios";
import Loading from "./components/Loading/Loading";


function CatsListing() {
   const [loading, setLoading] = useState(true);
   const [listing, setListing] = useState([]);

   useEffect(() => {
      axios("https://api.freeapi.app/api/v1/public/cats?page=1")
         .then((data) => {
            setListing(data.data.data.data);
         })
         .catch((error) => {
            console.error(error);
         })
         .finally(setLoading(false));
   }, [loading]);
   return (
      <main
         id="main3"
         className="h-full grid grid-flow-col justify-items-center items-center   overflow-x-scroll bg-[#AFAFAF]"
      >
         {loading ? (
            <>
               <Loading />
            </>
         ) : (
            <>
               
                  {listing.map((data) => {
                     return (
                        <Card
                           img={data?.image}
                           title={data?.name}
                           content={data?.description}
                           temp={data?.temperament}
                           life={data?.life_span}
                           origin={data?.origin}
                           wikiLink={data?.wikipedia_url}
                           key={data?.id}
                        />
                     );
                  })}
            </>
         )}
      </main>
   );
}

export default CatsListing;
