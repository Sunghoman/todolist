import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { delPostDB, getPostOne, upPostDB } from "../../redux/async/post";

const initialState = {
  todo: null,
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
    // [upPostDB.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [upPostDB.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.todos = state.todos.map((todo) => {
    //     if (todo.id === action.payload.id) {
    //       return (todo.status = "Done");
    //     } else {
    //       return action.payload;
    //     }
    //   });
    // },
    // [upPostDB.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },

    // 하나의 정보 가져오기
    [getPostOne.pending]: (state) => {
      state.isLoading = true;
    },
    [getPostOne.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todo = action.payload;
      console.log(action.payload);
    },
    [getPostOne.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // 포스트 수정하기
    [upPostDB.pending]: (state) => {
      state.isLoading = true;
    },
    [upPostDB.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todos = state.todos.map((todo) => {
        console.log(action.payload.edit.title);
        if (todo.id === +action.payload.id) {
          console.log("같은 경우");
          return {
            ...todo,
            title: action.payload.edit.title,
            markDown: action.payload.edit.markDown,
          };
        } else {
          console.log("다른 경우");
          return { ...todo };
        }
      });
      console.log(action);
    },
    [upPostDB.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // 삭제하기
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
