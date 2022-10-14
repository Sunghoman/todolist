import { useTodo } from "../hooks/useTodo";

export const Todo = () => {
  const { todo, getInputs, addTodo, handleChange } = useTodo();

  const { title, body } = todo;
  return (
    <>
      <hr />
      <h1>
        TODO LIST
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </h1>
      <select name="tag" onChange={handleChange}>
        <option value="">--Choose and option--</option>
        <option value="react">React</option>
        <option value="spring">Spring</option>
      </select>
      <input
        id="title"
        type="text"
        placeholder="제목 적으셈"
        name="title"
        value={title}
        onChange={getInputs}
      />
      <input
        id="body"
        type="text"
        placeholder="내용 적으셈"
        name="body"
        value={body}
        onChange={getInputs}
      />
      <button onClick={addTodo}>추가</button>
    </>
  );
};
