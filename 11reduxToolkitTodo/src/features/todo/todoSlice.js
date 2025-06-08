import { createSlice, nanoid } from "@reduxjs/toolkit";

/* createSlice: A function that accepts an initial state, an object of reducer functions, and a "slice name",
   and automatically generates action creators and action types that correspond to the reducers and state.*/

// initialState can an array or an object depends on your choice
const initialState = {
  todos: [
    {
      id: nanoid(),
      todo: "First Todo",
      isCompleted: false,
    },
  ],
};

/* slice we create as key value type of an object

 * where in key side name, initialState, reducers are properties

 * and value side we define the name , initial data and functionality

 * name: in name we define the name of the slice (name is important redux keyword) 

 * initialState (property): in initialState we define initial data 

 * reducers (property): in reducers we define functions

 * reducers have the collections of functionalities defined
 */

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    /** you will always get two parameters in the functions property state and action
     *
     * state: give you the currect data which is the intial state of the data, assume it as this tells you about
     * the current situation
     *
     * action: gives access to the data like id, data or whatever the data is getting passed in the payload object.
     */
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        todo: action.payload,
        isCompleted: false,
      };

      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      const id = action.payload;
      const todos = state.todos;

      const newTodos = todos.filter((todo) => todo.id !== id);

      state.todos = newTodos;

      // NOTE: state.todos.push(newTodos) => this will push exisiting data into the todos array it won't delete the todo obj
    },
    updateTodo: (state, action) => {
      const id = action.payload;
      const todos = state.todos;

      const newTodos = todos.map((todo) => {
        todo.id === id ? { ...todo, todo: action.payload } : todo;
      });

      state.todos.push(newTodos);
    },
  },
});

// export individually so that you can import it in the components files
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

// after intialinzing data, creating slice and reducers we need to export reducers
export default todoSlice.reducer;
