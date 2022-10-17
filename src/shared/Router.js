import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoEditor from "../components/todoList/TodoEditor";
import { TodoMain, TodoList, NotFound } from "../pages";
import { TodoDetail } from "../components/todoList/TodoDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoMain />} />
        <Route path="/list" element={<TodoList />}>
          <Route path=":id" element={<TodoDetail/>}/>
        </Route>
        <Route path="/editer" element={<TodoEditor />} />
        <Route path="*" element={ <NotFound/> }/>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
