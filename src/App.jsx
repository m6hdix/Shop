import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductContext from "./Context/ProductContext";
import './index.css'
import routes from "./Route";
const router = createBrowserRouter(routes);
function App() {
  return (
    <ProductContext>
      <RouterProvider router={router} />
    </ProductContext>
  );
}

export default App;
