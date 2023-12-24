import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { SideBar} from "../components/NavBar/SideBar.js";
import styles from "./Layout.module.css"
const Layout = () => {
  const location=useLocation().pathname
  return (
    <main className="App">
    
      {location==="/login"?null:<SideBar/>}
      <div className={styles.main_div}>
      <Outlet />
      </div>
    </main>
  );
};

export default Layout;
