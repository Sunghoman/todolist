import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ReactMarkdown from "react-markdown";
import { MainButton, MainLink } from "../../style/list_styled";
import { addPostDB } from "../../redux/async/post";

const TodoEditor = () => {
  const dispatch = useDispatch(); // 액션을 트리거 해주는 것
  useEffect(() => {
    console.log("렌더링");
  }, []);
  const [markDown, setMarkdown] = useState();
  const addTodoEditer = () => {
    console.log(markDown);
    dispatch(addPostDB(markDown));
  };
  return (
    <div>
      <div className="wrap">
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
      </div>
      <MainLink to="/">뒤로가기</MainLink>
      <MainButton onClick={addTodoEditer}>새 글 작성</MainButton>
    </div>
  );
};

export default TodoEditor;
