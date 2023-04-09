import React, { useEffect, useState } from "react";
import SetTodo from "../SetTodo/SetTodo";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);
  return (
    <div className="container mx-auto row d-flex justify-content-around my-5">
      {todos.map((todo) => (
        <SetTodo todo={todo} key={todo.id}></SetTodo>
      ))}
    </div>
  );
};

export default Todo;
