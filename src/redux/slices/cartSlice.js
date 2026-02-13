import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.value.push(action.payload);
    },

    incrementQuantity: (state, action) => {
      const item = state.value.find((val) => val.pizzaId === action.payload);

      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },

    decrementQuantity: (state, action) => {
      const item = state.value.find((val) => val.pizzaId === action.payload);

      if (item) {
        item.quantity--;
        item.totalPrice = item.quantity * item.unitPrice;

        if (item.quantity <= 0) {
          state.value = state.value.filter(
            (item) => item.pizzaId !== action.payload,
          );
        }
      }
    },

    removeFromCart: (state, action) => {
      state.value = state.value.filter(
        (item) => item.pizzaId !== action.payload,
      );
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

export const getQuantityById = (id) => (state) =>
  state.cart.value.find((item) => item.pizzaId === id)?.quantity ?? 0;

export const getTotalPrice = (state) =>
  state.cart.value.reduce(
    (totalPrice, item) => totalPrice + item.totalPrice,
    0,
  );

export const getTotalItem = (state) =>
  state.cart.value.reduce((totalItems, item) => totalItems + item.quantity, 0);
