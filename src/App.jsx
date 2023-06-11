import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductContext from "./Context/ProductContext";
import './index.css'
import routes from "./Route";
import CartContextProvider from "./Context/CartContextProvider";
import Navbar from "./Components/Navbar";
const router = createBrowserRouter(routes);
function App() {
  return (
    <ProductContext>
      <CartContextProvider>
        <Navbar/>
      <RouterProvider router={router} />
      </CartContextProvider>
    </ProductContext>
  );
}

export default App;
