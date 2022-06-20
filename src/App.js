import React, {useState, useEffect} from 'react';
import './style/App.css';
//Importing components
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {

  const loadedTodos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState(loadedTodos);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'active':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem('todos',JSON.stringify(todos));
  };

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form setInputText={setInputText} inputText={inputText} todos={todos} setTodos={setTodos} setStatus={setStatus}/>
      <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
