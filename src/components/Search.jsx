import React from 'react'

const Search = (props) => {


    const changeValue = (e) => {

        props.setsearchUser(e.target.value)
    }

    return (
        <div className="input-group rounded">
            <input type="search" className="form-control rounded" placeholder="Search User By Name. . ." aria-label="Search" aria-describedby="search-addon" 
                value={props.searchUser}
                onChange={changeValue}
            />
            <span className="input-group-text border-0" id="search-addon">
                <i className="fas fa-search">🍳 </i>
            </span>
        </div>
    );
}

export default Search;
