import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: JSON.parse(localStorage.getItem("users")) || [
    {
      login: "admin",
      password: "admin",
      email: "admin@",
      address: "admin",
      uuid: 666,
      cart: [],
      totalSum: 0,
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
    editUser: (state, action) => {
      const { id, actualUser } = action.payload;
      const index = state.users.findIndex((user) => user.uuid === id);
      state.users[index] = actualUser;
      localStorage.setItem("users", JSON.stringify(state.users));
    },
  },
});

export const { addUser, editUser } = usersSlice.actions;

export default usersSlice.reducer;
