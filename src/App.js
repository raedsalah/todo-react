import React, { Component } from "react";
import Todos from "./Todos";
import AddForm from "./AddForm";

class App extends Component {
  state = {
    todos: []
  };

  addTask = task => {
    // possible id duplication
    task.id = Math.random();

    let todos = [...this.state.todos, task];

    this.setState({ todos });
  };

  deleteTask = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });

    this.setState({
      todos
    });
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Tasks</h1>
        <Todos todos={this.state.todos} deleteTask={this.deleteTask} />
        <AddForm addTask={this.addTask} />
      </div>
    );
  }
}

export default App;
