import { useSelector } from "react-redux";
import { TodoBody } from "../../style/list_styled";
import { useChangeTodo } from "../hooks/useChangeTodo";

export const List = () => {
  const todoList = useSelector((state) => state.todoList);
  const { removeTodo, toggleTodo, restoreTodo, cencleTodo, deleteAllTodo } =
    useChangeTodo();
  return (
    <TodoBody>
      <div>
        <hr />
        <h4>해야할 일</h4>
        <hr />
        <ul>
          {todoList.map((todo) => {
            if (todo.status === "Working") {
              console.log(todo);
              return (
                <div key={todo.id}>
                  <li>ID: {todo.id}</li>
                  <li>Tag: {todo.tag}</li>
                  <li>Title: {todo.title}</li>
                  <li>Body: {todo.body}</li>
                  <li>Date: {todo.date}</li>

                  <button onClick={() => removeTodo(todo.id)}>삭제</button>
                  <button onClick={() => toggleTodo(todo.id)}>완료</button>

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
          {todoList.map((todo) => {
            if (todo.status === "Done") {
              return (
                <div key={todo.id}>
                  <li>ID: {todo.id}</li>
                  <li>Tag: {todo.tag}</li>
                  <li>Title: {todo.title}</li>
                  <li>Body: {todo.body}</li>
                  <li>Date: {todo.date}</li>

                  <button onClick={() => removeTodo(todo.id)}>삭제</button>
                  <button onClick={() => cencleTodo(todo.id)}>취소</button>

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
          {todoList.map((todo) => {
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
  );
};
