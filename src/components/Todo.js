import React, { useContext } from "react";
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
// import CloseIcon from "@material-ui/icons/Close";
import { Context } from './contexts/Context'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faTrashAlt } from "@fortawesome/free-solid-svg-icons"

function Todo({ todo, toggleComplete, removeTodo }) {
  const AppContext = useContext(Context)

  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <ListItem style={{ display: "flex"}}>
      <Checkbox 
          checked={todo.completed} 
          onClick={handleCheckboxClick}  
          className={`text-${AppContext.bg === "dark" ? "light" : ""}  `}
      />
      <div
        variant="p"
        style={{
          textDecoration: todo.completed ? "line-through" : null,
          width : '75%'
        }}
      >
        {todo.task}
      </div>
      <IconButton onClick={handleRemoveClick}>
        <FontAwesomeIcon icon={faTrashAlt}  className={`text-${AppContext.bg === "dark" ? "secondary" : "dark"}  `} />
        {/* <CloseIcon  className={`text-${AppContext.bg === "dark" ? "secondary" : "dark"}  `}/> */}
      </IconButton>
    </ListItem>
  );
}

export default Todo;
