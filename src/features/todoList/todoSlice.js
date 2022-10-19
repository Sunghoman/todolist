import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { delPostDB } from "../../redux/async/post";
import { addTodoEditerApi, getTodoListEditerApi } from "./apis";

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};

export const __getTodos = createAsyncThunk(
  "todoList/getTodos",
  async (payload, thunkAPI) => {
    try {
      const todos = await axios.get("http://localhost:3001/editor");
      return thunkAPI.fulfillWithValue(todos.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      return [...state, payload];
    },
    // removeTodo: (state, { payload }) => {
    //   return state.map((todo) =>
    //     todo.id === payload ? { ...todo, status: "Trash" } : todo
    //   );
    // },
    // toggleTodo: (state, { payload }) => {
    //   return state.map((todo) =>
    //     todo.id === payload ? { ...todo, status: "Done" } : todo
    //   );
    // },
    // restoreTodo: (state, { payload }) => {
    //   return state.map((todo) =>
    //     todo.id === payload ? { ...todo, status: "Working" } : todo
    //   );
    // },
    // cencelTodo: (state, { payload }) => {
    //   return state.map((todo) =>
    //     todo.id === payload ? { ...todo, status: "Working" } : todo
    //   );
    // },
    // deleteAllTodo: (state) => {
    //   return state.filter((todo) => todo.status !== "Trash");
    // },
  },
  extraReducers: {
    [delPostDB.pending]: (state) => {
      state.isLoading = true;
    },
    [delPostDB.fulfilled]: (state, action) => {
      state.isLoading = false;
      // 👉🏻 삭제 로직
      state.todos = state.todos.filter(
        (todo) => todo.id !== Number(action.payload)
      );
    },
    [delPostDB.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__getTodos.pending]: (state) => {
      state.isLoading = true;
    },
    [__getTodos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
      console.log("할당 완료!");
    },
    [__getTodos.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const {
  addTodo,
  removeTodo,
  toggleTodo,
  restoreTodo,
  cancelTodo,
  deleteAllTodo,
} = todoSlice.actions;
export default todoSlice.reducer;
