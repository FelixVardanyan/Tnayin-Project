function ToDo({ todo, toggleTask, removeTask, changeTask}) {
    return (

        <div className="flex justify-between items-center bg-gray-100 px-3 py-2 rounded-md shadow-sm">
            <span>{todo.task}</span>
            <div className="space-x-2">
                <button onClick={() => changeTask()} className="bg-purple-600 text-white px-3 py-1 rounded-md hover:bg-purple-700">
                    Edit
                </button>
                <button onClick={() => removeTask(todo.id)} className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">
                    Delete
                </button>
            </div>
        </div>
    )
}
export default ToDo