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

  // Resiore an item from TodoList
  const restoreTodo = (id) => {
    dispatch({ type: "todoList/restoreTodo", payload: id });
  };

  // cencle an item from TodoList
  const cencleTodo = (id) => {
    dispatch({ type: "todoList/cencleTodo", payload: id });
  };

  // deleteAll an item from TodoList
  const deleteAllTodo = (id) => {
    dispatch({ type: "todoList/deleteAllTodo", payload: id });
  };
  return { removeTodo, toggleTodo, restoreTodo, cencleTodo, deleteAllTodo };
};
