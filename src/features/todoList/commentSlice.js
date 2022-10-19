import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addCommentApi } from "./apis";
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

export const __addComment = createAsyncThunk(
  "todoList/addComment",
  async (payload, thunkAPI) => {
    try {
      axios.post(`http://localhost:3001/comments`, payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
)

export const __delComment = createAsyncThunk(
  "todoList/delComment",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`http://localhost:3001/comments/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
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
    // GET Comment List
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
    },

    // ADD Comment
    [__addComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__addComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.commnts.push(action.payload);
    },
    [__addComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    
    // DELETE Comment
    [__delComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__delComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = state.comments.filter((comment) => comment.id !== action.payload);
    },
    [__delComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export const { addComment } = commentSlice.actions;
export default commentSlice.reducer;
