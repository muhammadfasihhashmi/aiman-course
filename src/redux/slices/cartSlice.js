import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, actions) => {
      state.value.push(actions.payload);
    },
    incrementQuantity: (state, actions) => {
      const item = state.value.find((val) => val.id === actions.payload);
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    decrementQuantity: (state, actions) => {
      const item = state.value.find((val) => val.id === actions.payload);
      if (item) {
        item.quantity--;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

export const getQuantityById = (id) => (state) =>
  state.cart.value.find((item) => item.pizzaId === id)?.quantity ?? 0;
