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

  const toggleComplete = (id) =>{
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    //basically if the id matches, we return a new todo where everything is the same (hence the ...todo)
    //except we flip the completed (from false -> true or vice versa)
    
    //This means that if our completed was true, when we click our todo, we set it to false, and then we remove the class from it
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
    //basically we filter any todo with the same id as id, everything else, is not filtered
  }
  return (
    <div className='TodoWrapper'>
      <h1>To-Do List</h1>
      <ToDoForm addTodo={addTodo} />
      {todos.map((todo) => (
        <ToDo todo={todo} key={todo.id} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
      ))}
    </div>
  )
  //addTodo={addTodo} sends down the function to the TodoForm (which is the child of TodoWrapper)
  //map each todo in todos and create a ToDo. key is for React rendering. 
}
