import React, { Component } from "react";
import "./todoInput.css";

class TodoInput extends Component {
  state = {
    value: "test"
  };

  handleChange(e) {
    console.log("change here");
  }

  addTodo(todo) {
    console.log("todo: ", todo);
  }

  render() {
    return (
      <div>
        <input type="text" value="" onChange={this.handleChange} />
        <button
          className="btn btn-primary"
          onClick={() => this.addTodo(this.state.value)}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default TodoInput;
