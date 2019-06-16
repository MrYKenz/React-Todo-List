import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import './App.css';

class App extends Component {
    state = {
      todos: [
      {
        id: 1,
        title: 'Task 1',
        completed: false
      },
      {
        id: 2,
        title: 'Task 2',
        completed: false
      },
      {
        id: 3,
        title: 'Task 3',
        completed: false
      },
    ]
  }
  
  makeComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) { // if id matches one checked
        todo.completed = !todo.completed
      }
      return todo; }) 
    });
  }

  deleteTask = (id) => {
    this.setState({ todos: [...this.state.todos.filter(
      todo => todo.id !== id)] });
  }

  render() {
      return (
        <div className="App">
          <Header />
          <AddTodo />
          <Todos todos={this.state.todos} makeComplete={this.makeComplete} 
          deleteTask={this.deleteTask} />
        </div>
      );
    }
}

export default App;
