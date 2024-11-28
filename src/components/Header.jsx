import React from 'react'

const Header = (props) => {
    const { todos } = props
    const openTasks = todos.filter((value) => !value.complete)

    return (
        <header className="Header">
            <h1 className="text-gradient">
                You have {openTasks.length} open{' '}
                {openTasks.length > 1 ? 'tasks' : 'task'}
            </h1>
        </header>
    )
}

export default Header
