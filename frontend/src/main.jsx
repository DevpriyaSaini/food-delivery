import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import StoreContextProvider from "./Context/StoreContext.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder.jsx";
import Home from "./pages/Home/Home.jsx";
import Myorder from "./pages/Myorder/Myorder.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/order",
        element: <PlaceOrder />
      },
      {
        path: "/myorders",
        element: <Myorder />
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StoreContextProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </StoreContextProvider>
);
