import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { id } from 'postcss-selector-parser';

export class TodoItem extends Component {
    getStyle = () => {
        return {
                backgroundColor: '#f7faff',
                padding: '10px',
                borderBottom: '1px #ccc solid',
                textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    
    render() {
        return ( 
            <div style={this.getStyle()}>
                <p>
                <input type="checkbox" onChange={this.props.makeComplete.bind(this, this.props.todo.id)} />
                {' '} {this.props.todo.title}
                <button onClick={this.props.deleteTask.bind(this, this.props.todo.id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

// Proptypes for strict typing in React
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    makeComplete: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired
}

const btnStyle = {
    backgroundColor: '#ff5b5b',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    padding: '4px 9px',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
