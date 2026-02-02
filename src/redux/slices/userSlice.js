import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserName: (state, actions) => {
      state.value = actions.payload;
    },
  },
});

export const { setUserName } = userSlice.actions;
export const userReducer = userSlice.reducer;
