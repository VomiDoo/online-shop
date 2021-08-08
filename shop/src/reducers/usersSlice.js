import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: JSON.parse(localStorage.getItem("users")) || [
    {
      login: "admin",
      password: "admin",
      email: "admin@",
      address: "admin",
    },
  ],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
  },
});

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;
