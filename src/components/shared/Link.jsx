import React from 'react';

const Link = ({ to, children }) => {
  function onClickHandler(event) {
    event.preventDefault();
    window.history.pushState({}, '', to);
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
