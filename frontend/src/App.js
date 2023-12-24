import { Login } from "./components/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignUp } from "./components/SignUp/SignUp";
import RequireAuth from "./Layout/RequireAuth";
import Layout from "./Layout/Layout";
import Dashboard from "./components/Dashboard/Dashboard";
import Unauthorized from "./components/Unauthorized/Unauthorized";
import Homepage from "./Pages/HomePage/Homepage";
import RoleManage from "./components/RoleManage/RoleManage";
import ProjectDashboard from "./components/ProjectDashboard/ProjectDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Homepage />} />

          <Route path="unauthorized" element={<Unauthorized />} />
          <Route path="signup" element={<SignUp />} />
          <Route element={<RequireAuth path={"my-tickets"} />}>
            <Route path="my-tickets" element={<Login />} />
          </Route>
          <Route element={<RequireAuth path={"my-tickets"} />}>
            <Route path="profile" element={<Login />} />
          </Route>
          <Route path="my-projects" element={<ProjectDashboard />} />
          <Route element={<RequireAuth path={"dashboard"} />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
          <Route element={<RequireAuth path={"my-tickets"} />}>
            <Route path="manage-users" element={<Login />} />
          </Route>
          <Route path="manage-roles" element={<RoleManage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
