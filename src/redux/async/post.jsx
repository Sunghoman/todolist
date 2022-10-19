import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addTodoEditorApi,
  addCommentApi,
  delPostAPI,
  upPostAPI,
  upStatusAPI,
  getPostOneAPI,
} from "../../features/todoList/apis";

export const addPostDB = createAsyncThunk(
  "post/addPost",
  async (params, thunkAPI) => {
    // 서버랑 통신하는 코드 작성
    const response = await addTodoEditorApi(params);
  }
);

// 댓글 달기
export const addCommentDB = createAsyncThunk(
  "post/addComment",
  async (params, thunkAPI) => {
    const response = await addCommentApi(params);
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
      // 👉🏻 삭제 하고난 후 뒤로가기 함수 실행
      callBackFunc();
      return thunkAPI.fulfillWithValue(id);
    } catch (err) {
      console.log("error ::::::", err.response);
      return thunkAPI.rejectWithValue("<<", err);
    }
  }
);
// 하나만 가져오기
export const getPostOne = createAsyncThunk(
  "post/getPostOne",
  async (params, thunkAPI) => {
    try {
      const response = await getPostOneAPI(params);
      console.log(response);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//포스트 수정
export const upPostDB = createAsyncThunk(
  "post/upPost",
  async (params, thunkAPI) => {
    const { id, edit, callBackFunc } = params;
    console.log(edit);
    try {
      const response = await upPostAPI(id, edit);
      // 👉🏻 수정 하고난 후 뒤로가기 함수 실행
      callBackFunc();
      return thunkAPI.fulfillWithValue({ id, edit }); // 인자가 하나여야 함
    } catch (err) {
      console.log("error ::::::", err.response);
      return thunkAPI.rejectWithValue("<<", err);
    }
  }
);

// 상태값 변경
export const upStatusDB = createAsyncThunk(
  "post/upStatus",
  async (params, thunkAPI) => {
    const reponse = await upStatusAPI(params);
  }
);
