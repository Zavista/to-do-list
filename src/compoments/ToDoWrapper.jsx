import React, { useState } from 'react'
import { ToDoForm } from './ToDoForm'
import { v4 as uuidv4 } from 'uuid';
import { ToDo } from './ToDo';

export const ToDoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newToDo = {
      id: uuidv4(), 
      task: todo, 
      completed: false, 
      isEditing: false
    }
    setTodos([...todos, newToDo]); //add newToDo to todos
    console.log(todos);
  }
  return (
    <div className='TodoWrapper'>
      <ToDoForm addTodo={addTodo}></ToDoForm>
      {todos.map((todo) =>{
        <ToDo todo={todo} key={todo.id}></ToDo>
      })}
    </div>
  )
  //addTodo={addTodo} sends down the function to the TodoForm (which is the child of TodoWrapper)
}
