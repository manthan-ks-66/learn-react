import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { useState, useRef } from "react";

function App() {
  const [input, setInput] = useState(" ");
  const [existingTodo, setExistingTodo] = useState(" ");
  const focusInput = () => {
    inputRef.current.focus();
  };

  const setEditText = (todoText) => {
    setInput(todoText);
    setExistingTodo(todoText);
  };

  const onEdit = (e) => {
    setInput(e.target.value);
  };

  const inputRef = useRef();

  return (
    <Provider store={store}>
      <AddTodo
        inputRef={inputRef}
        input={input}
        onEdit={onEdit}
        setInput={setInput}
        existingTodo={existingTodo}
        setExistingTodo={setExistingTodo}
      />
      <Todo setEditText={setEditText} focusInput={focusInput} />
    </Provider>
  );
}

export default App;
