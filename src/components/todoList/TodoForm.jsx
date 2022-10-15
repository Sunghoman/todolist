import { useTodo } from "../hooks/useTodo";
import {
  ButtonSet,
  Title,
  TitleAndButtonPosition,
  TodoBody,
} from "../../style/todo_styled";

export const TodoForm = () => {
  const { todo, getInputs, addTodo, handleChange } = useTodo();

  const { title, body } = todo;
  return (
    <TodoBody>
      <TitleAndButtonPosition>
        <Title>StackOverFlow</Title>
        <ButtonSet>
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </ButtonSet>
      </TitleAndButtonPosition>
      <select name="tag" onChange={handleChange}>
        <option value="">---</option>
        <option value="react">React</option>
        <option value="spring">Spring</option>
      </select>
      <input
        id="title"
        type="text"
        placeholder="title"
        name="title"
        value={title}
        onChange={getInputs}
      />
      <input
        id="body"
        type="text"
        placeholder="content"
        name="body"
        value={body}
        onChange={getInputs}
      />
      <button onClick={addTodo}>추가</button>
    </TodoBody>
  );
};
