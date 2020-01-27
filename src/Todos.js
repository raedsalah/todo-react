import React from "react";

const Todos = ({ todos, deleteTask }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span
            onClick={() => {
              deleteTask(todo.id);
            }}
          >
            {todo.content}
          </span>
        </div>
      );
    })
  ) : (
    <p className="center">No More tasks in your list</p>
  );

  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
