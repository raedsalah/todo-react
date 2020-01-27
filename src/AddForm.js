import React, { Component } from "react";

class AddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };

    this.taskInput = React.createRef();
  }

  changeHandler = e => {
    this.setState({
      content: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.addTask(this.state);
    this.setState({
      content: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            name="task"
            type="text"
            placeholder="Task"
            onChange={this.changeHandler}
            ref={this.taskInput}
            value={this.state.content}
          />
        </form>
      </div>
    );
  }
}

export default AddForm;
