import "./App.css";
import React from "react";

//components
import ToDoList from "./components/TodoList";
import FormToDo from "./components/FormToDo";
function App() {
  const [todos, setTodos] = React.useState({
    text: "",
    isDone: false,
  });
  //functions
  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className="App">
      <h1>To Do List</h1>
      <FormToDo addTodo={addTodo} />
    </div>
  );
}

export default App;
