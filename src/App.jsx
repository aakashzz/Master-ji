import { Outlet } from "react-router-dom";

function RandomUser() {
   return (
      <main className="h-screen w-screen flex items-center justify-center  bg-none">
         <Outlet />
      </main>
   );
}

export default RandomUser;
