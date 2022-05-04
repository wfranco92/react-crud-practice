import React, { useState } from 'react';
import UserTable from './components/UserTable';
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';
import Search from './components/Search';
import RowTableUser from './components/RowTableUser';


function App() {

  const [users, setUsers] = useState([]);
  const [searchUser, setsearchUser] = useState('');

  React.useEffect(() => {
    const listUsers = localStorage.getItem("usuarios");
    let parseListUsers;
    if (!listUsers) {
      localStorage.setItem("usuarios", JSON.stringify([]));
      parseListUsers = [];
    }
    else {
      parseListUsers = JSON.parse(listUsers);
    }

    setUsers(parseListUsers);
  }, []);

  const addUser = (user) => {
    user.id = uuidv4()
    const allUsers = [...users]
    allUsers.push(user)
    const userParJSON = JSON.stringify(allUsers);
    localStorage.setItem("usuarios", userParJSON);
    setUsers(allUsers);
  }

  const deleteUser = (idUser) => {
    const userIndex = users.findIndex(user => user.id === idUser);
    const newUsers = [...users];
    newUsers.splice(userIndex, 1);
    const userParJSON = JSON.stringify(newUsers);
    localStorage.setItem("usuarios", userParJSON);
    setUsers(newUsers);
  }

  const [editing, setEditing] = useState(false)
  const [currentUser, setCurrentUser] = useState({
    id: null, name: "", username: ""
  })

  const editRow = (user) => {
    setEditing(true)
    setCurrentUser({
      id: user.id, name: user.name, username: user.username
    })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    const newUsers = users.map(user => (user.id === id ? updatedUser : user));
    const userParseJSON = JSON.stringify(newUsers);
    localStorage.setItem("usuarios", userParseJSON);
    setUsers(newUsers)
  }

  let listSearchUser = [];

  if (!searchUser.length >= 1) {
    listSearchUser = users;
  } else {
    listSearchUser = users.filter(user => {
      const userText = user.name.toLowerCase();
      const searchUserName = searchUser.toLowerCase();
      return userText.includes(searchUserName);
    });
  }


  return (
    <div className="container">
      <h1>CRUD REACT PRACTICE</h1>
      <div>
        {
          editing ? (
            <div>
              <h2> Edit Users</h2>
              <EditUserForm
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>

          ) : (
            <div>
              <h2> Add Users</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )
        }
      </div>
      <div>
        <h2>View Users</h2>
        <Search
          searchUser={searchUser}
          setsearchUser={setsearchUser}
        />
        <UserTable>
          {listSearchUser.length > 0 ? listSearchUser.map(user => (
            <RowTableUser
              key={user.id}
              user={user}
              usersName={user.name}
              usersNickname={user.username}
              deleteUser={deleteUser}
              setEditing={setEditing}
              editRow={editRow}
            />
          ))
            : <></>
            }
        </UserTable>
      </div>
    </div>
  );
}

export default App;
