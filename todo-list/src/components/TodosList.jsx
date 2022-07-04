import React from "react";
import { connect } from "react-redux";
const TodosList = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.text}</div>
      ))}
    </div>
  );
};

const mapStateToProps = ({ todos }) => {
  return todos;
};
export default connect(mapStateToProps, null)(TodosList);
