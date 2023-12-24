// ProjectDashboard.js
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router
import styles from "./ProjectDashboard.module.css"; // Replace with the actual path
import Pagination from "./Pagination";

const ProjectDashboard = ({ proj }) => {
  const projects= [
    {
      projectId: 1,
      projectName: "Project A",
      projectDescription: "Description of Project A",
    },
    {
      projectId: 2,
      projectName: "Project B",
      projectDescription: "Description of Project B",
    },
    {
      projectId: 3,
      projectName: "Project C",
      projectDescription: "Description of Project C",
    },
    {
      projectId: 4,
      projectName: "Project A",
      projectDescription: "Description of Project A",
    },
    {
      projectId: 5,
      projectName: "Project B",
      projectDescription: "Description of Project B",
    },
    {
      projectId: 658,
      projectName: "Project C",
      projectDescription: "Description of Project C",
    },
    {
      projectId: 7453                  ,
      projectName: "Project A",
      projectDescription: "Description of Project A",
    },
    {
      projectId: 822,
      projectName: "Project B",
      projectDescription: "Description of Project B",
    },
    {
      projectId: 911,
      projectName: "Project C",
      projectDescription: "Description of Project C",
    },
    {
      projectId: 130,
      projectName: "Project A",
      projectDescription: "Description of Project A",
    },
    {
      projectId:11,
      projectName: "Project B",
      projectDescription: "Description of Project B",
    },
    {
      projectId: 12,
      projectName: "Project C",
      projectDescription: "Description of Project C",
    },
    {
      projectId: 13,
      projectName: "Project A",
      projectDescription: "Description of Project A",
    },
    {
      projectId:14,
      projectName: "Project B",
      projectDescription: "Description of Project B",
    },
    {
      projectId: 15,
      projectName: "Project C",
      projectDescription: "Description of Project C",
    },
    // Add more projects as needed
  ];
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = projects.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  console.log(indexOfFirstItem,indexOfLastItem)
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className={styles.projectDashboard}>
      <h2>Project Dashboard</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Project Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentProjects.map((project,index) => (
            <tr key={project.index}>
              <td>{project.projectName}</td>
              <td>{project.projectDescription}</td>
              <td>
                <Link to={`/manage-users/${project.projectId}`}>
                  Manage Users
                </Link>
                <Link to={`/project-details/${project.projectId}`}>
                  Project Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination  totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}/>
    </div>
  );
};

export default ProjectDashboard;
