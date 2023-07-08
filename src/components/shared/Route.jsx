import { useEffect, useState } from 'react';

const Route = ({ children, path }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    function onRouteChange() {
      setCurrentPath(window.location.pathname);
    }
    window.addEventListener('routeChanged', onRouteChange);
  }, []);

  return path === currentPath ? children : null;
};

export default Route;

// website.com/about -> /about  window.location.pathname
// condition ? <><> : null
