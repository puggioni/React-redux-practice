import "./App.css";
import Displaytodos from "./components/Displaytodos";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <Displaytodos>
        <Todos></Todos>
      </Displaytodos>
    </div>
  );
}
export default App;
