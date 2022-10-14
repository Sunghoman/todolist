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

      {/* {
        todoList.map((todo) => {
          return(
            <div>{ todo.title }</div>
          )
        })
      } */}
      <Left>
        상세페이지임
        { id }
        <button onClick={() => { navigate("/") }}>돌아가기</button>
          asd
      </Left>
    </div>
  )
}

export default TodoListDetail;

const Left = styled.div`
  float: left;
  height: 100vh;
  width: 40%;
  margin: 0;
  background: tomato;
`