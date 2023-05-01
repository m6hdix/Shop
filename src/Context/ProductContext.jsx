import React, { createContext, useEffect, useState } from "react";
import { GetProducts } from "../Services/Api";

// Create a new context object
export const ContextProvider = createContext();

// Declare a functional component called ProductContext
 const ProductContext = (props) => {
  // Use state hook to define products as an empty array by default
  const [products, setProducts] = useState([]);

  // Fetch the data from the API endpoint using the async function provided in the Api.js file, when the component mounts
  useEffect(() => {
    const fetchApi = async () => {
      setProducts(await GetProducts());
    };
    fetchApi();
  }, []);
  // Display the products data using the Context Provider
  return (
    <ContextProvider.Provider value={products}>
      {props.children}
    </ContextProvider.Provider>
  );
};

export default ProductContext;
