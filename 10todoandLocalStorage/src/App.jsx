import TodoForm from "./components/TodoForm";
import "./App.css";
import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts/TodoContext";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [
      { id: Date.now(), todoTitle: todo },
      ...prevTodos,
    ]);
  };

  const updateTodo = (id, todoTitle) => {
    setTodos((prevTodo) =>
      prevTodo.map((eachTodo) =>
        eachTodo.id === id ? { ...eachTodo, todoTitle } : eachTodo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodo) => prevTodo.filter((eachTodo) => eachTodo.id !== id));
  };

  const toggleIsComplete = (id) => {
    setTodos((prevTodo) =>
      prevTodo.map((eachTodo) =>
        eachTodo.id === id
          ? //using this eachTodo.isComplete will only change the data but we need to return new data so that react updates it
            { ...eachTodo, isCompleted: !eachTodo.isCompleted }
          : eachTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleIsComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
