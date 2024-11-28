import './App.css'
import Header from './components/Header.jsx'
import Tabs from './components/Tabs.jsx'
import TodoList from './components/TodoList.jsx'
import TodoInput from './components/TodoInput.jsx'
import { useState } from 'react'

function App() {
    const [todos, setTodos] = useState([
        {
            input: 'Add task',
            completed: true,
        },
    ])

    const handleAddTodo = (newTodo) => {
        setTodos([
            ...todos,
            {
                input: newTodo,
                completed: false,
            },
        ])
    }

    const handleCompleteTodo = (index) => {
        let newTodoList = []
    }

    const handleDeleteTodo = (index) => {
        let newTodoList = todos.filter((value, i) => {
            return i !== index
        })
        setTodos(newTodoList)
    }

    const [selectedTab, setSelectedTab] = useState('Open')

    return (
        <>
            <Header todos={todos} />
            <Tabs
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
                todos={todos}
            />
            <TodoList
                todos={todos}
                selectedTab={selectedTab}
                handleDeleteTodo={handleDeleteTodo}
            />
            <TodoInput handleAddTodo={handleAddTodo} />
        </>
    )
}

export default App
