import { useTodo } from "../hooks/useTodo";
import {
  ButtonSet,
  Title,
  TitleAndButtonPosition,
  TodoBody,
} from "../../style/todo_styled";
import { useEffect, useState } from "react";
import axios from "axios";

export const TodoForm = () => {
  
  const [todoList, setTodo] = useState({
    title: "",
  });
  const [todos, setTodos] = useState(null);
  const [targetId, setTargetId] = useState(null);
  const [editTodo, setEditTodo] = useState({
    title: "",
  });

  const fetchTodos = async () => {
    const { data } = await axios.get("http://localhost:3001/todos");
    setTodos(data);
  };

  const onSubmitHandler = (todo) => {
    axios.post("http://localhost:3001/todos", todo);
  };

  const onClickDeleteButtonHandler = (todoId) => {
    axios.delete(`http://localhost:3001/todos/${todoId}`);
  };

  const onClickEditButtonHandler = (todoId, edit) => {
    axios.patch(`http://localhost:3001/todos/${todoId}`, edit);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  console.log(todos)

  const { todo, getInputs, addTodo, handleChange } = useTodo();
  const { title, body } = todo;

  console.log(todoList)
  return (
    <TodoBody>
      <TitleAndButtonPosition>
        <Title>StackOverFlow</Title>
        <ButtonSet>
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </ButtonSet>
      </TitleAndButtonPosition>
      <select name="tag" onChange={handleChange}>
        <option value="">---</option>
        <option value="react">React</option>
        <option value="spring">Spring</option>
      </select>
      <input
        id="title"
        type="text"
        placeholder="title"
        name="title"
        value={title}
        onChange={getInputs}
      />
      <input
        id="body"
        type="text"
        placeholder="content"
        name="body"
        value={body}
        onChange={getInputs}
      />
      <button onClick={addTodo}>추가</button>
    </TodoBody>
  );
};
