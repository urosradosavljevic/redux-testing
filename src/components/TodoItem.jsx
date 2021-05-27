import React from 'react'
import { connect } from 'react-redux'

import { toggleTodo, removeTodo } from "../redux/actions";


 const TodoItem = ({ data, toggleTodo, removeTodo }) => {
    const { id, value, done } = data
    
    return (
        <div className="todo-list-item" key={id}>
        {done ? (
          <span className="flex justify-center w-8">✓</span>
        ) : (
          <span className="w-8" />
        )}

        <span
          className={`item-text	 ${done ? "done" : ""}`}
          onClick={() => toggleTodo(id)}
        >
          {value}{" "}
        </span>

        <button className="btn ml-auto" onClick={() => removeTodo(id)}>
          x
        </button>
      </div>
    )
}

const mapDispatchToProps = {
    toggleTodo,
    removeTodo
}

export default connect(null, mapDispatchToProps)(TodoItem)