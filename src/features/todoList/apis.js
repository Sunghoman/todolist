import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getTodoListEditorApi = async () => {
  const response = await axios.get(`${BASE_URL}/editor`);
  // console.log(response.data);
  return response.data;
};
export const addTodoEditorApi = (todo) => {
  axios.post(`${BASE_URL}/editor`, todo);
};
export const delPostAPI = async (id) => {
  const response = await axios.delete(`${BASE_URL}/editor/${id}`);
  return response.data;
};
export const upPostAPI = async (id, editTodo) => {
  await axios.patch(`${BASE_URL}/editor/${id}`, editTodo);
};
export const getPostOneAPI = async (id, edit) => {
  const response = await axios.get(`${BASE_URL}/editor/${id}`);
  return response.data;
};

export const upStatusAPI = async (id) => {
  const response = await axios.patch(`${BASE_URL}/editor/${id}`);
};

// 댓글 CRUD API
export const addCommentApi = (comment) => {
  axios.post(`${BASE_URL}/comments`, comment);
};

export const delCommentApi = (id) => {
  axios.delete(`${BASE_URL}/comments/${id}`);
};
