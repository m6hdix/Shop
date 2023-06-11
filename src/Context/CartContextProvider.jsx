import { useReducer, createContext } from "react";

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        return {
          ...state,
          selectedItems: state.selectedItems.concat({
            ...action.payload,
            quantity: 1,
          }),
          itemsCounter: state.itemsCounter + 1,
          total: state.total + action.payload.price,
        };
      }
      return state;
    case "REMOVE_ITEM":
      const updatedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItems: updatedItems,
        itemsCounter: state.itemsCounter - 1,
        total: state.total - action.payload.price,
      };
    case "INCREASE":
      const indexI = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      const increasedItems = [...state.selectedItems];
      increasedItems[indexI].quantity++;
      return {
        ...state,
        selectedItems: increasedItems,
      };
    case "DECREASE":
      const indexD = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      const decreasedItems = [...state.selectedItems];
      decreasedItems[indexD].quantity--;
      return {
        ...state,
        selectedItems: decreasedItems,
      };
    case "CLEAR":
      return { selectedItems: [], itemsCounter: 0, total: 0, checkout: false };
    case "CHECKOUT":
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
  console.log(state)
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
