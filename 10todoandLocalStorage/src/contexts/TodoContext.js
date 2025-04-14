import { createContext, useContext } from "react";

export const TodoContext = createContext({
  // todos(array of object)
  todos: [
    {
      id: 1,
      todoTitle: "Todo One",
      isCompleted: false,
    },
  ],
  addTodo: (todoTitle) => {
    console.log(todoTitle);
  },
  updateTodo: (id, todoTitle) => {
    console.log(id, todoTitle);
  },
  deleteTodo: (id) => {
    console.log(id);
  },
  toggleIsComplete: (id) => {
    console.log(id);
  },
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
