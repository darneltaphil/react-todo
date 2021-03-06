import React, { useEffect, useState, useContext } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Typography from "@material-ui/core/Typography";
import { Context} from "./components/contexts/Context"
import ThemeSwitcher from "./components/ThemeSwitcher";
const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
  const [todos, setTodos] = useState([]); 
  
  const AppContext = useContext(Context);
  const [bg, setBg] = useState(AppContext.bg);
  const [color, setColor] = useState(AppContext.color);

  const ChangeBackground =(param) => {
    param === "dark" ? setBg('light') : setBg('dark');
  }
  const changeColor =(param) => {
    param === "white" ? setColor('dark') : setColor('white');
  }

  useEffect(() => {
    // fires when app component mounts to the DOM
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);
  
  useEffect(() => {
    // fires when todos array gets updated
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    // adds new todo to beginning of todos array
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => { 
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
            return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <Context.Provider
                      value={{
                    bg : bg,
                    color : color,
                    settingBg: ChangeBackground ,
                    settingColor: changeColor 
                    }} 
                    >
                     
        <div className={`App bg-${bg} text-${color}`}>
       <div className='container col-lg-4 '>
      <ThemeSwitcher  />
          <div className='bg-success p-3 card text-white'>
          <Typography style={{ padding: 0 }} variant="caption">
            This app was built as part of the <br/>fulfilment of conditions to be <br/>considered for the Soronko Mentorship position<br/>
            <em>Kofi Arnold Akpadji</em>
          </Typography>
          </div>
          <Typography style={{ padding: 16 }} variant="h1">
            ToDo List
          </Typography>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleComplete={toggleComplete}
          />
        </div>
        </div>
    </Context.Provider>
  );
}

export default App;
