import { createAsyncThunk } from "@reduxjs/toolkit";
import { addTodoEditorApi, addCommentApi } from "../../features/todoList/apis";

export const addPostDB = createAsyncThunk(
  "post/addPost",
  async (params, thunkAPI) => {
    // 서버랑 통신하는 코드 작성
    const response = await addTodoEditorApi(params);
    console.log(response);
    console.log(params);
  }
);

// 댓글 달기
export const addCommentDB = createAsyncThunk(
  "post/addComment",
  async (params, thunkAPI) => {
    const response = await addCommentApi(params);
    console.log(response);
    console.log(params);
  }
)