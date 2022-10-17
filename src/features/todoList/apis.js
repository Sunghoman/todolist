import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const addTodoEditerApi = (todo) => {
  axios.post(`${BASE_URL}/editer`, todo);
};
export const addTodoListEditerApi = async () => {
  const reponse = await axios.get(`${BASE_URL}/editer`);

  return reponse.data;
};
export const delTodoEditerApi = async (id) => {
  axios.delete(`${BASE_URL}/editer/${id}`);
};
