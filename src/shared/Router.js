import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoEditor from "../components/todoList/TodoEditor";
import { TodoMain, TodoList, NotFound } from "../pages";
import { TodoDetail } from "../components/todoList/TodoDetail";
import TodoEdit from "../components/todoList/TodoEdit";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoMain />} />
        <Route path="/list" element={<TodoList />}>
          <Route path=":id" element={<TodoDetail />} />
        </Route>
        <Route path="/editor" element={<TodoEditor />} />
        <Route path="/edit/:id" element={<TodoEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
