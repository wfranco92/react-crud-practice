import React from 'react'

const Search = (props) => {


    const changeValue = (e) => {

        props.setsearchUser(e.target.value)
    }

    return (
        <div class="input-group rounded">
            <input type="search" class="form-control rounded" placeholder="Search User By Name. . ." aria-label="Search" aria-describedby="search-addon" 
                value={props.searchUser}
                onChange={changeValue}
            />
            <span class="input-group-text border-0" id="search-addon">
                <i class="fas fa-search">🍳 </i>
            </span>
        </div>
    );
}

export default Search;
