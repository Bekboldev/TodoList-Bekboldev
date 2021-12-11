import React from 'react';
import './search.css'

const Search = ({setStatus, setSearch}) => {

    const statusHandler = (e) => {
        setStatus(e.target.value)
    };

    const searchHandler = (e) => {
        setSearch(e.target.value)
    };


    return (
        <div className='search'>
            <input  onChange={searchHandler} type="text" placeholder='search todo' className='search-input'/>
            <div className='search-btns'>
                <button className='search-btn btn btn-warning'  value='all' type='button'  onClick={statusHandler}>All</button>
                <button className='search-btn btn btn-success' value='active' type='button'  onClick={statusHandler}>Active</button>
                <button type="button" value='done' className="btn btn-info"  onClick={statusHandler}>Done</button>
            </div>
        </div>
    );
};

export default Search;