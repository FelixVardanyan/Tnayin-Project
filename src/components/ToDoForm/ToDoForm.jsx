import { useState } from "react";

function ToDoForm({addTask}){
    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
                handleSubmit(e)
        }
    }
    return (
        <form onSubmit={handleSubmit} >
                <input
                value={userInput}
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="Enter a  task"
                className="p-1 border-1 rounded-full space-x-2 flex mb-2 w-full"    
                />
                <button className="border-1 rounded-full p-1 bg-purple-600 text-white mb-2">Add Task</button>
        </form>
    )
}
export default ToDoForm