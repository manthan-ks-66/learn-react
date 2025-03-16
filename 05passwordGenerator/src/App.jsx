import { useCallback, useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) {
      str += "0123456789";
    }

    if (charAllowed) {
      str += "!@#$%^&*(){}[]";
    }

    for (let i = 0; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // passwordGenerator();

  // useEffect: calls the function when page reloads or dependency array changes
  useEffect(() => {
    passwordGenerator();
  }, [length, charAllowed, numAllowed, passwordGenerator]);
  return (
    <>
      <div className="min-w-28 max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            className="outline-none w-full py-1 px-3 bg-amber-50 text-black"
            value={password}
            ref={passwordRef}
            readOnly
          />

          <button
            value={passwordRef}
            style={{ cursor: "pointer" }}
            onClick={copyPasswordToClipboard}
            className="btn-copy śoutline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={90}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />

            <label htmlFor="length">Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              // onChange={() => setNumAllowed(true)} this will permanentlt make the numAllowed as true
              onChange={() => setNumAllowed((prevCheck) => !prevCheck)}
              className="cursor-pointer"
              id="numberInput"
            />

            <label htmlFor="numbers">Numbers</label>
          </div>

          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => setCharAllowed((prevCheck) => !prevCheck)}
              className="cursor-pointer"
              if="charInput"
            />

            <label htmlFor="charecters">Charecters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
