import React from "react";

const Todos = ({ todos, deleteTask }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          {todo.content}
          <i
            className="red-text fas fa-trash-alt"
            onClick={() => {
              deleteTask(todo.id);
            }}
          ></i>
        </div>
      );
    })
  ) : (
    <p className="center">No More tasks in your list</p>
  );

  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
