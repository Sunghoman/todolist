import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { TodoDetailContainer, TodoDetailTitle, TodoDetailBody, CommentInput } from "../../style/detail_styled";

export const TodoDetail = () => {
  const { id } = useParams();
  const { todos } = useSelector((state) => state.todoList);
  const todoBody = todos.find((data) => data.id === parseInt(id)); // 지금

  return (
    <TodoDetailContainer>
      <TodoDetailTitle>{todoBody.title}</TodoDetailTitle>
      <TodoDetailBody>
        <ReactMarkdown>{todoBody.markDown}</ReactMarkdown>
      </TodoDetailBody>
      <CommentInput />
    </TodoDetailContainer>
  );
};
