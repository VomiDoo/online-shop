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
  },
});

export const { addActualUser } = actualUserSlice.actions;

export default actualUserSlice.reducer;
