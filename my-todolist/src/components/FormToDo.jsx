import React from "react";

const FormToDo = ({ addTodo }) => {
  const [value, setValue] = React.useState("");
  //functions
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  return (
    <form>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="add to do"
      ></input>
      <button type="submite" onClick={{ handleSubmit }}>
        Add
      </button>
    </form>
  );
};
export default FormToDo;
