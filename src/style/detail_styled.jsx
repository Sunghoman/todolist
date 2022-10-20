import styled from "styled-components";
import ReactMarkdown from "react-markdown";

export const TodoDetailContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
export const TodoDetailWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const TodoDetailTitle = styled.div`
  font-size: 40px;
  font-weight: bold;
`;
export const Button = styled.div`
  border: none;
  cursor: pointer;
`;
export const TodoDetailBody = styled(ReactMarkdown)`
  text-align: left;
  width: 40rem;
  min-height: 20rem;
`;
export const CommentInput = styled.textarea`
  resize: none;
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
  transition: all 0.3s;
  &:hover {
    color: whitesmoke;
    transform: scale(1.2);
  }
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

export const Commentinput = styled.textarea`
  width: 20rem;
  height: 10rem;
  border: none;
  outline: none;
  background-color: #5f5f5f;
  color: #fff;
`;