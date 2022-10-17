import { TodoForm } from "../../components/todoList/TodoForm";
import { List } from "../../components/todoList/List";
import GlobalStyles from "../../style/globalstyle";
import styled from "styled-components";

const TodoList = () => {
  console.log();
  return (
    <>
      <GlobalStyles />
      <TodoListContainer className="TodoList">
        <TodoForm />
        <List />
      </TodoListContainer>
    </>
  );
};
const TodoListContainer = styled.div`
  display: grid;
  grid-template-columns: 36% 65%;
  grid-template-rows: 10% 90%;
  column-gap: 20px;
`;
export default TodoList;
