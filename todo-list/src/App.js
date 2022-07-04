import "./App.css";

import React from "react";
import Form from "./components/Form";
import TodosList from "./components/TodosList";

function App() {
  return (
    <div className="App">
      <h1>To do List</h1>
      <Form></Form>
      <TodosList />
    </div>
  );
}

export default App;
