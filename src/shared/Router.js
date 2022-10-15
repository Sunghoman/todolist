import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TodoMain, TodoList, TodoListDetail } from "../pages";
// test CODE


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoMain />} />
        <Route path="/list" element={ <TodoList /> } />
        <Route path="/detail/:id" element={ <TodoListDetail /> } />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;