import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
     return this.props.todos.map((todo) => (
         <TodoItem key={todo.id} todo={todo} makeComplete={this.props.makeComplete} 
         deleteTask={this.props.deleteTask} />
     ));
   }    
}

// Proptypes for strict typing in React
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    makeComplete: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired
}

export default Todos;
