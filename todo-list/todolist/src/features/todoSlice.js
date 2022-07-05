import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    setChecked: (state, action) => {
      state.todos.map((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed;
        }
      });
    },
  },
});

export const { saveTodo, setChecked } = todoSlice.actions;

export const selectTodoList = (state) => state.todos.todos;

export default todoSlice.reducer;
