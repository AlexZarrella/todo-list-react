import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import TodoInput from "./components/todoInput";
import TodoItem from "./components/todoItem";

class App extends Component {
  state = {
    todos: [
      { id: 0, text: "Make dinner tonight" },
      { id: 1, text: "Fold the laundry" },
      { id: 2, text: "Learn to make a React application" }
    ],
    nextId: 3
  };

  addTodo(todoText) {
    console.log("todo added; ", todoText);
  }

  removeTodo(id) {
    console.log("removed: ", id);
  }

  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <Header />
          <TodoInput todoText="" addTodo={this.addTodo} />
          <ul>
            {this.state.todos.map(todo => {
              return (
                <TodoItem
                  todo={todo}
                  key={todo.id}
                  id={todo.id}
                  removeTodo={this.removeTodo}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
