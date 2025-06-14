// import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo, addTodo } from "../features/todo/todoSlice";

export default function AddTodo({ inputRef, setInput, input, onEdit, existingTodo, setExistingTodo }) {
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (existingTodo) {
      updateTodo()
    }
    setInput(" ");
  };

  return (
    <>
      <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
        <input
          ref={inputRef}
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-          base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => onEdit(e)}
          
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Add Todo
        </button>
      </form>
    </>
  );
}
