export const addTodo = (value) => ({
  type: "ADD_TODO",
  data: { value },
});

export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  data: { id },
});

export const removeTodo = (id) => ({
  type: "REMOVE_TODO",
  data: { id },
});
