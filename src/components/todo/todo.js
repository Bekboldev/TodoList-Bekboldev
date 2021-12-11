import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/fontawesome'
import './todo.css'

const Todo = ({ todoObj, todos,setTodos}) => {
    const deleteTodo = ()=>{
        setTodos(todos.filter((el)=>{
            return el.id !== todoObj.id
        }))
    };

    const doneTodo = ()=>{
        setTodos(todos.map((el)=>{
            return el.id === todoObj.id ? {...el, isActive: !el.isActive }:el
        }))
    };

    const importantTodo = ()=>{
        setTodos(todos.map((el)=>{
            return el.id === todoObj.id ? {...el, isImportant: !el.isImportant }:el
        }))
    };

    return (
        <div>
            <li className='todolist-task'>
                <p contentEditable={true} suppressContentEditableWarning={true} className={`todolist-name ${todoObj.isActive ? 'active' : 'done'} ${todoObj.isImportant ? 'important' : ''}`}>{todoObj.todoName}</p>
            </li>
            <div className='todolist-btns'>
                <button   className="btn btn-dark" onClick={doneTodo}><i class="fas fa-check-circle"></i></button>
                <button   className="btn btn-warning" onClick={importantTodo}><i className="fas fa-exclamation"></i></button>
                <button   className="btn btn-danger" onClick={deleteTodo}><i className="fas fa-trash"></i></button>
            </div>
        </div>
    );
};

export default Todo;