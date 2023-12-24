import React, { useState } from 'react'
import RoleChange from './RoleChange/RoleChange'
import UserListTable from './UserListTable/UserListTable';

const RoleManage = () => {
    const [users, setUsers] = useState([
        { id: 1, name: "User1", role: "New User",username:"user1" ,email:"user1@gmail.com"},
        { id: 2, name: "User2", role: "Old User",username:"user2",email:"user2@gmail.com" },
        // ... add more users
      ]);
      const [filteredUsers, setFilteredUsers] = useState([...users]);
    const handleRoleChange = (userId, role) => {
        // Update the local state for the selected user
        const updatedUsers = users.map(user =>
          user.id === userId ? { ...user, role } : user
        );
        setUsers(updatedUsers);
        setFilteredUsers(updatedUsers);
    
        // Send a request to the server to update the user role
        // Replace this with your actual API call
        // Example API call using fetch:
        // fetch(`api/users/${userId}`, {
        //   method: 'PUT',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({ role }),
        // });
      };
      const handleSearch = searchTerm => {
        const filtered = users.filter(
          user =>
            user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.role.toLowerCase().includes(searchTerm.toLowerCase())
        );
    
        // Update the filtered users
        setFilteredUsers(filtered);
      };
      const handleReset = () => {
        setFilteredUsers([...users]);
      };
  return (
    <div>RoleManage
    <RoleChange users={users} onRoleChange={handleRoleChange}/>
    <UserListTable users={filteredUsers} onSearch={handleSearch} onReset={handleReset} />
    </div>
  )
}

export default RoleManage