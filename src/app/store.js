import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from '../features/counter/counterSlice';
import { todoSlice } from '../features/todoList/todoSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    todoList: todoSlice.reducer,
  },
});
