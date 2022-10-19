import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import axios from "axios";



const initialState = {
  // comment null일때 comments&&, 옵셔널체이닝 등 (컴포넌트 쪽에서)
  comments: null,
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
      await axios.post(`http://localhost:3001/comments`, payload);
      useDispatch();
      return thunkAPI.fulfillWithValue(payload);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);


export const __delComment = createAsyncThunk(
  "todoList/delComment",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`http://localhost:3001/comments/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const __editComment = createAsyncThunk(
  "todoList/editComment",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.patch(`http://localhost:3001/comments/${payload.id}`,{ comment : payload.text });
      return thunkAPI.fulfillWithValue(data.data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const commentSlice = createSlice({
  name: "commentList",
  initialState,
  reducers: {},
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
    },

    // EDIT Comment
    [__editComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__editComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = state.comments.map((comment) => {
        return (comment.id === action.payload.id) ? action.payload : comment
      });
    },
    [__editComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export const { addComment } = commentSlice.actions;
export default commentSlice.reducer;
