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
          ></textarea>
          <div className="output">
            <ReactMarkdown>{markDown}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoEditor;
