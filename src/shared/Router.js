import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TodoListMain, TodoListDetail } from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <TodoListMain /> } />
        <Route path="/detail/:id" element={ <TodoListDetail /> } />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;