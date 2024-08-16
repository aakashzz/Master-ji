import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RandomUser from "./random-user/RandomUser.jsx";
import App from './App.jsx'
import RandomJokes from "./random-jokes/RandomJokes.jsx"
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Maps from './random-user/components/Map.jsx'
import { Provider } from "react-redux";
import { store } from "./random-user/store/store.js";
import Card from "./random-user/components/Card.jsx";

const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      children: [
         {
            path:"/",
            element:<RandomUser />
         }
         ,
         {
            path:"/random-user/map",
            element:<Maps />
         },
         {
            path:"/random-jokes",
            element:<RandomJokes />
         }
      ]
   },
]);

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <Provider store={store}>
         <RouterProvider router={router} />
      </Provider>
   </StrictMode>
);
