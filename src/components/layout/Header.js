import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header style={headerStyle}>
            <h1>To Do List</h1>
            <Link style={linkStyle} to="/">Home</Link> | 
            <Link style={linkStyle} to="/about"> About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#444444',
    color: '#ffffff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    background: '#444444',
    color: '#ffffff',
    textDecoration: 'none'
}