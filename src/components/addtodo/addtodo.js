import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/fontawesome'
import './addtodo.css'

const Addtodo = ({todos,setTodos,setInputText,inputText}) => {
    const addTodo = (e)=>{
        e.preventDefault();
        setTodos ([...todos,{
            todoName: inputText,
            isActive:true,
            isImportant:false,
            id:Math.floor(Math.random() *1000)

        }])
        setInputText('')
    };
    const inputHandler = (e)=>{
        setInputText(e.target.value)
    };
    return (
        <form action="" className='addtodo' onSubmit={addTodo}>
            <input required value={inputText} onChange={inputHandler}  type="text" placeholder='задание которые нужно выполнить' className='addtodo-input'/>
            <button  className="btn btn-info"  type='submit'>Add todo</button>
        </form>
    );
};

export default Addtodo;