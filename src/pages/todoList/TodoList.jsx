import { Counter } from "../../components/todoList/Counter"
import { Todo } from "../../components/todoList/Todo"
import { List } from "../../components/todoList/List"

const TodoList = () => {
  return (
    <div>
      <Counter/>
      <Todo/>
      <List/>
    </div>
  )
}
export default TodoList;