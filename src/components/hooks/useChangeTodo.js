import { useDispatch } from "react-redux";

export const useChangeTodo = () => {
  const dispatch = useDispatch();

  // Remove an item from TodoList
  const removeTodo = (id) => {
    dispatch({ type: "todoList/removeTodo", payload: id });
  };

  // Toggle an item from TodoList
  const toggleTodo = (id) => {
    dispatch({ type: "todoList/toggleTodo", payload: id });
  };
  return { removeTodo, toggleTodo };
};
