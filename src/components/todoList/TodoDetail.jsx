import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import {
  TodoDetailContainer,
  TodoDetailTitle,
  TodoDetailBody,
  CommentInput,
  CommentContainer,
  Comment,
  TodoDetailWrap,
  Button,
} from "../../style/detail_styled";
import styled from "styled-components";
import { addCommentDB, delPostDB } from "../../redux/async/post";
import { useTodo } from "../hooks/useTodo";
import { useEffect } from "react";
import { __getComments } from "../../features/todoList/commentSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const TodoDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(__getComments());
  }, [dispatch]);

  // 파라미터값
  const { id } = useParams();
  const { todos } = useSelector((state) => state.todoList);
  console.log(todos); // 본문임

  // 댓글 불러오기
  const { comments } = useSelector((state) => state.commentList);
  console.log(comments);

  const todoBody = todos.find((data) => data.id === parseInt(id));
  // console.log(todoBody);

  const commentById = comments.find((comment) => comment.id === todoBody.id);
  console.log(commentById);

  const { todo } = useTodo();
  const { date } = todo;

  const [comment, setComment] = useState("");
  const addComment = () => {
    dispatch(addCommentDB({ FK: id, comment: comment, date: date }));
    setComment("");
  };
  const deletePost = () => {
    console.log(id);
    dispatch(delPostDB(id));
    navigate("/list");
  };
  const onChange = (e) => {
    e.preventDefault();
    setComment(e.target.value);
  };
  // console.log(comment);

  return (
    <TodoDetailContainer>
      <TodoDetailWrap>
        <TodoDetailTitle>{todoBody.title}</TodoDetailTitle>
        <Button className="buttonset">
          <button className="check-button">
            <FontAwesomeIcon icon={faCircleCheck} />
          </button>
          <button className="edit-button">
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
          <button onClick={deletePost} className="delete-button">
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </Button>
      </TodoDetailWrap>
      <TodoDetailBody>{todoBody.markDown}</TodoDetailBody>
      <CommentInput
        type="text"
        autoComplete="off"
        placeholder="Please enter a comment..."
        value={comment}
        onChange={onChange}
      />
      <CommentBtn onClick={addComment}>댓글 달기</CommentBtn>

      {comments.map((comment) => {
        return (
          <CommentContainer key={comment.id}>
            <Comment>{comment.comment}</Comment>
            <span>{comment.date}</span>
          </CommentContainer>
        );
      })}
    </TodoDetailContainer>
  );
};
const CommentBtn = styled.button`
  width: 10rem;
  height: 2rem;
  margin: 0 auto;
`;
