import { useDispatch } from "react-redux";

export const useChangeTodo = () => {  

  const dispatch = useDispatch();
  
  // Remove an item from TodoList
  const removeTodo = (id) => {
    dispatch({ type: "todoList/removeTodo", payload: id });
  }

  return { removeTodo };

}