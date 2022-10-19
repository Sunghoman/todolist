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
import { __getTodos } from "../../features/todoList/todoSlice";

export const TodoDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { todos } = useSelector((state) => state.todoList);

  useEffect(() => {
    dispatch(__getComments());
  }, [dispatch]);

  // 👉🏻 새로고침 했을때 오류 났던 이유 : 새로고침을 하면 TodoDetail에는 todos가 undefined가 되기때문에 데이터 페칭을 한번 해줘야한다.
  useEffect(() => {
    console.log("데이터 패칭!");
    dispatch(__getTodos());
  }, []);

  // 파라미터값
  const { id } = useParams();

  const todoBody = todos && todos.find((data) => data.id === parseInt(id));

  // 댓글 불러오기
  const { comments } = useSelector((state) => state.commentList);
  const commentById = comments.find(
    (comment) => comment.id === todoBody && todoBody.id
  );

  const { todo } = useTodo();
  const { date } = todo;

  const [comment, setComment] = useState("");
  const addComment = () => {
    dispatch(addCommentDB({ FK: id, comment: comment, date: date }));
    setComment("");
  };

  const handleGoBack = () => {
    navigate(-1);
  };
  // 👉🏻 게시글 삭제 함수 업그레이드 : 게시글 삭제했을때 페이지 뒤로가기 실행하는 함수도 같이 콜백함수로 params 라는 객체로 묶어서 넘김
  const deletePost = () => {
    const params = {
      id,
      callBackFunc: () => {
        handleGoBack();
      },
    };
    dispatch(delPostDB(params));
  };
  const onChange = (e) => {
    e.preventDefault();
    setComment(e.target.value);
  };
  // console.log(comment);

  return (
    <TodoDetailContainer>
      <TodoDetailWrap>
        {/* 👉🏻 todoBody에 접근하는 프로퍼티들은 todoBody가 있을때 라는 todoBody&& 라는 조건을 옆에 달아줘야함, 아니면 에러남 */}
        {/* 👉🏻 todoBody가 undefined면 스피너를 보여 주던가 따로 처리를 해야함. */}
        <TodoDetailTitle>{todoBody && todoBody.title}</TodoDetailTitle>
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
      {/* 👉🏻 마찬가지로 */}
      <TodoDetailBody>{todoBody && todoBody.markDown}</TodoDetailBody>
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
