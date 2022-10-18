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

export const addCommentApi = (comment) => {
  axios.post(`${BASE_URL}/comments`, comment);
};

// 그냥 게시물 덩어리에 comments 추가해서 post 하기