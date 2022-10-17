import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const TodoEditor = () => {
  const [markDown, setMarkdown] = useState();

  return (
    <>
      <div className="wrap">
        <div className="container">
          <textarea
            value={markDown}
            onChange={(e) => setMarkdown(e.target.value)}
            className="textarea"
            placeholder="질문을 적어보세용"
          ></textarea>
          <div className="output">
            <ReactMarkdown>
              {markDown}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoEditor;
