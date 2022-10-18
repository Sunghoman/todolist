import { useDispatch, useSelector } from "react-redux";
import {
  MainLink,
  Output,
  TodoAddButton,
  TodoListBody,
  TodoListItem,
} from "../../style/list_styled";
import { useChangeTodo } from "../hooks/useChangeTodo";
import { useNavigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
// import axios from "axios";
import { __getTodos } from "../../features/todoList/todoSlice";

export const List = () => {
  const { removeTodo, toggleTodo, restoreTodo, cencelTodo, deleteAllTodo } =
    useChangeTodo();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todoList);
  console.log(todos);
  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  return (
    <>
      <TodoAddButton>
        <MainLink to="/editor">새 글 작성하기</MainLink>
      </TodoAddButton>
      <TodoListBody>
        <div>
          {todos.map((todo) => {
            return (
              <TodoListItem key={todo.id}>
                <div>Tag: {todo.tag}</div>
                <div>{todo.title}</div>
                <br />
                <div>{todo.status}</div>
                <br />
                <div>{todo.date}</div>
                <br />
                <button onClick={() => removeTodo(todo.id)}>삭제</button>
                <button onClick={() => toggleTodo(todo.id)}>완료</button>
                <button onClick={() => navigate("/list/" + todo.id)}>
                  상세보기
                </button>
              </TodoListItem>
            );
          })}
        </div>
      </TodoListBody>
      <Output className="list-output">
        <Outlet></Outlet>
      </Output>
    </>
  );
};
