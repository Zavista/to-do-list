import React from 'react'
import { useState } from 'react'

export const ToDoForm = ({addTodo}) => { //note addTodo is sent down by ToDoWrapper. Also {addTodo} is a different way of writing props.addTodo
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) =>{
    e.preventDefault(); //prevents the page from reloading after form submission.
    addTodo(value); //adds value into todos from ToDoWrapper
    setValue(""); //resets the value
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type='text'
      value={value} 
      className='todo-input' 
      placeholder='What is the task today>'
      onChange={handleChange}></input>
      <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
