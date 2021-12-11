import React,{useState,useEffect} from 'react';
import './app.css'
import 'bootswatch/dist/sketchy/bootstrap.min.css'
import Search from "../components/search/search";
import Header from "../components/header/header";
import Todolist from "../components/todolist/todolist";
import Addtodo from "../components/addtodo/addtodo";

const App = () => {
    const [todos,setTodos] = useState([]);
    const [inputText,setInputText] = useState('');
    const [status,setStatus] = useState('all');
    const [search, setSearch] = useState('');

    useEffect(() => {
        setTodos(JSON.parse(localStorage.getItem('todos')))
    },[])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    },[todos])

    return (
        <div className='app'>
            <div className='app-container'>
                <Header/>
                <Search setSearch={setSearch} setStatus={setStatus}/>
                {todos.length === 0 && status === 'all' ? <p>Здесь будут ваши задания</p>
                    : todos.filter((el) => {
                        return el.isActive
                    }).length === 0  && status === 'active' ? <p>Здесь будут ваши активные задания </p>
                        : todos.filter((el) => {
                            return !el.isActive
                        }).length === 0  && status === 'done' ? <p>здесь будут ваши выполненные задания</p>
                            : <Todolist  search={search} status={status} setTodos={setTodos} todos={todos}/>
                }
                <Addtodo  todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
            </div>
        </div>
    );
};

export default App;