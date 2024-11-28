import React, { useState } from 'react'
import plusIcon from '../assets/plusIcon.svg'

const TodoInput = (props) => {
    const { handleAddTodo } = props

    const [inputValue, setInputValue] = React.useState('')

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && inputValue.trim() !== '') {
            handleAddTodo(inputValue)
            setInputValue('')
        }
    }
    return (
        <div className="input-container">
            <input
                value={inputValue}
                placeholder="Add Tasks"
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button
                className={'plus-icon'}
                onClick={() => {
                    if (!inputValue) {
                        return
                    }
                    handleAddTodo(inputValue)
                    //     To clear the field after adding input
                    setInputValue('')
                }}
            >
                <img src={plusIcon} alt="plus-icon" />
            </button>
        </div>
    )
}

export default TodoInput
