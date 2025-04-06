import { useContext, createContext } from "react";

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {
    //
  },
});

// for wrapping the context (mandatory)
export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
