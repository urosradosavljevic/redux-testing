import {
  addTodo,
  fetchTodos,
  removeTodo,
  showLoading,
  todosFetched,
  toggleTodo,
} from ".";
import faker from "faker";

describe("Actions", () => {
  it("should test addTodo action", () => {
    const title = faker.lorem.sentence();
    const expectedActionResult = addTodo(title);

    expect(expectedActionResult.type).toEqual("ADD_TODO");
    expect(expectedActionResult.data.title).toEqual(title);
  });

  it("should test toggleTodo action", () => {
    const id = faker.datatype.number();
    const expectedActionResult = toggleTodo(id);

    expect(expectedActionResult.type).toEqual("TOGGLE_TODO");
    expect(expectedActionResult.data.id).toEqual(id);
  });

  it("should test removeTodo action", () => {
    const id = faker.datatype.number();
    const expectedActionResult = removeTodo(id);

    expect(expectedActionResult.type).toEqual("REMOVE_TODO");
    expect(expectedActionResult.data.id).toEqual(id);
  });

  it("should test fetchTodos action", () => {
    const expectedActionResult = fetchTodos();

    expect(expectedActionResult.type).toEqual("FETCH_TODOS");
  });

  it("should test todosFetched action", () => {
    const todos = [];
    // create random todos
    Array.from(Array(faker.datatype.number(32)).keys()).forEach((idx) => {
      todos.push({
        id: idx,
        title: faker.lorem.sentence(),
        completed: faker.datatype.boolean(),
      });
    });

    const expectedActionResult = todosFetched(todos);

    expect(expectedActionResult.type).toEqual("TODOS_FETCHED");
    expect(expectedActionResult.data.todos).toEqual(todos);
  });

  it("should test showLoading action", () => {
    const expectedActionResult = showLoading();

    expect(expectedActionResult.type).toEqual("SHOW_LOADING");
  });
});
