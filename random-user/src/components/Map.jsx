import React from "react";
import { APIProvider, Map, } from "@vis.gl/react-google-maps";
import { useSelector } from "react-redux";

function Maps() {
   const mapValue = useSelector(state=> state?.map?.apiRes)
   console.log(mapValue);
   const lats = Number(mapValue?.coordinates?.latitude)
   const lng = Number(mapValue?.coordinates?.longitude)
   console.log(lats);
   const position = { lat: lats, lng: lng };
   return (
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAP_KEY}>
         <div id="map" className="h-[100vh] w-[100vh]">
            <Map zoom={5} center={position} />
         </div>
      </APIProvider>
   );
}

export default Maps;
