import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
   return (
      <main className="h-screen w-screen flex items-center justify-center px-4">
         <Outlet />
      </main>
   );
}

export default App;
