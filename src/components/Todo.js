import React, {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck, faCircleNotch, faEdit, faTrashCan, faXmark, faSave} from '@fortawesome/free-solid-svg-icons';



const Todo = ({text,todo,todos,setTodos}) => {
    const [editedTodo, setEditedTodo] = useState("");

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

    const editHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...item, inEditMode: !item.inEditMode
                };
            }
            return {
                ...item, inEditMode: false
            };
        }))
        setEditedTodo(text);
    };

    const setEditInputHandler = (e) => {
        setEditedTodo(e.target.value);
    };

    const editInputHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...item, text: editedTodo, inEditMode: !item.inEditMode
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
            <span onClick={completeHandler} className={`todo-item ${todo.completed ? 'completed' : ''} ${todo.inEditMode ? 'hidden' : ''}`}>{text}</span>
            <input onChange={setEditInputHandler} value={editedTodo} type="text" className={`todo-input-edit ${todo.inEditMode ? '' : 'hidden'}`} />
            <button className="save-btn">
                <FontAwesomeIcon onClick={editInputHandler} className={`${todo.inEditMode ? '' : 'hidden'}`} icon={faSave} />
            </button>
            <button onClick={editHandler} className="edit-btn">
                <FontAwesomeIcon className={`${todo.inEditMode ? 'hidden' : ''}`} icon={faEdit} />
                <FontAwesomeIcon className={`exit-btn ${todo.inEditMode ? '' : 'hidden'}`} icon={faXmark} />
            </button>
            <button onClick={deleteHandler} className={`trash-btn ${todo.inEditMode ? 'hidden' : ''}`} ><FontAwesomeIcon icon={faTrashCan} /></button>
        </div>
    );
}

export default Todo;