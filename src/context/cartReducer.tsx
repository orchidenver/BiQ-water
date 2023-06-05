// import {
//   ADD_TO_CART,
//   COUNT_CART_TOTALS,
//   REMOVE_CART_ITEM,
//   CHANGE_CART_ITEM_AMOUNT,
// } from "./actions";

// const cartReducer = (state, action) => {
//   if (action.type === ADD_TO_CART) {
//     const { id, capacity, amount, product } = action.payload;
//     const tempItem = state.cart.find((item) => item.id === id + capacity);

//     if (tempItem) {
//       const tempCart = state.cart.map((item) => {
//         if (item.id === id + capacity) {
//           let newItemAmount =
//             item.amount + amount > item.max ? item.max : item.amount + amount;
//           return { ...item, amount: newItemAmount };
//         } else {
//           return item;
//         }
//       });

//       return { ...state, cart: tempCart };
//     } else {
//       const newItem = {
//         id: id + capacity,
//         name: product.name,
//         capacity,
//         amount,
//         image: product.images[0].url,
//         price: product.price,
//         max: product.stock,
//       };
//       return { ...state, cart: [...state.cart, newItem] };
//     }
//   }

//   if (action.type === REMOVE_CART_ITEM) {
//     const tempCart = state.cart.filter((item) => item.id !== action.payload);
//     return { ...state, cart: tempCart };
//   }

//   if (action.type === CHANGE_CART_ITEM_AMOUNT) {
//     const { id, value } = action.payload;
//     const tempCart = state.cart.map((item) => {
//       if (item.id === id) {
//         if (value === "inc") {
//           let newAmount = item.amount === item.max ? item.max : item.amount + 1;

//           return { ...item, amount: newAmount };
//         }

//         if (value === "dec") {
//           let newAmount = item.amount === 1 ? 1 : item.amount - 1;

//           return { ...item, amount: newAmount };
//         }
//       }

//       return item;
//     });

//     return { ...state, cart: tempCart };
//   }

//   if (action.type === COUNT_CART_TOTALS) {
//     const { totalItems, totalAmount } = state.cart.reduce(
//       (total, cartItem) => {
//         const { amount, price } = cartItem;

//         total.totalItems += amount;
//         total.totalAmount += price * amount;
//         return total;
//       },
//       {
//         totalItems: 0,
//         totalAmount: 0,
//       }
//     );
//     return { ...state, totalItems, totalAmount };
//   }

//   throw new Error(`No Matching "${action.type}" - action type`);
// };

// export default cartReducer;
