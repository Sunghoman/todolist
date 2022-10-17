import axios from "axios";

const BASE_URL = "http://localhost:3001";

export const getTodoListEditerApi = async () => {
  const response = await axios.get(`${BASE_URL}/editer`);
  console.log(response.data);

  return response.data;
};
export const addTodoEditerApi = (todo) => {
  console.log(todo);
  axios.post(`${BASE_URL}/editer`, { markDown: todo });
};
export const delTodoEditerApi = (id) => {
  axios.delete(`${BASE_URL}/editer/${id}`);
};
