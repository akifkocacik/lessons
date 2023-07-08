import React from 'react';

const Link = ({ to, children }) => {
  function onClickHandler(event) {
    if (event.metaKey || event.ctrlKey) return;

    event.preventDefault();
    window.history.pushState({}, '', to);
    // PopStateEvent React'a ait
    const routeChangedEvent = new PopStateEvent('routeChanged');
    window.dispatchEvent(routeChangedEvent);
  }

  return (
    <a onClick={(event) => onClickHandler(event)} href={to}>
      {children}
    </a>
  );
};

export default Link;

// (event) => onClickHandler(event)
// window.location.pushState
// new PopStateEvent("routeChanged");
// window.dispatchEvent(event);
