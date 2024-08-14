import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Maps from "./components/Map.jsx";
import Card from "./components/Card.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      children: [
         {
            path: "/",
            element: <Card />,
         },
         {
            path: "/map",
            element: <Maps />,
         },
      ],
   },
]);

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <Provider store={store}>
         <RouterProvider router={router} />
      </Provider>
   </StrictMode>
);
