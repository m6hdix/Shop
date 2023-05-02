// Import necessary modules from React and ProductContext.js file
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ContextProvider } from "../Context/ProductContext";

// Create a component named ProductDetails
export default function ProductDetails() {

   // Get the id parameter from the URL using useParams hook 
   const {id} = useParams()

   // Use the useContext hook to access the data stored in ProductContext provider
   const data = useContext(ContextProvider)

   // Set the value of DeatailsProduct to be the product details that matches the provided id
   const DetailsProduct = data[id-1]

   // Log the DetailsProduct object to the console. This is for debugging or testing purposes.
   console.log(DetailsProduct);

   return (
      <div>
         <h1>{DetailsProduct.name}</h1>
         <img src={DetailsProduct.image} alt={DetailsProduct.name} />
         <p>{DetailsProduct.description}</p>
         <h3>${DetailsProduct.price}</h3>
      </div>
   )
}
