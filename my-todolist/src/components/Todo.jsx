import React from "react";

const ToDo = ({ index, markTodo, removeTodo }) => {
  return (
    <div>
      <button onClick={() => markTodo(index)}>✓</button>
      <button onClick={() => removeTodo(index)}>X</button>
    </div>
  );
};

export default ToDo;
