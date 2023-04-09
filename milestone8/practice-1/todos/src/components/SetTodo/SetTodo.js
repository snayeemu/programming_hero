import React from "react";

const SetTodo = (props) => {
  console.log(props.todo);
  const { completed, id, title, userId } = props.todo;
  return (
    <div className="bg-warning-subtle rounded-5 p-2 col-5 mb-2">
      <h5>
        Task-{id}: {title}
      </h5>
      <h6>Status: {completed ? "done" : "incomplete"}</h6>
      <p>Task assigned to: id-{userId}</p>
    </div>
  );
};

export default SetTodo;
