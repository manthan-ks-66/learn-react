import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";
import { ThemeProvider } from "./contexts/theme";
function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // actual javascript dom logic that changes the class list (theme)
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");

    document.querySelector("html").classList.add(theme);
  }, [theme]);

  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
