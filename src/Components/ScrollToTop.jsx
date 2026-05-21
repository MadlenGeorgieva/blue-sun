import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// This is useful for improving user experience when navigating between different pages in the app
// It listens for changes in the pathname and scrolls to the top whenever the route changes

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;