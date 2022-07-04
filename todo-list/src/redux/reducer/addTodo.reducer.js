const initialState = {
  todos: [],
  text: "",
  selected: undefined,
};

export const addTodo = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};
