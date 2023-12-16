import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { faTrash } from "@fortawesome/free-solid-svg-icons" //react automatically import these from fortawesome


export const ToDo = () => {
  return (
    <div className='Todo'>
      <p>Go to school</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
      </div>
    </div>
  )
  //FontAwesomeIcon is a React component that we imported and renders the icon that we give it
}
