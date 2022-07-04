import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/action/addTodo.action";

const Form = () => {
  const [todo, setTodo] = React.useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        placeholder="add a task"
        onChange={handleChange}
        value={todo}
      />
      <input type="submit" value="add" />
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
  };
};
export default connect(null, mapDispatchToProps)(Form);
