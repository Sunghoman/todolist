import styled from 'styled-components'
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

const TodoListDetail = () => {

  const todoList = useSelector((state) => state.todoList);
  const navigate = useNavigate();
  const { id } = useParams();
  const todos = todoList.find(data => data.id === id);

  console.log(todoList);
  console.log(todos)

  return(
    <div>
      <NavBar>
        상세페이지임
        { id }
        <button onClick={() => { navigate("/") }}>돌아가기</button>
        <input placeholder='검색창임' />
      </NavBar>
      <Left>

        {
          todoList.map((todo) => {
            return(
              <List>{ todo.title }</List>
            )
          })
        }
        {
          todoList.map((todo) => {
            return(
              <List>{ todo.title }</List>
            )
          })
        }
      </Left>
      <Right>ㅂ야호</Right>
    </div>
  )
}

export default TodoListDetail;

const Left = styled.div`
  float: left;
  height: 95vh;
  width: 40%;
  margin: 0px;
  padding: 0px;
  background: #adadad;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`
const Right = styled.div`
  float: right;
  height: 95vh;
  width: 60%;
  background: #49494a;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`

const List = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  width: 70%;
  background: gray;
  margin-bottom: 10px;
  height: 5rem;
`

const NavBar = styled.div`
  width: 100%;
  height: 5rem;
  background: tomato;
  display: flex;
  align-items: center;
`