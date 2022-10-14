import { useSelector } from "react-redux";
import { useChangeTodo } from "../hooks/useChangeTodo";

export const List = () => {
  const todoList = useSelector((state) => state.todoList);
  const { removeTodo, toggleTodo } = useChangeTodo();

  return (
    <>
      <div>
        <hr />
        <h4>해야할 일</h4>
        <ul>
          {todoList.map((todo) => {
            console.log(todo);
            if (todo.status === false) {
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
                  <button onClick={() => toggleTodo(todo.id)}>취소</button>

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
        <h4>스레기통</h4>
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

                  <button onClick={() => removeTodo(todo.id)}>삭제</button>
                  <button onClick={() => toggleTodo(todo.id)}>취소</button>

                  <hr />
                </div>
              );
            } else {
              return null;
            }
          })}
        </ul>
      </div>
    </>
  );
};
