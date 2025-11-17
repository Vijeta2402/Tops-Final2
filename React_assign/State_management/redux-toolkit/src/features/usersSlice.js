import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
  },

  reducers: {
    addUser: (state, action) => {
      state.list.push(action.payload);
    },

    deleteUser: (state, action) => {
      state.list = state.list.filter((u) => u.id !== action.payload);
    },

    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const user = state.list.find((u) => u.id === id);
      if (user) {
        user.name = name;
        user.email = email;
      }
    },
  },
});

export const { addUser, deleteUser, updateUser } = usersSlice.actions;
export default usersSlice.reducer;
