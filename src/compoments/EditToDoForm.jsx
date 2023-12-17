import { useState } from 'react'

import PropTypes from 'prop-types';

EditToDoForm.propTypes = {
  todo: PropTypes.object,
  editTask: PropTypes.func,
}


export const EditToDoForm = ({editTask, todo}) => {
  const [value, setValue] = useState(todo.task);

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) =>{
    e.preventDefault(); 
    editTask(value, todo.id);
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
