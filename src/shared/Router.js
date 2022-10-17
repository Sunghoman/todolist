import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoEditor from "../components/todoList/TodoEditor";
import { TodoMain, TodoList, NotFound } from "../pages";
import { useParams } from "react-router-dom";

const Router = () => {
  const params = useParams();
  console.log(params);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoMain />} />
        <Route path="/list" element={<TodoList />}>
          <Route path=":id" element={<div>상세페이지 나올거임</div>}/>
        </Route>
        <Route path="/editer" element={<TodoEditor />} />
        <Route path="*" element={ <NotFound/> }/>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
