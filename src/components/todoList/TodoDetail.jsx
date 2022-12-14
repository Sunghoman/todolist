import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoDetailContainer, TodoDetailTitle, TodoDetailBody, CommentInput, CommentBtn, TodoDetailWrap, CommentContainer, CommentBody, CommentInfo, CommentMore, CommentDate, Button, Commentinput } from "../../style/detail_styled";
import { useTodo } from "../hooks/useTodo";
import { useEffect } from "react";
import { __getComments, __delComment, __addComment, __editComment } from "../../features/todoList/commentSlice";

import { useNavigate, useParams } from "react-router-dom";
import {
  addCommentDB,
  delPostDB,
  upPostDB,
} from "../../redux/async/post";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { __getTodos } from "../../features/todoList/todoSlice";

export const TodoDetail = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ๐๐ป ์๋ก๊ณ ์นจ ํ์๋ ์ค๋ฅ ๋ฌ๋ ์ด์  : ์๋ก๊ณ ์นจ์ ํ๋ฉด TodoDetail์๋ todos๊ฐ undefined๊ฐ ๋๊ธฐ๋๋ฌธ์ ๋ฐ์ดํฐ ํ์นญ์ ํ๋ฒ ํด์ค์ผํ๋ค.
  useEffect(() => {
    dispatch(__getComments());
    dispatch(__getTodos());
  }, [dispatch]);

  // ํ๋ผ๋ฏธํฐ๊ฐ
  const { id } = useParams();

  const { todos } = useSelector((state) => state.todoList);
  const todoBody = todos && todos.find((data) => data.id === parseInt(id));
  // ๋๊ธ ๋ถ๋ฌ์ค๊ธฐ
  const { comments } = useSelector((state) => state.commentList);

  // ๊ฒ์๋ฌผ์ ํด๋นํ๋ ๋๊ธ (๊ทผ๋ฐ ๋ฐ๋ก ์๋ธ)
  // ๋ฆฌ๋์์์ ์ก์ ๋ง๋ค์ด์ ์ฒ๋ฆฌํ๋ฉด ๋๋น
  const commentById = comments?.filter((comment) => parseInt(comment?.FK) === parseInt(id))

  const { todo } = useTodo();
  const { date } = todo;

  // ๋๊ธ์ฐฝ ๊ธฐ๋ณธ๊ฐ
  const [comment, setComment] = useState("");
  const addComment = () => {
    if (comment !== "") {
      dispatch(addCommentDB({ FK: id, comment: comment, date: date }));
    }
    setComment("");
  };

  const handleGoBack = () => {
    navigate(-1);
  };
  
  // ๐๐ป ๊ฒ์๊ธ ์ญ์  ํจ์ ์๊ทธ๋ ์ด๋ : ๊ฒ์๊ธ ์ญ์ ํ์๋ ํ์ด์ง ๋ค๋ก๊ฐ๊ธฐ ์คํํ๋ ํจ์๋ ๊ฐ์ด ์ฝ๋ฐฑํจ์๋ก params ๋ผ๋ ๊ฐ์ฒด๋ก ๋ฌถ์ด์ ๋๊น
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

  const [commentText, setCommentText] = useState("");

  const handleSubmit = (e) => {
    if (commentText !== "") {
      dispatch(__editComment({ id: selected, text: commentText }));
    } else {
      return;
    }
    setCommentText("");
    navigate(`/list/${id}`)
  }

  const handleChange = (e) => {
    setCommentText(e.target.value);
  };

  // ๋ชจ๋ฌ ์ํ
  const [modal, setModal] = useState(false);
  // ๋๊ธ์ id๊ฐ ํ๋ณ
  const [selected, setSelected] = useState(null);

  // console.log(todoBody)
  
  return (
    <>
      <TodoDetailContainer>
        <TodoDetailWrap>
          {/* ๐๐ป todoBody์ ์ ๊ทผํ๋ ํ๋กํผํฐ๋ค์ todoBody๊ฐ ์์๋ ๋ผ๋ todoBody&& ๋ผ๋ ์กฐ๊ฑด์ ์์ ๋ฌ์์ค์ผํจ, ์๋๋ฉด ์๋ฌ๋จ */}
          {/* ๐๐ป todoBody๊ฐ undefined๋ฉด ์คํผ๋๋ฅผ ๋ณด์ฌ ์ฃผ๋๊ฐ ๋ฐ๋ก ์ฒ๋ฆฌ๋ฅผ ํด์ผํจ. */}
          <TodoDetailTitle>{todoBody && todoBody.title}</TodoDetailTitle>
          <Button className="buttonset">
            <button
              onClick={() => navigate("/edit/" + id)}
              className="edit-button"
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
            <button onClick={deletePost} className="delete-button">
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </Button>
        </TodoDetailWrap>
        {/* ๐๐ป ๋ง์ฐฌ๊ฐ์ง๋ก */}
        <TodoDetailBody>{todoBody && todoBody.markDown}</TodoDetailBody>
        <CommentInput
          type="text"
          autoComplete="off"
          placeholder="Please enter a comment..."
          value={comment}
          onChange={onChange}
        />
        <CommentBtn onClick={addComment}>๋๊ธ ๋ฌ๊ธฐ</CommentBtn>
        {
          commentById&&commentById.map((comment) => {
            return(
              <CommentContainer key={comment?.id}>
                <div>
                  <CommentBody>{ comment?.comment }</CommentBody>
                  <CommentInfo>
                    <CommentDate>{ comment?.date }</CommentDate>
                    <CommentMore onClick={() => {
                      setModal(!modal)
                      setSelected(comment?.id)
                    }}
                    > 
                      { modal === true && comment?.id === selected ? "์๋ฃ" : "์์ " }
                    </CommentMore>
                    <CommentMore onClick={() => {
                      dispatch(__delComment(comment?.id))
                    }}>์ญ์ </CommentMore>
                  </CommentInfo>
                </div>
                {/* ๋๊ธ ์์  ๋ชจ๋ฌ์ฐฝ */}
                {
                  modal === true && comment?.id === selected ?
                  <>
                    <Commentinput
                      onChange={handleChange}
                      value={commentText}
                    />
                    <button onClick={() => {
                      handleSubmit()
                      setModal(!modal)
                    }}>์์  ์๋ฃ</button>
                  </>
                    : null
                }
              </CommentContainer>
            )
          })
        }
      </TodoDetailContainer>
    </>
  );
};
