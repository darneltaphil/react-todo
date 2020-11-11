import React, { useContext } from "react";
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Context } from './contexts/Context'

function Todo({ todo, toggleComplete, removeTodo }) {
  const AppContext = useContext(Context)

  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <ListItem style={{ display: "flex" }}>
      <Checkbox 
          checked={todo.completed} 
          onClick={handleCheckboxClick}  
          className={`text-${AppContext.bg === "dark" ? "light" : ""}  `}
           />
      <Typography
        variant="body1"
        style={{
          textDecoration: todo.completed ? "line-through" : null
        }}
      >
        {todo.task}
      </Typography>
      <IconButton onClick={handleRemoveClick}>
        <CloseIcon  className={`text-${AppContext.bg === "dark" ? "secondary" : "dark"}  `}/>
      </IconButton>
    </ListItem>
  );
}

export default Todo;
