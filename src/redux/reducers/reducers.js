const initialState = {
  todos: [],
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      localStorage.setItem(
        "todos",
        JSON.stringify({ ...state, todos: [...state.todos, action.todos] })
      );
      return { ...state, todos: [...state.todos, action.todos] };
    case "UPDATE_TODO":
      localStorage.setItem(
        "todos",
        JSON.stringify({
          ...state,
          todos: state.todos.map((elem) =>
            elem.id === action.todos.id
              ? { ...elem, isComplete: !elem.isComplete }
              : elem
          ),
        })
      );
      return {
        ...state,
        todos: state.todos.map((elem) =>
          elem.id === action.todos.id
            ? { ...elem, isComplete: !elem.isComplete }
            : elem
        ),
      };
    case "DELETE_TODO_LIST":
      localStorage.clear();
      return { ...state, todos: [] };
    case "DELETE_TODO":
      localStorage.setItem(
        "todos",
        JSON.stringify({
          ...state,
          todos: state.todos.filter((elem) => elem.id !== action.todos.id),
        })
      );
      return {
        ...state,
        todos: state.todos.filter((elem) => elem.id !== action.todos.id),
      };
    case "GET_TODOS":
      return {...state, todos: action.todos.todos}
    default:
      return state;
  }
};
