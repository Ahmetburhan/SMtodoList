import React, { Component } from 'react';
import TodoList from "./components/toDoList";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Stanford Tasklist</p>
        <TodoList />

      </div>
    );
  }
}

export default App;
