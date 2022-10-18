import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ReactMarkDown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export const TodoDetail = () => {
  const { id } = useParams();
  const { todos } = useSelector((state) => state.todoList);
  const todoBody = todos.find((data) => data.id === parseInt(id)); // 지금
  return (
    <TodoDetailContainer>
      <TodoDetailTitle>{todoBody.title}</TodoDetailTitle>
      <TodoDetailBody>
        <ReactMarkDown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
          {todoBody.markDown}
        </ReactMarkDown>
      </TodoDetailBody>
      <CommentInput />
      <div>댓글임</div>
    </TodoDetailContainer>
  );
};

const TodoDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
const TodoDetailTitle = styled.div`
  font-size: 40px;
  font-weight: bold;
  margin: 10px 0px 30px 0px;
`;
const TodoDetailBody = styled.div`
  /* font-size: initial; */
  /* font: initial; */
  text-align: left;
  padding: 20px;
`;
const CommentInput = styled.input`
  width: 10rem;
  padding: 10px;
  margin: 0 auto;
  background-color: #afafaf;
  border: none;
  outline: none;
  border-radius: 5px;
`;
