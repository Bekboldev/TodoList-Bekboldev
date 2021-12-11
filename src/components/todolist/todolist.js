import React from 'react';
import './todolist.css'
import Todo from "../todo/todo";

const Todolist = ({todos,setTodos,status , search}) => {
    return (
        <ul className='todolist'>
            {todos.filter((el) => {
                switch (status) {
                    case 'active': {return el.isActive}
                    case 'done': {return !el.isActive}

                    default: return el
                }
            }).filter((el) => {
                return el.todoName.includes(search)
            })
                .map((el)=>{
                    return <Todo todoObj={el} setTodos={setTodos}   todos={todos}/>
                })}

        </ul>

    );
};

export default Todolist;