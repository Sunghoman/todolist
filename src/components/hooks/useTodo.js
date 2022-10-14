import { useState } from "react";
import { useDispatch } from "react-redux";

export const useTodo = () => {

  const dispatch = useDispatch();

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  
  // Create Root TodoItem
  const [todo, setTodo] = useState({
    id: null,
    title: "",
    body: "",
    status: false,
    date: year + "-" + month + "-" + day,
  });

  // get Inputs for TodoItem
  const getInputs = (e) => {
    const { name, value } = e.target;
    setTodo((prevState) => {
      return {
       ...prevState,
        [name]: value,
        id: Math.floor(Math.random() * 100),
        status: false,
      };
    });
  };

  // Add a new item into TodoList
  const addTodo = () => {
    if ( todo.title && todo.body ) {
      dispatch({ type: "todoList/addTodo", payload: todo });
      setTodo((prevState) => {
        return {
         ...prevState,
         title: "",
         body: "",
        };
      });
    }
  };

  return {
    todo,
    getInputs,
    addTodo,
  };

};