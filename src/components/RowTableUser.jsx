import React from 'react'

const RowTableUser = (props) => {
    return (
            <tr key={props.usersKey}>
                <td>{props.usersName}</td>
                <td>{props.usersNickname}</td>
                <td>
                    <button
                        onClick={() => props.editRow(props.user)}
                    >Edit</button>
                    <button
                        onClick={() => props.deleteUser(props.usersKey)}
                    >Delete</button>
                </td>
            </tr>
    );
}

export default RowTableUser;