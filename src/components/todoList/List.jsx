import { useSelector } from "react-redux";
import { useChangeTodo } from "../hooks/useChangeTodo";

export const List = () => {
  const todoList = useSelector((state) => state.todoList);
  console.log(todoList);

  const { removeTodo } = useChangeTodo();
  console.log("야호");

  return (
    <div>
      <hr />
      <h4>새로 적으면 여기 나타남</h4>
      <ul>
        { todoList.map((todo) => {
            return (
              <div key={todo.id}>
                <li>ID : { todo.id }</li>
                <li>Tag : {todo.tag}</li>
                <li>Title : { todo.title }</li>
                <li>Body : { todo.body }</li>
                <li>Date : { todo.date }</li>
                <button onClick={() => removeTodo(todo.id)}>이거 누르면 삭제됨(진짜임)</button>
                <hr/>
              </div>
            );
          }) 
        }
      </ul>
    </div>
  );
};
