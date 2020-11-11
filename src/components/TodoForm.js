import React, { useState, useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import { Context } from './contexts/Context'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faPlus } from "@fortawesome/free-solid-svg-icons"

function TodoForm({ addTodo }) {
  const AppContext = useContext(Context)
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false
  });

  function handleTaskInputChange(e) {
    // e.target.value contains new input from onChange
    // event for input elements
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault(); // prevents browser refresh
    // trim() gets rid of string whitespace
    if (todo.task.trim()) {
      addTodo({ ...todo, id: Math.random() });
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <form className="todo-form card-header" onSubmit={handleSubmit} style={{ display: "flex",   flexDirection: 'row',   justifyContent: 'center'  }}>
      <TextField
        label="Task"
        type="text"
        name="task"
        value={todo.task}
        onChange={handleTaskInputChange}
      />
      <Button type="submit" className={`text-${AppContext.bg === "dark" ? "white" : "dark"} p-2  `}>
        <FontAwesomeIcon title='Add' icon={faPlus} variant='primary' /> 
      </Button>
    </form>
  );
}

export default TodoForm;
