const initState = {
  todos: [
    { id: 0, value: "Take the dog out", done: false },
    { id: 1, value: "Get groseries", done: true },
  ],
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Math.max(...state.todos.map((i) => i.id)) + 1,
            value: action.data.value,
            done: false,
          },
        ],
      };

    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.data.id) {
            return {
              ...item,
              done: !item.done,
            };
          }
          return item;
        }),
      };

    case "REMOVE_TODO":
      return {
        ...state,
        todos:
          state.todos.length === 1
            ? []
            : state.todos.filter((i) => action.data.id !== i.id),
      };

    default:
      return state;
  }
};

export default todoReducer;
