import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Utility component that automatically scrolls the page to the top 
// whenever the user navigates to a different route in the application
function ScrollToTop() {

  // Gets the current page pathname from React Router
  const { pathname } = useLocation();

  // Runs every time the pathname changes
  // Resets the scroll position to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;