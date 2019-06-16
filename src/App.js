import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
import './App.css';

class App extends Component {
    state = {
      todos: [
      {
        id: uuid.v4(),
        title: 'Task 1',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Task 2',
        completed: false
      },
      {
        id: uuid.v4(),
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

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(), // this.state.todos.length + 1
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
      return (
        <div className="App">
          <div className="container">
            <Header />
            <AddTodo addTodo={this.addTodo} />
            <Todos todos={this.state.todos} makeComplete={this.makeComplete} 
            deleteTask={this.deleteTask} />
          </div>
        </div>
      );
    }
}

export default App;
