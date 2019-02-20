import React, { Component } from 'react';
import TodoList from "./components/toDoList";
import todoLogo from "./assets/img/todos.png"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img alt="logo todos" className="todoLogo" src={todoLogo}></img>
        <TodoList />

      </div>
    );
  }
}

export default App;
