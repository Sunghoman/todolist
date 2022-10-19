import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addTodoEditorApi,
  addCommentApi,
  delPostAPI,
} from "../../features/todoList/apis";
import { __getComments } from "../../features/todoList/commentSlice";

export const addPostDB = createAsyncThunk(
  "post/addPost",
  async (params, thunkAPI) => {
    // 서버랑 통신하는 코드 작성
    const response = await addTodoEditorApi(params);
    return response;
  }
);

// 댓글 달기
export const addCommentDB = createAsyncThunk(
  "post/addComment",
  async (params, thunkAPI) => {
    const response = await addCommentApi(params);
    thunkAPI.dispatch(__getComments()) //그냥 서버에 다시 get 요청 보내서 렌더링 없이도 되게끔
    return response
  }
);

//포스트 삭제
export const delPostDB = createAsyncThunk(
  "post/delPost",
  async (params, thunkAPI) => {
    // 👉🏻 params에 담긴, id와 뒤로가기 함수 : callBackFunc를 구조분해 할당함.
    const { id, callBackFunc } = params;
    try {
      const response = await delPostAPI(id);
      // 👉🏻 삭제 하고 난후 뒤로가기 함수 실행
      callBackFunc();
      return thunkAPI.fulfillWithValue(id);
    } catch (err) {
      console.log("error ::::::", err.response);
      return thunkAPI.rejectWithValue("<<", err);
    }
  }
);
