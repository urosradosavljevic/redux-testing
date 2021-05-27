import { useState } from "react";
import { TodoItem } from "./components/TodoItem";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const [todos, setTodos] = useState([
    { id: 0, value: "Take the dog out", done: false },
    { id: 1, value: "Get groseries", done: true },
  ]);

  const onAdd = () =>
    inputValue !== "" &&
    setTodos((old) => [
      ...old,
      {
        id: Math.max(...old.map((i) => i.id)) + 1,
        value: inputValue,
        done: false,
      },
    ]);

  const toggleTodo = (id) => {
    setTodos((old) =>
      old.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            done: !item.done,
          };
        }
        return item;
      })
    );
  };
  
  const sortTodos = todos => todos.sort((a,b)=>{
    if(a.done && !b.done) return 1
    if(!a.done && b.done) return -1
    return 0
  })

  const removeTodo = (id) => setTodos((old) => old.filter((i) => id !== i.id));

  return (
    <div className="container mx-auto mt-10">
      <div className="bg-gray-100 rounded-xl p-8 w-1/2 mx-auto">
        <h2 className="text-3xl p-2">Todo list</h2>

        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="input"
          type="text"
        />

        <button className="btn" onClick={onAdd}>
          Add task
        </button>

        <hr className="py-2 my-2" />

        {sortTodos(todos).map((t) => (
          <TodoItem data={t} onToggle={toggleTodo} onRemove={removeTodo} />
        ))}
      </div>
    </div>
  );
};

export default App;
