import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { faTrash } from "@fortawesome/free-solid-svg-icons" //react automatically import these from fortawesome

import PropTypes from 'prop-types';

ToDo.propTypes = {
  todo: PropTypes.object,
  toggleComplete: PropTypes.func,
  deleteTodo: PropTypes.func,
  editTodo: PropTypes.func,
}

export const ToDo = ({todo, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='Todo'>
      <p 
      onClick={()=> toggleComplete(todo.id)}
      className={`${todo.completed ? 'completed' : ""}`}>{todo.task}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare}
        onClick={() => editTodo(todo.id)}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faTrash}
        onClick={() => deleteTodo(todo.id)}></FontAwesomeIcon>
      </div>
    </div>
  )
  //FontAwesomeIcon is a React component that we imported and renders the icon that we give it
  //we update the class of p dependingon whether todo is completed
  //add an event function to onClick that only occurs when it is clicked
}
