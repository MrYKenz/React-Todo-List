import React, { Component } from 'react';
import Todos from './components/Todos';
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

  render() {
      return (
        <div className="App">
          <Todos todos={this.state.todos} />
        </div>
      );
    }
}

export default App;
