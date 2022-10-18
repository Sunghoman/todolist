import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from '../features/counter/counterSlice';
import { todoSlice } from '../features/todoList/todoSlice';
import { commentSlice } from '../features/todoList/commentSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    todoList: todoSlice.reducer,
    commentList: commentSlice.reducer,
  },
});
