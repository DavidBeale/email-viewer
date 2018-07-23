import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function EmailRow({ email }) {
  const { id, name, subjects } = email;
  return (
    <span>
      <strong>{name}</strong>
      <span>{subjects[0]}</span>
      <Link to={`/email/${id}`}>More</Link>
    </span>
  );
}

EmailRow.propTypes = {
  email: PropTypes.shape().isRequired
};
