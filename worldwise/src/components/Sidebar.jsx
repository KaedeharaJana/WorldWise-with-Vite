import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";
import { Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />

      <footer className={styles.footer}>
        <br />
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()}
          &nbsp; by WorldWise Inc.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
