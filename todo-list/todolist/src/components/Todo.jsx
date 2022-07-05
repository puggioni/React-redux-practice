import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch } from "react-redux";
import { setChecked } from "../features/todoSlice";

const Todo = ({ name, done, id }) => {
  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(setChecked(id));
  };
  return (
    <div>
      <Checkbox
        checked={done}
        color={done ? "primary" : "secondary"}
        onChange={handleCheck}
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <p className={done && "todoItem--done"}>{name}</p>
    </div>
  );
};

export default Todo;
