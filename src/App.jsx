import { useState } from "react";
import { connect } from "react-redux";

import TodoItem from "./components/TodoItem";
import { addTodo } from "./redux/actions";

const App = ({todos,addTodo}) => {
  const [inputValue, setInputValue] = useState("");

  const onAdd = () => {
    if(inputValue !== ""){
      addTodo(inputValue)
      setInputValue("")
    }
  }

  const sortTodos = todos => todos.sort((a,b)=>{
    if(a.done && !b.done) return 1
    if(!a.done && b.done) return -1
    return 0
  })

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

        {todos?.length > 0 && sortTodos(todos).map((t) => (
          <TodoItem data={t} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({todos}) => {
  return {todos}
}

const mapDispatchToProps = {
  addTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(App)