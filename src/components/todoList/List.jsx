import { useDispatch, useSelector } from "react-redux";
import {
  MainLink,
  Output,
  TodoAddButton,
  TodoListBody,
  TodoListItem,
} from "../../style/list_styled";
import { useNavigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { __getTodos } from "../../features/todoList/todoSlice";

export const List = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todoList);

  // 데이터 불러옴.
  useEffect(() => {
    console.log("데이터 패칭!");
    dispatch(__getTodos());
  }, [dispatch]);

  const handleMoveToList = () => {
    navigate("/editor", { replace: true });
  };

  return (
    <>
      <TodoAddButton onClick={handleMoveToList}>
        <MainLink>새 글 작성하기</MainLink>
      </TodoAddButton>
      <TodoListBody>
        <div>
          {todos &&
            todos.map((todo) => {
              return (
                <TodoListItem key={todo.id} onClick={() => navigate("/list/" + todo.id)}>
                  <div>Tag: {todo.tag}</div>
                  <div>{todo.title}</div>
                  <br />
                  <div>{todo.status}</div>
                  <br />
                  <div>{todo.date}</div>
                </TodoListItem>
              );
            })}
        </div>
      </TodoListBody>
      <Output className="list-output">
        <Outlet />
      </Output>
    </>
  );
};
