import React, { useContext } from "react";
import { ContextProvider } from "../Context/ProductContext";
import ProductCard from "./ProductCart";

export default function StorePage() {
  const products = useContext(ContextProvider);

  return (
    <div className={`flex items-center justify-center ${products.length <= 0 ?"h-screen":""}`}>
      {products.length <= 0 ? (
        <div className="mockup-code  bg-primary text-primary-content transition-transform">
          <pre data-prefix="$">
            <code>Loading...</code>
          </pre>
          <pre data-prefix="$">
            <code>Please wait for the data to be delivered</code>
          </pre>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-20 py-4 place-content-center">
          {products.map((product) => (
            <ProductCard Product={product} key={product.id} />
          ))}
        </div>
      )}
    </div>
  );
}
