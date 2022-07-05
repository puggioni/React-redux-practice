import React from "react";

import "./App.css";
import Input from "./components/Input";
import Todo from "./components/Todo";

import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";
function App() {
  const todoList = useSelector(selectTodoList);
  return (
    <div className="App">
      <Input />
      <div>
        {todoList.map((item) => (
          <div>
            <Todo name={item.item} id={item.id} completed={item.completed} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
