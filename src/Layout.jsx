import { Outlet, useLocation } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import styles from "./Layout.module.css";
import ScrollToTop from "./Components/ScrollToTop";

function Layout() {
  const location = useLocation();
  const hideShellPaths = ["/", "/loading", "/login", "/signup"];
  const showShell = !hideShellPaths.includes(location.pathname);

  return (
    <div className={styles.layout}>
      <ScrollToTop />

      {showShell && (
        <div className={styles.headerFixed}>
          <Header />
        </div>
      )}

      <main className={showShell ? styles.content : styles.authContent}>
        <Outlet />
      </main>

      {showShell && (
        <div className={styles.footerFixed}>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Layout;