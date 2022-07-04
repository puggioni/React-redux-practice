import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { addTodo } from "./reducer/addTodo.reducer";

const store = createStore(addTodo, applyMiddleware(logger));

export default store;
