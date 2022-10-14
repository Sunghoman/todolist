import { Todo } from "../../components/todoList/Todo";
import { List } from "../../components/todoList/List";
import GlobalStyles from "../../style/globalstyle";

const TodoList = () => {
  return (
    <div>
      <GlobalStyles />
      <Todo />
      <List />
    </div>
  );
};
export default TodoList;
