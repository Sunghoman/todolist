import { useTodo } from "../hooks/useTodo"


export const Todo = () => {

  const { todo, getInputs, addTodo } = useTodo();

  const { title, body } = todo;

  return (
    <div>
      <hr/>
      <h1>투두리스트임</h1>
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
      <button 
        onClick={addTodo}
      >
        이거 누르면 Todo 추가됨 (진짜임)
      </button>
    </div>
  )
}