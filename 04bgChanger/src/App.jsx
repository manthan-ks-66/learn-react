import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("green");
  return (
    <div
      className="w-full h-screen flex justify-baseline items-baseline"
      style={{ backgroundColor: color }}
    >
      <div
        className="w-screen m-4 h-1/7 rounded-2xl flex justify-evenly items-center
        bg-grey-500 bottom-12 bg-gray-800"
      >
        <button
          onClick={() => setColor("red")}
          className="rounded-lg bg-red-500 w-12 h-7 items-center px-0.5"
        >
          Red
        </button>

        <button
          onClick={() => setColor("yellow")}
          className="rounded-lg bg-yellow-500 w-12 h-7 text-black"
        >
          Yellow
        </button>

        <button
          onClick={() => setColor("blue")}
          className="rounded-lg bg-blue-500 w-12 h-7 items-center px-0.5"
        >
          Blue
        </button>

        <button
          onClick={() => setColor("pink")}
          className="rounded-lg bg-pink-500 w-12 h-7 items-center px-0.5"
        >
          Pink
        </button>

        <button
          onClick={() => setColor("purple")}
          className="rounded-lg bg-purple-500 w-12 h-7 items-center px-0.5"
        >
          Purple
        </button>
      </div>
    </div>
  );
}

export default App;
