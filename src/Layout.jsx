import { Outlet, useLocation } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import styles from "./Layout.module.css";
import ScrollToTop from "./Components/ScrollToTop";

// Layout component used as the main wrapper for the app
// It decides when the Header and Footer should be shown or hidden
function Layout() {
  const location = useLocation();

  // Pages where the app shell should be hidden
  // These pages use their own full-screen layout
  const hideShellPaths = ["/", "/loading", "/login", "/signup"];

  const showShell = !hideShellPaths.includes(location.pathname);

  return (
    <div className={styles.layout}>
      <ScrollToTop />

      {/* Header is only shown on the main app pages */}
      {showShell && (
        <div className={styles.headerFixed}>
          <Header />
        </div>
      )}

      {/* Outlet displays the current page based on the active route */}
      <main className={showShell ? styles.content : styles.authContent}>
        <Outlet />
      </main>

      {/* Footer is only shown on the main app pages */}
      {showShell && (
        <div className={styles.footerFixed}>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Layout;