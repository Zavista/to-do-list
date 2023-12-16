import React from 'react'
import { useState } from 'react'

export const ToDoForm = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) =>{
    e.preventDefault(); //prevents the page from reloading after form submission.
    console.log(value); //from the State value
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type='text' 
      className='todo-input' 
      placeholder='What is the task today>'
      onChange={handleChange}></input>
      <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
