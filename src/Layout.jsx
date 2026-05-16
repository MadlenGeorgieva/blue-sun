import { Outlet } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import styles from "./Layout.module.css";
import ScrollToTop from "./Components/ScrollToTop";

function Layout() {
  return (
    <div className={styles.layout}>
  <ScrollToTop />

  <div className={styles.headerFixed}>
    <Header />
  </div>

  <main className={styles.content}>
    <Outlet />
  </main>

  <div className={styles.footerFixed}>
    <Footer />
  </div>
</div>
  );
}

export default Layout;