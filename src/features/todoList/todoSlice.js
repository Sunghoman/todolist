import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { addTodoEditerApi, addTodoListEditerApi } from "./apis";

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};

export const __getTodos = createAsyncThunk(
  "todoList/getTodos",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/todos");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
// 1. 서버로 통신하는 코드
// 2. 리덕스 툴킷을 사용하려면 리덕스 thunk를 사용해야함

// export const __addTodoEditer = createAsyncThunk(
//   "addTodoEditer",
//   (payload, thunkAPI) => {
//     addTodoEditerApi(payload);
//     thunkAPI.dispatch(addTodoEditer(payload));
//   }
// );
// export const __getTodoListEditer = createAsyncThunk(
//   "addTodoListEditer",
//   async (payload, thunkAPI) => {
//     const list = await addTodoListEditerApi();
//     thunkAPI.dispatch(getTodoListEditer(list));
//   }
// );

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
    [__getTodos.pending]: (state) => {
      state.isLoading = true;
    },
    [__getTodos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
      // console.log("fulfilled 상태 : ", state, action); // Promise가 fulfilled 일 때, dispatch
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
