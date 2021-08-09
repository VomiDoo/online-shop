import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  actualUser: JSON.parse(localStorage.getItem("actualUser")) || {},
};

const actualUserSlice = createSlice({
  name: "actualUser",
  initialState,
  reducers: {
    addActualUser: (state, action) => {
      state.actualUser = action.payload;
      localStorage.setItem("actualUser", JSON.stringify(state.actualUser));
    },
    addToCart: (state, action) => {
      state.actualUser.cart.push(action.payload);
      localStorage.setItem("actualUser", JSON.stringify(state.actualUser));
    },
    deleteFromCart: (state, action) => {
      state.actualUser.cart = state.actualUser.cart.filter(
        (_, index) => action.payload !== index
      );
      localStorage.setItem("actualUser", JSON.stringify(state.actualUser));
    },
    changeTotalSum: (state, action) => {
      state.actualUser.totalSum = action.payload;
      localStorage.setItem("actualUser", JSON.stringify(state.actualUser));
    },
  },
});

export const { addActualUser, addToCart, deleteFromCart, changeTotalSum } =
  actualUserSlice.actions;

export default actualUserSlice.reducer;
