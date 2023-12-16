import React, { useState } from 'react'
import { ToDoForm } from './ToDoForm'
import { v4 as uuidv4 } from 'uuid';

export const ToDoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newToDo = {
      id: uuidv4(), 
      task: todo, 
      completed: false, 
      isEditing: false
    }
    setTodos([...todos, newToDo]);
  }
  return (
    <div className='TodoWrapper'>
      <ToDoForm></ToDoForm>
    </div>
  )
}
