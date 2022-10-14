import { Title } from "../../style/todo_styled";
import { useTodo } from "../hooks/useTodo";

export const Todo = () => {
  const { todo, getInputs, addTodo, handleChange } = useTodo();

  const { title, body } = todo;
  return (
    <>
      <Title>StackOverFlow</Title>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <select name="tag" onChange={handleChange}>
        <option value="">--Choose and option--</option>
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
    </>
  );
};
