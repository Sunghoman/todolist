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
export const CommentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40rem;
  margin: 0 auto;
  margin: 20px auto 10px auto;
  padding-bottom: 10px;
  border-bottom: 1px solid #fff;
`;
export const Comment = styled.h4`
  font-size: 1rem;
  letter-spacing: 1.2px;
`;