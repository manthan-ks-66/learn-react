import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Profile from "./components/Profile";
import Login from "./components/Login";

function App() {
  return (
    // UserContextProvider is wrapping up all the components so that all of them have access to gloabal user context
    <UserContextProvider>
      <h1>Welcome to user context api demo</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
