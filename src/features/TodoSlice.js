import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: []
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleRemainder: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, remainder: !todo.remainder }
          : todo
      );
    }
  }
});

export const { addTodo, deleteTodo, toggleRemainder } = todoSlice.actions;
export default todoSlice.reducer;
