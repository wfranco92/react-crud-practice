import React from 'react'

const Search = (props) => {


    const changeValue = (e)=>{

        props.setsearchUser(e.target.value)
    }

    return (
        <div>
            <input type="text"
            placeholder='Search User By Name. . .'
            value={props.searchUser}
            onChange={changeValue}
            />
            <span>🍳</span>
        </div>

    );
}

export default Search;
