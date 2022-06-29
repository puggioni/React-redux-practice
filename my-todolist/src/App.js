import "./App.css";
import React from "react";
import TodoList from "./components/TodoList";

//components

function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
