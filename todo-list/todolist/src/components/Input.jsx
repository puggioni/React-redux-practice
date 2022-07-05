import React from "react";
import { useDispatch } from "react-redux";
import { saveTodo } from "../features/todoSlice";
const Input = () => {
  const [input, setInput] = React.useState("");
  const dispatch = useDispatch();
  const addTodo = (e) => {
    e.preventDefault();
    if (input === "") return alert("You can't do nothing...or yes you can");
    if (input.length > 50) return alert("You cant do that much bruh");
    dispatch(
      saveTodo({
        item: input,
        id: Math.random().toString(),
        completed: false,
      })
    );
  };
  return (
    <form onSubmit={addTodo}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <input type="submit" value="Add!" />
    </form>
  );
};

export default Input;
