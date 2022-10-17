import { createAsyncThunk } from "@reduxjs/toolkit";
import { addTodoEditerApi } from "../../features/todoList/apis";

export const addPostDB = createAsyncThunk(
  "post/addPost",
  async (params, thunkAPI) => {
    // 서버랑 통신하는 코드 작성
    const response = await addTodoEditerApi(params);
    console.log(response);
    console.log(params);
  }
);
