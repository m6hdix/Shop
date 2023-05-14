// Import necessary modules from React and ProductContext.js file
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ContextProvider } from "../Context/ProductContext";

// Create a component named ProductDetails
export default function ProductDetails() {
  // Get the id parameter from the URL using useParams hook
  const { id } = useParams();

  // Use the useContext hook to access the data stored in ProductContext provider
  const data = useContext(ContextProvider);

  // Set the value of DeatailsProduct to be the product details that matches the provided id
  const DetailsProduct = data[id - 1];

  // Log the DetailsProduct object to the console. This is for debugging or testing purposes.


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={DetailsProduct.image}
          alt={DetailsProduct.name}
          className="aspect-square rounded-lg shadow-2xl "
        />
        <div>
          <h1 className="text-5xl font-bold">{DetailsProduct.name}</h1>
          <p className="py-6">{DetailsProduct.description}</p>
          <button className="btn btn-primary">${DetailsProduct.price}</button>
        </div>
      </div>
    </div>
  );
}
