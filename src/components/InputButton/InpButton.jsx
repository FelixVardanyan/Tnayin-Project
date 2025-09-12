export default function InpBut() {
    return (
        <div className="flex mb-4">
            <input
                type="text"
                placeholder="Enter a task"
                className="border rounded-l-md px-3 py-2 w-full"
            />
            <button className="bg-purple-600 text-white px-4 rounded-r-md hover:bg-purple-700">
                Add
            </button>
        </div>
    )
}