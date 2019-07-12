import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        title: ''
    }

    // send title to addTodo in App.js to create new todo in App.js State
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:''}); // reset value so one todo created each time
    }

    onChange = (e) => this.setState({title: e.target.value}); // [e.target.name] to grab values of other fields

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input
                    type="text"
                    name="title" // used by onChange to get value to change state
                    style={{flex: '10', padding: '5px'}}
                    placeholder="Add a task... "
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{flex: '1'}}
                />
            </form>
        )
    }
}

// Proptypes for strict typing in React
AddTodo.propTypes = {
    addTodo: PropTypes.array.isRequired,
    makeComplete: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
}

export default AddTodo
