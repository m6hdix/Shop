import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContextProvider";
import { QuantityCounter, isInCart } from "../Helper/Helpers";

export default function ProductCard({ Product }) {
  const { state, dispatch } = useContext(CartContext);
  console.log(QuantityCounter(state, Product.id));
  return (
    <div className="card w-96 bg-base-100 shadow-xl hover:shadow-2xl transition-all">
      <figure className="px-10 pt-10">
        <img
          src={Product.image}
          alt="Shoes"
          className="rounded-xl aspect-square "
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">
          {Product.title.split(" ").slice(0, 1).join(" ")}
        </h2>
        <p>{Product.title.split(" ").slice(0, 3).join(" ")}</p>
        <div className="card-actions">
          {QuantityCounter(state, Product.id) === 1 && (
            <button
              className="btn btn-primary"
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: Product })
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          )}
          <button className="btn btn-primary">
            <Link to={`/product/${Product.id}`}>Details</Link>
          </button>
          {isInCart(state, Product.id) ? (
            <button
              className="btn btn-primary"
              onClick={() => dispatch({ type: "INCREASE", payload: Product })}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => dispatch({ type: "ADD_ITEM", payload: Product })}
            >
              Add To Cart
            </button>
          )}
          {QuantityCounter(state, Product.id) >= 2 && (
            <button
              className="btn btn-primary"
              onClick={() => dispatch({ type: "DECREASE", payload: Product })}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12h-15"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
