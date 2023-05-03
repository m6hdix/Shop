import React, { useContext } from "react";
import { ContextProvider } from "../Context/ProductContext";
import ProductCard from "./ProductCart";

export default function StorePage() {
  const products = useContext(ContextProvider);

  return (
    <div className="flex items-center justify-center ">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-20 py-4 place-content-center"
      >
        {products.map((product) => (
          <ProductCard Product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
