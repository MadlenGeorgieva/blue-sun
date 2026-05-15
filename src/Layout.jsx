import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import styles from "./Layout.module.css";

function Layout() {
  return (
    <div className={styles.layout}>
      <Header />

      <main className={styles.content}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;