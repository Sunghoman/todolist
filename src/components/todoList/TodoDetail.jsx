import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { TodoDetailContainer, TodoDetailTitle, TodoDetailBody, CommentInput, CommentBtn, CommentContainer, CommentBody, CommentInfo, CommentMore, CommentDate } from "../../style/detail_styled";
import styled from "styled-components";
import { addCommentDB } from "../../redux/async/post"
import { useTodo } from "../hooks/useTodo";
import { useEffect } from "react";
import { __getComments, __delComment } from "../../features/todoList/commentSlice";

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
  // 
  const { comments } = useSelector((state) => state.commentList);

  // 게시물에 해당하는 댓글 (근데 바로 안뜸)
  const commentById = comments.filter((comment) =>  parseInt(comment.FK) === parseInt(id))
  // console.log(commentById);


  // 이거 왜 첫 렌더링 때 빈 배열뜨냥
  const [,setUpdate] = useState();
  const forceUpdate = useCallback(() => setUpdate({}), []);

  
  const todoBody = todos.find((data) => data.id === parseInt(id));
  // console.log(todoBody);

  const { todo } = useTodo();
  const { date } = todo;

  const [comment, setComment] = useState("");
  const addComment = () => {
    dispatch(addCommentDB({ FK: id, comment: comment, date: date }))
    setComment("");
    forceUpdate();
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
        onClick={() => {
          addComment()
          forceUpdate()
        }}
      >
        댓글 달기
      </CommentBtn>
      {/* { commentById } */}

        {
          comments.map((comment) => {
            return(
              <CommentContainer key={comment.id}>
                <div>
                  <CommentBody>{ comment.comment }</CommentBody>
                  <CommentInfo>
                    <CommentDate>{ comment.date }</CommentDate>
                    <CommentMore>수정</CommentMore>
                    <CommentMore onClick={() => {
                      dispatch(__delComment(comment.id))
                    }}>삭제</CommentMore>
                  </CommentInfo>
                </div>
              </CommentContainer>
            )
          })
        }
    </TodoDetailContainer>
  );
};