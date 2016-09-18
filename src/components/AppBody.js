import React, { Component } from 'react';
import TodoList from './Todolist.js';

class AppBody extends Component {
  render() {
    return (
        <div className="App-body">
          <h1>TODO-LIST</h1>
          <h3> What do you want to do? <br /> </h3> 
          <h4> Add some cards by entering a todo item below. </h4>
          <TodoList />
        </div>
        );
  }
}

export default AppBody;