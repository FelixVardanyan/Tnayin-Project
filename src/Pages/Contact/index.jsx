import InpBut from "../../components/InputButton/InpButton";
import ToDo from "../../components/ToDo/ToDo"

import React, {useState} from "react"
import ToDoForm from "../../components/ToDoForm/ToDoForm";


export default function Contact() {

  const [todos, setTodos] = useState([])

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput
      }
      setTodos([...todos, newItem])
      console.log(newItem);
    }
  }
  console.log(todos);

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
    console.log(todos);
    
  }

  const changeTask = (id) =>{
    setTodos([...todos.splice((1))])
    console.log("ASFADKSFM");
    
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-4">TO DO List</h1>
        <ToDoForm addTask={addTask}/>
        <div className="space-y-2">
          {todos.map((todo) => {
            return (
              <ToDo
              todo={todo}
              key={todo.id}
              removeTask={removeTask}
              changeTask={changeTask}
              />
            )
          })}


        </div>
      </div>
    </div>
  );
}