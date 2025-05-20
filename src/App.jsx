import { useState } from "react";
import { TodoContext } from "./components/TodoContext";
import TodoList from "./components/TodoList";
import Input from "./components/Input";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-[#0D0D0D] h-screen text-white flex flex-col justify-center items-center">
      <h1 className="text-white font-bold text-4xl pb-7">Todo List</h1>
      <TodoContext value={{ todos, addTodo, deleteTodo }}>
        <Input/>
        <TodoList />
      </TodoContext>
    </div>
  );
}

export default App;
