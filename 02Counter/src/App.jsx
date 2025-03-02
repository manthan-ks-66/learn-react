import { useState } from "react";
import "./App.css";

function App() {
  // the useState hook always gives two values in an array 
  // and updates the initial variable on the UI
  let [counter, setCounter] = useState(5);

  const addValue = () => {
    counter++;
    setCounter(counter);
  };

  return (
    <>
      <h1>Counter: {counter}</h1>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button>Remove val</button>
    </>
  );
}

export default App;
