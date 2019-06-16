import React from 'react'

export default function Header() {
    return (
        <header style={headerStyle}>
            <h1>To Do List</h1>
        </header>
    )
}

const headerStyle = {
    background: '#444444',
    color: '#ffffff',
    textAlign: 'center',
    padding: '10px'
}
