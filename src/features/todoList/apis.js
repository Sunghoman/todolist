import axios from "axios";

const BASE_URL = "http://localhost:3001";

export const getTodoListEditorApi = async () => {
  const response = await axios.get(`${BASE_URL}/editor`);
  // console.log(response.data);
  return response.data;
};
export const addTodoEditorApi = (todo) => {
  axios.post(`${BASE_URL}/editor`, todo);
};
export const delTodoEditorApi = (id) => {
  axios.delete(`${BASE_URL}/editor/${id}`);
};

// 댓글 CRUD API
export const addCommentApi = (comment) => {
  axios.post(`${BASE_URL}/comments`, comment);
};

export const delCommentApi = (id) => {
  axios.delete(`${BASE_URL}/comments/${id}`);
}