import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { TodoDetailContainer, TodoDetailTitle, TodoDetailBody, CommentInput, CommentContainer, Comment } from "../../style/detail_styled";
import styled from "styled-components";
import { addCommentDB } from "../../redux/async/post"
import { useTodo } from "../hooks/useTodo";
import { useEffect } from "react";
import { __getComments } from "../../features/todoList/commentSlice";

export const TodoDetail = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getComments());
  }, [dispatch]);

  // 파라미터값
  const { id } = useParams();
  const { todos } = useSelector((state) => state.todoList);
  // console.log(todos); // 본문임

  // 댓글 불러오기
  const { comments } = useSelector((state) => state.commentList);
  // console.log(comments[0]);

  // const commentById = comments.find((comment) => { return parseInt(comment.FK) === parseInt(id) }).map((comment) => {
  //   return (
  //     <CommentContainer key={comment.Id}>
  //       <Comment>asd</Comment>
  //     </CommentContainer>
  //   )
  // })
  useEffect(() => {
    const commentById = comments.filter((comment) =>  parseInt(comment.FK) === parseInt(id))
    console.log(commentById);
  })


  // 이거 왜 첫 렌더링 때 빈 배열뜨냥

  
  const todoBody = todos.find((data) => data.id === parseInt(id));
  // console.log(todoBody);

  const { todo } = useTodo();
  const { date } = todo;

  const [comment, setComment] = useState("");
  const addComment = () => {
    dispatch(addCommentDB({ FK: id, comment: comment, date: date }))
    setComment("");
  }

  const onChange = (e) => {
    e.preventDefault();
    setComment(e.target.value);
  }

  return (
    <TodoDetailContainer>
      <TodoDetailTitle>{ todoBody.title }</TodoDetailTitle>
      <TodoDetailBody>{ todoBody.markDown }</TodoDetailBody>
      <CommentInput 
        type="text"
        autoComplete="off"
        placeholder="Please enter a comment..."
        value={comment}
        onChange={onChange}
      />
      <CommentBtn
        onClick={addComment}
      >
        댓글 달기
      </CommentBtn>
      {/* { commentById } */}
    </TodoDetailContainer>
  );
};
const CommentBtn = styled.button`
  width: 10rem;
  height: 2rem;
  margin: 0 auto;
`