import { useReducer, createContext } from "react";

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        selectedItems: [...state.selectedItems],
        itemsCounter: state.itemsCounter + 1,
        total: state.total + action.payload.price,
      };
    case "REMOVE_ITEM":
      // remove item from cart logic
      const updatedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItems: [...updatedItems],
        itemsCounter: state.itemsCounter - 1,
        total: state.total - action.payload.price,
      };
    case "INCREASE":
      const indexI = state.selectedItems.findIndex(
        (item) => item.id == action.payload.id
      );
      state.selectedItems[indexI].quantity++;
      return {
        ...state,
      };
    case "DECREASE":
      const indexD = state.selectedItems.findIndex(
        (item) => item.id == action.payload.id
      );
      state.selectedItems[indexD].quantity--;
      return {
        ...state,
      };
    case "CLEAR":
      // clear cart logic
      return { selectedItems: [], itemsCounter: 0, total: 0, checkout: false };
    case "CHECKOUT":
      // checkout logic
      return { selectedItems: [], itemsCounter: 0, total: 0, checkout: true };
    default:
      return state;
  }
}

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};
export const CartContext = createContext();
export default function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
