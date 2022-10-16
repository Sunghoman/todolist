import { useDispatch, useSelector } from "react-redux";
import { TodoBody } from "../../style/list_styled";
import { useChangeTodo } from "../hooks/useChangeTodo";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import axios from "axios";
import { __getTodos } from "../../features/todoList/todoSlice";

export const List = () => {

  const { removeTodo, toggleTodo, restoreTodo, cencelTodo, deleteAllTodo } = useChangeTodo();
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
      <TodoBody>
        <div>
          <hr />
          <h4>해야할 일</h4>
          <hr />
          <ul>
            {todos.map((todo) => {
              if (todo.status === "Working") {
                // console.log(todo);
                return (
                  <div key={todo.id}>
                    <li>ID: {todo.id}</li>
                    <li>Tag: {todo.tag}</li>
                    <li>Title: {todo.title}</li>
                    <li>Body: {todo.body}</li>
                    <li>Date: {todo.date}</li>

                    <button onClick={() => removeTodo(todo.id)}>삭제</button>
                    <button onClick={() => toggleTodo(todo.id)}>완료</button>
                    <button onClick={() => navigate("/detail/" + todo.id)}>상세보기</button>

                    <hr />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </ul>
        </div>
        <div>
          <hr />
          <h4>완료한 일</h4>
          <ul>
            {todos.map((todo) => {
              if (todo.status === "Done") {
                return (
                  <div key={todo.id}>
                    <li>ID: {todo.id}</li>
                    <li>Tag: {todo.tag}</li>
                    <li>Title: {todo.title}</li>
                    <li>Body: {todo.body}</li>
                    <li>Date: {todo.date}</li>

                    <button onClick={() => removeTodo(todo.id)}>삭제</button>
                    <button onClick={() => cencelTodo(todo.id)}>취소</button>
                    <button onClick={() => navigate("/detail/" + todo.id)}>상세보기</button>

                    <hr />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </ul>
        </div>
        <div>
          <hr />
          <h4>
            휴지통
            <button onClick={() => deleteAllTodo()}>전체 삭제</button>
            <hr />
          </h4>
          <ul>
            {todos.map((todo) => {
              if (todo.status === "Trash") {
                return (
                  <div key={todo.id}>
                    <li>ID: {todo.id}</li>
                    <li>Tag: {todo.tag}</li>
                    <li>Title: {todo.title}</li>
                    <li>Body: {todo.body}</li>
                    <li>Date: {todo.date}</li>

                    <button onClick={() => restoreTodo(todo.id)}>복원</button>

                    <hr />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </ul>
        </div>
      </TodoBody>
    </>
  );
};
