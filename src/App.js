import Header from "./components/header/Header";
import AddTodo from "./components/addTodo/AddTodo";
import Todos from "./components/todos/Todos";
import { useSelector } from "react-redux";

export default function App() {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <main>
      <Header title="Todo App" />
      <AddTodo />
      <Todos todos={todos} />
    </main>
  );
}
