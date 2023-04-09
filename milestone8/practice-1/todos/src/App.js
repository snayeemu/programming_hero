import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo/Todo";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Todo></Todo>
    </div>
  );
}

export default App;
