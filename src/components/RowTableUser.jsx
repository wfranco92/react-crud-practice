import React from 'react'

const RowTableUser = (props) => {
    return (
        <tr key={props.usersKey}>
            <td>{props.usersName}</td>
            <td>{props.usersNickname}</td>
            <td>
                <button
                    type="submit" className="btn btn-primary"
                    onClick={() => props.editRow(props.user)}
                >Edit</button>
                <button
                    type="submit" className="btn btn-danger"
                    onClick={() => props.deleteUser(props.usersKey)}
                >Delete</button>
            </td>
        </tr>
    );
}

export default RowTableUser;