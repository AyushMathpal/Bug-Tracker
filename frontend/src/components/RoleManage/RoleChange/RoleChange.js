// ManageRoles.js
import React, { useState, useEffect } from "react";
import styles from "./RoleChange.module.css";

const RoleChange = ({users,handleRoleChange}) => {
  // Mock data for demonstration, replace with actual data fetching
  

  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedRole, setSelectedRole] = useState("");
  const [roles] = useState(["New User", "Old User", "Admin"]); // Replace with actual roles

  useEffect(() => {
    // Fetch users and their roles from the server
    // Replace this with your actual API call
    // Example API call using fetch:
    // fetch('api/users')
    //   .then(response => response.json())
    //   .then(data => setUsers(data));
  }, []); // The empty dependency array ensures the effect runs only once, like componentDidMount

  

  const handleAssignRole = () => {
    if (selectedUserId !== null && selectedRole !== "") {
      handleRoleChange(selectedUserId, selectedRole);
      // Clear the selected user and role after assignment
      setSelectedUserId(null);
      setSelectedRole("");
      // You may choose to reload the users from the server after the assignment
      // Fetch users and their roles from the server
      // Replace this with your actual API call
    }
  };

  return (
    <div className={styles.manageRoles}>
      <h2>Manage Roles</h2>
      <div className={styles.tableContainer}>
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Role</th>
              <th>Assign Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>
                  <select
                    value={selectedUserId === user.id ? selectedRole : ""}
                    onChange={(e) => {
                      setSelectedUserId(user.id);
                      setSelectedRole(e.target.value);
                    }}
                  >
                    <option value="" disabled>
                      Select Role
                    </option>
                    {roles.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={handleAssignRole}>Assign Role</button>
    </div>
  );
};

export default RoleChange;
