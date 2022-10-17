import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { __getComments } from "../../features/todoList/todoSlice";
import { useEffect } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';

export const TodoDetail = () => {

  const dispatch = useDispatch();
  const { id } = useParams()
  const { todos } = useSelector((state) => state.todoList);
  // console.log(todos)
  const todoBody = todos.find((data) => data.id === parseInt(id)); // 지금

  // const { comments } = useSelector((state) => state.comments);
  // console.log(comments)
  // const comment = comments.find((data) => data.id === parseInt(id));
  // console.log(comment);

  useEffect(() => {
    dispatch(__getComments());
  }, [dispatch]);

  return (
    <TodoDetailContainer>
      <TodoDetailTitle>{ todoBody.title }</TodoDetailTitle>
      <TodoDetailBody>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{ todoBody.body }</ReactMarkdown>
      </TodoDetailBody>
      <CommentInput/>
      <div>댓글임</div>
    </TodoDetailContainer>
  )
};

const TodoDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`
const TodoDetailTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0px 30px 0px;
`
const TodoDetailBody = styled.div`
  text-align: center;
  margin: 10px 0px 30px 0px;
`
const CommentInput = styled.input`
  width: 10rem;
  padding: 10px;
  margin: 0 auto;
  background-color: #afafaf;
  border: none;
  outline: none;
  border-radius: 5px;
`