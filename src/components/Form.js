import React from "react";
import { v4 as uuid } from 'uuid';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons';

const Form = ({inputText, setInputText, todos, setTodos, setStatus}) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    let unique_id = uuid();
    const submitToDoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: unique_id}
        ])
        setInputText('');
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    };

    return (
    <form>
      <input onChange={inputTextHandler} value={inputText} type="text" className="todo-input" placeholder="Add something new..." />
      <button onClick={submitToDoHandler} className="todo-button" type="submit">
        <FontAwesomeIcon icon={faPlusSquare} />
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="active">Active</option>
        </select>
      </div>
    </form>
    );
}

export default Form;