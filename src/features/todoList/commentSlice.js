import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

export const __getComments = createAsyncThunk(
  "todoList/getComments",
  async (payload, thunkAPI) => {
    try {
      const comments = await axios.get("http://localhost:3001/comments");
      return thunkAPI.fulfillWithValue(comments.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const commentSlice = createSlice({
  name: "commentList",
  initialState,
  reducers: {
    addComment: (state, { payload }) => {
      return [...state, payload];
    }
  },
  extraReducers: {
    [__getComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__getComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
    [__getComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export const { addComment } = commentSlice.actions;
export default commentSlice.reducer;
