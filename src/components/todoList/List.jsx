import { useDispatch, useSelector } from "react-redux";
import { H4, Output, TodoListBody } from "../../style/list_styled";
import { useChangeTodo } from "../hooks/useChangeTodo";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import axios from "axios";
import { __getTodos } from "../../features/todoList/todoSlice";

export const List = () => {
  const { removeTodo, toggleTodo, restoreTodo, cencelTodo, deleteAllTodo } =
    useChangeTodo();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todoList);

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  // console.log(todos)
  // GET 요청해서 리스트 불러오는 기능만 구현함.
  // 이대로 다른 기능도 JSON server를 이용해서 하면 될 듯

  return (
    <>
      <TodoListBody>
        <table>
          <H4>해야할 일</H4>
          <tr>
            {todos.map((todo) => {
              if (todo.status === "Working") {
                // console.log(todo);
                return (
                  <div key={todo.id}>
                    <td>ID: {todo.id}</td>
                    <td>Tag: {todo.tag}</td>
                    <td>Title: {todo.title}</td>
                    <td>Body: {todo.body}</td>
                    <td>Date: {todo.date}</td>

                    <button onClick={() => removeTodo(todo.id)}>삭제</button>
                    <button onClick={() => toggleTodo(todo.id)}>완료</button>
                    <button onClick={() => navigate("/detail/" + todo.id)}>
                      상세보기
                    </button>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </tr>
        </table>
        <hr />
        <table>
          <H4>완료한 일</H4>
          <tr>
            {todos.map((todo) => {
              if (todo.status === "Done") {
                return (
                  <div key={todo.id}>
                    <td>ID: {todo.id}</td>
                    <td>Tag: {todo.tag}</td>
                    <td>Title: {todo.title}</td>
                    <td>Body: {todo.body}</td>
                    <td>Date: {todo.date}</td>

                    <button onClick={() => removeTodo(todo.id)}>삭제</button>
                    <button onClick={() => cencelTodo(todo.id)}>취소</button>
                    <button onClick={() => navigate("/detail/" + todo.id)}>
                      상세보기
                    </button>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </tr>
        </table>
        <hr />
        <table>
          <H4>
            휴지통
            <button className="button" onClick={() => deleteAllTodo()}>
              Delete All
            </button>
          </H4>
          <tr>
            {todos.map((todo) => {
              if (todo.status === "Trash") {
                return (
                  <div key={todo.id}>
                    <td>ID: {todo.id}</td>
                    <td>Tag: {todo.tag}</td>
                    <td>Title: {todo.title}</td>
                    <td>Body: {todo.body}</td>
                    <td>Date: {todo.date}</td>

                    <button onClick={() => restoreTodo(todo.id)}>복원</button>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </tr>
        </table>
        <hr />
      </TodoListBody>
      <Output className="list-output"></Output>
    </>
  );
};
