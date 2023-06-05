// import { createContext, useContext, useReducer } from "react";
// import cartReducer from "./cartReducer";
// import {
//   ADD_TO_CART,
//   COUNT_CART_TOTALS,
//   REMOVE_CART_ITEM,
//   CHANGE_CART_ITEM_AMOUNT,
// } from "./actions";

// const initialState = createContext({
//   cart: [],
//   totalItems: 0,
//   totalAmount: 0,
//   addToCart: () => {},
//   removeItem: () => {},
//   changeAmount: () => {},
// });

// const CartContext = createContext(initialState);

// export const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(cartReducer, initialState);

//   const context = {
//     ...state,
//     addToCart,
//     removeItem,
//     changeAmount,
//     clearCart,
//   };

//   function addToCart(id, capacity, amount, product) {
//     dispatch({
//       type: ADD_TO_CART,
//       payload: {
//         id,
//         capacity,
//         amount,
//         product,
//       },
//     });
//   }

//   function removeItem(id) {
//     dispatch({ type: REMOVE_CART_ITEM, payload: id });
//   }

//   function changeAmount(id, value) {
//     dispatch({ type: CHANGE_CART_ITEM_AMOUNT, payload: { id, value } });
//   }

//   function clearCart() {
//     dispatch({ type: CLEAR_CART });
//   }

//   return (
//     <CartContext.Provider value={context}>{children}</CartContext.Provider>
//   );
// };

// export const useCartContext = () => {
//   return useContext(CartContext);
// };
