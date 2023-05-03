import { useReducer } from "react";

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      // add item to cart logic
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_ITEM":
      // remove item from cart logic
      return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };
    case "CLEAR_CART":
      // clear cart logic
      return { ...state, cart: [] };
    default:
      return state;
  }
}

const initialState = {
  selectedItems: [],
  itemsCounter:0,
  total:0,
  checkout:0
};

export default function CartContextProvider() {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  // rest of your code
}
