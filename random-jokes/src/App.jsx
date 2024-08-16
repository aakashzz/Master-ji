import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
   const [count, setCount] = useState(0);

   return (
      <main className="h-screen w-screen flex items-center justify-center">
         <Card />
      </main>
   );
}

export default App;
  