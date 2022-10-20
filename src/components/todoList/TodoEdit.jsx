import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";
import { ButtonSet, Input, Select, TagAndTitle } from "../../style/list_styled";
import { addPostDB, getPostOne, upPostDB } from "../../redux/async/post";
import { useTodo } from "../hooks/useTodo";
import { MainButton, MainLink } from "../../style/editor_styled";
import { useNavigate, useParams } from "react-router-dom";
import { __getTodos } from "../../features/todoList/todoSlice";

const TodoEdit = () => {
  const dispatch = useDispatch(); // 액션을 트리거 해주는 것

  const comment = [];
  const [markDown, setMarkdown] = useState();
  const addTodoEditer = () => {
    navigate("/list");
    console.log(markDown);
    dispatch(addPostDB({ markDown, tag, status, date, comment }));
  };
  const { todo, handleChange } = useTodo();
  const { title, tag, status, date } = todo;
  // console.log(todo)

  const [body, setBody] = useState("");
  const [mark, setMark] = useState("");
  const postTitle = useSelector((state) => state.todoList.todo?.title); // 옵셔널 체이닝
  const postMark = useSelector((state) => state.todoList.todo?.markDown); // 옵셔널 체이닝
  
  useEffect(() => {
    setBody(postTitle);
  }, [postTitle]);

  useEffect(() => {
    setMark(postMark);
  }, [postMark]);

  const navigate = useNavigate();
  const { id } = useParams();

  // const updatePost = () => {
  //   dispatch(upPostDB({ id, edit: { title, markDown } }));
  //   navigate(-1);
  // };s

  const handleGoBack = () => {
    navigate(-1);
  };

  // 👉🏻 게시글 수정 함수 업그레이드 : 게시글 수정 했을때 페이지 뒤로가기 실행하는 함수도 같이 콜백함수로 params 라는 객체로 묶어서 넘김
  const updatePost = () => {
    const params = {
      id,
      edit: { body, markDown },
      callBackFunc: () => {
        handleGoBack();
      },
    };
    dispatch(upPostDB(params));
  };
  useEffect(() => {
    // console.log("데이터 패칭~~~~~~~~");
    dispatch(getPostOne(id));
  }, [dispatch, id]);

  // { todo: post } 이름이 동일할 경우 : 를 사용하여 새로운 이름을 만들어줄 수 있음
  const { todo: post } = useSelector((state) => state.todoList);
  // console.log(post);
  return (
    <div>
      <div className="wrap">
        <div className="editer-wrap">
          <TagAndTitle>
            <Select name="tag" onChange={handleChange}>
              <option value="">---</option>
              <option value="react">React</option>
              <option value="spring">Spring</option>
            </Select>
            <Input
              id="title"
              type="text"
              value={body}
              name="title"
              onChange={(e) => {
                setBody(e.target.value);
              }}
            />
          </TagAndTitle>
          <div className="container">
            <textarea
              id="markDown"
              name="markDown"
              onChange={(e) => {
                setMarkdown(e.target.value);
                setMark(e.target.value);
              }}
              className="textarea"
              value={mark}
            ></textarea>
            <div className="output">
              <ReactMarkdown>{markDown}</ReactMarkdown>
            </div>
          </div>
          <ButtonSet>
            <MainLink to="/">뒤로가기</MainLink>
            <MainButton onClick={updatePost}>수정하기</MainButton>
          </ButtonSet>
        </div>
      </div>
    </div>
  );
};
export default TodoEdit;
