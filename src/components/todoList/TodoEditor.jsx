import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ReactMarkdown from "react-markdown";
import { ButtonSet, Input, Select, TagAndTitle } from "../../style/list_styled";
import { addPostDB } from "../../redux/async/post";
import { useTodo } from "../hooks/useTodo";
import { MainButton, MainLink } from "../../style/editor_styled";
import { useNavigate } from "react-router-dom";

const TodoEditor = () => {
  const dispatch = useDispatch(); // 액션을 트리거 해주는 것
  useEffect(() => {
    console.log("렌더링");
  }, []);
  const [markDown, setMarkdown] = useState();
  const addTodoEditer = () => {
    navigate("/list");
    console.log(markDown);
    dispatch(addPostDB({ markDown, title, tag, status, date }));
  };
  const { todo, getInputs, handleChange } = useTodo();
  const { title, tag, status, date } = todo;
  const navigate = useNavigate();
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
              placeholder="title"
              name="title"
              value={title}
              onChange={getInputs}
            />
          </TagAndTitle>
          <div className="container">
            <textarea
              id="markDown"
              name="markDown"
              value={markDown}
              onChange={(e) => setMarkdown(e.target.value)}
              className="textarea"
              placeholder="질문을 적어보세용"
            ></textarea>
            <div className="output">
              <ReactMarkdown>{markDown}</ReactMarkdown>
            </div>
          </div>
          <ButtonSet>
            <MainLink to="/">뒤로가기</MainLink>
            <MainButton onClick={addTodoEditer}>새 글 작성</MainButton>
          </ButtonSet>
        </div>
      </div>
    </div>
  );
};
export default TodoEditor;
