import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "flowbite-react";
import Buttons from "./components/Buttons/Buttons";
import Modal from "./components/Modal/Modal";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center py-5">
      <Buttons></Buttons>
      <span className="mx-auto">
        <Modal></Modal>
      </span>
    </div>
  );
}

export default App;
