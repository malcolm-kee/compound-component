import React from 'react';

const useWindowEvent = (eventType, callBack, deps = []) => {
  React.useEffect(() => {
    window.addEventListener(eventType, callBack);

    return function() {
      window.removeEventListener(eventType, callBack);
    };
  }, deps);
};

const RouteContext = React.createContext({
  currentPath: null,
  navigate: function noop() {}
});

export const Router = ({ children }) => {
  const [currentPath, setCurrentPath] = React.useState(
    window.location.pathname
  );

  useWindowEvent('popstate', () => {
    setCurrentPath(window.location.pathname);
  });

  function navigate(path, replace = false) {
    replace
      ? window.history.replaceState({}, null, path)
      : window.history.pushState({}, null, path);

    setCurrentPath(path);
  }

  return (
    <RouteContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouteContext.Provider>
  );
};

export const Route = ({ component: Component, path }) => {
  const { currentPath } = React.useContext(RouteContext);

  if (currentPath !== path) {
    return null;
  }

  if (Component) {
    return <Component />;
  }

  return null;
};

export const Link = ({ to, children, replace }) => {
  const { navigate } = React.useContext(RouteContext);

  function handleClick(ev) {
    ev.preventDefault();
    navigate(to, replace);
  }

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
};
