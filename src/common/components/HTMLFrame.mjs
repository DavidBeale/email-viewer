import React from 'react';
import PropTypes from 'prop-types';


export default function HTMLFrame({ children }) {
  const content = `data:text/html,${encodeURIComponent(children)}`;

  return (
    <iframe
      title="Email"
      width="100%"
      height="500px"
      src={content}
    />
  );
}

HTMLFrame.propTypes = {
  children: PropTypes.string
};

HTMLFrame.defaultProps = {
  children: ''
};
