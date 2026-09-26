import { useEffect } from 'react';
import { useLocation } from 'react-router';

/** Starts every new page at the top (query-string changes, like Shop filters, are handled by the page). */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default ScrollToTop;
