import styled from "styled-components";
import ReactMarkdown from "react-markdown";

export const TodoDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
export const TodoDetailTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0px 30px 0px;
`;
export const TodoDetailBody = styled(ReactMarkdown)`
  text-align: center;
  padding: 15px;
  margin: 10px auto 30px auto;
  width: 40rem;
  min-height: 20rem;
  /* background-color: tomato; */
`;
export const CommentInput = styled.textarea`
  width: 40rem;
  padding: 10px;
  margin: 0px auto 25px auto;
  background-color: #afafaf;
  border: none;
  outline: none;
  border-radius: 5px;
`;
export const CommentContainer = styled.section`
  width: 600px;
  margin: 20px auto 0 auto;
  position: relative;
  background: gray;
  color: black;
  padding: 15px;
  padding-bottom: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  float: right;
`

export const CommentBody = styled.p`
  text-align: left;
  margin-left: 1.1em;
`

export const CommentInfo = styled.div`
  text-align: right;
`

export const CommentMore = styled.span`
  margin-right: 10px;
  cursor: pointer;
  font-size: 0.8rem;
`

export const CommentDate = styled.div`
  width: 100px;
  float: left;
  color: #c9c9c9;
`
export const CommentBtn = styled.button`
  width: 10rem;
  height: 2rem;
  margin: 0 auto;
`;