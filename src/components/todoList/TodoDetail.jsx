import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import styled from "styled-components"

export const TodoDetail = () => {

  const { id } = useParams()
  const { todos } = useSelector((state) => state.todoList);
  const todoBody = todos.find((data) => data.id === parseInt(id)); // 지금

  return (
    <TodoDetailContainer>
      <TodoDetailTitle>{ todoBody.title }</TodoDetailTitle>
      <TodoDetailBody>{ todoBody.body }</TodoDetailBody>
      <CommentInput/>
    </TodoDetailContainer>
  )
};

const TodoDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`
const TodoDetailTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0px 30px 0px;
`
const TodoDetailBody = styled.div`
  text-align: center;
  margin: 10px 0px 30px 0px;
`
const CommentInput = styled.input`
  width: 10rem;
  padding: 10px;
  margin: 0 auto;
  background-color: #afafaf;
  border: none;
  outline: none;
  border-radius: 5px;
`