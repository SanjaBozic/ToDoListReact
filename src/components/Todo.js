import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck, faCircleNotch, faXmark} from '@fortawesome/free-solid-svg-icons';

const Todo = ({text,todo,todos,setTodos}) => {
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    };
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                };
            }
            return item;
        }))
    };
    return(
        <div className="todo">
            <button onClick={completeHandler} className="complete-btn">
                <FontAwesomeIcon className={`complete-btn-checked ${todo.completed ? '' : 'hidden'}`} icon={faCheck} />
                <FontAwesomeIcon className={`complete-btn-unchecked ${todo.completed ? 'hidden' : ''}`} icon={faCircleNotch} />
            </button>
            <span onClick={completeHandler} className={`todo-item ${todo.completed ? 'completed' : ''}`}>{text}</span>
            <button onClick={deleteHandler} className="trash-btn"><FontAwesomeIcon icon={faXmark} /></button>
        </div>
    );
}

export default Todo;