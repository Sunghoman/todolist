import { TodoForm } from "../../components/todoList/TodoForm";
import { List } from "../../components/todoList/List";
import GlobalStyles from "../../style/globalstyle";

const TodoList = () => {
  return (
    <div>
      <GlobalStyles />
      <TodoForm />
      <List />
    </div>
  );
};
export default TodoList;
