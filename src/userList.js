import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [filterTerm, setFilterTerm] = useState('');

  useEffect(() => {
    fetch('(localhost:3001)')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);
const handleFilterChange = (event) => {
    setFilterTerm(event.target.value);
  };

  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(filterTerm.toLowerCase());
  });

  return (
    <div>
      <input
        type="text"
        value={filterTerm}
        onChange={handleFilterChange}
        placeholder="Filter by name"
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={('localhost:3001')}>
            <span>{user.name}</span>
            <span>{user.email}</span>
            <span>{user.age}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
