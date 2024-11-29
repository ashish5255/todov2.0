import './App.css'
import Header from './components/Header.jsx'
import Tabs from './components/Tabs.jsx'
import TodoList from './components/TodoList.jsx'
import TodoInput from './components/TodoInput.jsx'
import { useEffect, useState } from 'react'

function App() {
    const [todos, setTodos] = useState([])

    const handleAddTodo = (newTodo) => {
        let newTodoList = [
            ...todos,
            {
                input: newTodo,
                completed: false,
            },
        ]
        setTodos(newTodoList)
        handleSavedData(newTodoList)
    }

    const handleCompletedTodo = (index) => {
        let newTodoList = [...todos]
        let completedTodo = todos[index]
        completedTodo['completed'] = true
        newTodoList[index] = completedTodo
        setTodos(newTodoList)
        handleSavedData(newTodoList)
    }

    const handleDeleteTodo = (index) => {
        let newTodoList = todos.filter((value, i) => {
            return i !== index
        })
        setTodos(newTodoList)
        handleSavedData(newTodoList)
    }

    const [selectedTab, setSelectedTab] = useState('Open')

    // function to save todos
    const handleSavedData = (currTodos) => {
        localStorage.setItem('todo-app', JSON.stringify({ todos: currTodos }))
    }

    useEffect(() => {
        // Check if the localStorage key exists
        const storedData = localStorage.getItem('todo-app')
        if (storedData) {
            // Parse the stored JSON and set the todos state
            const db = JSON.parse(storedData)
            if (db.todos) {
                setTodos(db.todos)
            }
        }
    }, [])

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
                handleCompletedTodo={handleCompletedTodo}
            />
            <TodoInput handleAddTodo={handleAddTodo} />
        </>
    )
}

export default App
