import React from 'react'
import { useState } from 'react'

export const EditToDoForm = ({editTodo, task}) => {
  const [value, setValue] = useState(task.task);

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) =>{
    e.preventDefault(); 
    editTodo(value, task.id);
    setValue(""); 
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type='text'
      value={value} 
      className='todo-input' 
      placeholder='Update task'
      onChange={handleChange}></input>
      <button type='submit' className='todo-btn'>Update</button>
    </form>
  )
}
