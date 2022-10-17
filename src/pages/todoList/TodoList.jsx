// import { TodoForm } from "../../components/todoList/TodoForm";
import { List } from "../../components/todoList/List";
import GlobalStyles from "../../style/globalstyle";
import styled from "styled-components";

const TodoList = () => {
  console.log();
  return (
    <>
      <GlobalStyles />
      <TodoListContainer className="TodoList">
        {/* <TodoForm /> */}
        <List />
      </TodoListContainer>
    </>
  );
};
const TodoListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export default TodoList;
