import React from 'react'

const UserTable = (props) => {

    return (

        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.children}
                </tbody>
            </table >
        </div>

    );
}

export default UserTable;