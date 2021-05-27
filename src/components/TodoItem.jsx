import React from 'react'

export const TodoItem = ({data,onToggle,onRemove}) => {
    const {id,value,done} = data
    return (
        <div className="todo-list-item" key={id}>
        {done ? (
          <span className="flex justify-center w-8">✓</span>
        ) : (
          <span className="w-8" />
        )}

        <span
          className={`item-text	 ${done ? "done" : ""}`}
          onClick={() => onToggle(id)}
        >
          {value}{" "}
        </span>

        <button className="btn ml-auto" onClick={() => onRemove(id)}>
          x
        </button>
      </div>
    )
}
