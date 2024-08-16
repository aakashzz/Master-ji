import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function RandomJokes() {
   const [count, setCount] = useState(0);

   return (
      <main id="main2" className="h-screen w-screen flex items-center justify-center">
         <Card />
      </main>
   );
}

export default RandomJokes;
  