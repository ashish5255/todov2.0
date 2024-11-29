import React from 'react'
import TodoCard from './TodoCard.jsx'

const TodoList = ({
    todos,
    selectedTab,
    handleDeleteTodo,
    handleCompletedTodo,
}) => {
    const tab = 'Open'
    const [tabSelector, setTabSelector] = React.useState('All')

    const filteredTodoList =
        selectedTab === 'All'
            ? todos
            : selectedTab === 'Completed'
              ? todos.filter((val) => val.completed)
              : todos.filter((val) => !val.completed)
    return (
        <div>
            {filteredTodoList.map((todo, index) => {
                return (
                    <TodoCard
                        key={index}
                        todo={todo}
                        index={index}
                        handleDeleteTodo={handleDeleteTodo}
                        handleCompletedTodo={handleCompletedTodo}
                    />
                )
            })}
        </div>
    )
}

export default TodoList
