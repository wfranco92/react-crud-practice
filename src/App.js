import React, { useState } from 'react';
import UserTable from './components/UserTable';
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from './components/AddUserForm';

function App() {

  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  ]

  const [users, setUsers] = useState(usersData)

  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }
  const deleteUser = (idUser) =>{
    setUsers(users.filter(user => user.id !== idUser))
  }
  return (
    <div className="container">
      <h1>CRUD REACT PRACTICE</h1>
      <div>
        <h2> Add Users</h2>
        <AddUserForm addUser={addUser}/>
      </div>
      <div>
        <h2>View Users</h2>
        <UserTable users={users} deleteUser={deleteUser}/>
      </div>
    </div>
  );
}

export default App;
