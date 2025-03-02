import { useState } from "react";
import "./App.css";

function App() {
  // the useState hook always gives two values in an array
  // and updates the initial variable on the UI
  let [counter, setCounter] = useState(5);

  const addValue = () => {
    // assignment
    if (counter === 20) {
      setCounter(20);
      return;
    }
    counter++;

    setCounter(counter);
  };

  const removeValue = () => {
    // assignment
    if (counter <= 0) {
      setCounter(0);
      return;
    }
    counter--;
    setCounter(counter);
  };

  return (
    <>
      <h1>Counter: {counter}</h1>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove val</button>
    </>
  );
}

export default App;
