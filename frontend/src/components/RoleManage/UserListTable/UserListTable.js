// UserListTable.js
import React from "react";
import SearchBar from "../SearchBar/SeachBar"; // Replace with the actual path
import styles from "./UserListTable.module.css"; // Replace with the actual path

const UserListTable = ({ users, onSearch,onReset }) => {
  console.log(users)
  return (
    <div className={styles.userListTable}>
      <h2>User List</h2>
      <SearchBar onSearch={onSearch} onReset={onReset} />
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserListTable;
