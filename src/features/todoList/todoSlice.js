import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todoList",
  initialState: [
    {
      id: 1,
      title: "리덕스 오류 질문입니다.",
      body: "이게 왜 안될까요 ㅠㅠ",
      status: false,
      date: "2022-10-13",
      time: "10:04",
      tag: "react"
    },
    {
      id: 2,
      title: "스프링 질문티비",
      body: "정말 너무 어려워 티비",
      status: false,
      date: "2022-10-13",
      time: "10:04",
      tag: "spring"
    },
    {
      id: 3,
      title: "리액트 console.log()가 안찍혀요",
      body: "야옹 야옹 전 이제 사파리로 개발해야해요",
      status: false,
      date: "2022-10-13",
      time: "10:04",
      tag: "react"
    },
  ],
  reducers: {
    addTodo: (state, { payload }) => {
      return [...state, payload];
    },
    removeTodo: (state, { payload }) => {
      return state.filter((todo) => todo.id !== payload);
    }
  }
});