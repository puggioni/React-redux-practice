import React, { useState } from "react";
//redux
import { connect } from "react-redux";
import { addTodos } from "../Redux/reducer";
//redux conection
const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};
//componente
const Todos = (props) => {
  //estado
  const [todo, setTodo] = useState("");
  //functions
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const add = () => {
    if (todo === "") {
      alert("You cant do nothing (or yes)");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 10000),
        item: todo,
        completed: false,
      });
      setTodo("");
    }
  };
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="add to do..."
          value={todo}
          onChange={(e) => handleChange()}
          className="todo-input"
        />
        <button className="add-btn" onSubmit={() => add()}>
          Add
        </button>
      </form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
