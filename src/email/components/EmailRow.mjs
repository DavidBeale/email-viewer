import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './EmailRow.less';

export default function EmailRow({ email }) {
  const { id, name, subjects } = email;
  return (
    <span className="email-row">
      <strong>{name}</strong>
      <span>{subjects.join(', ')}</span>
      <Link to={`/email/${id}`} className="btn btn-primary btn-xs pull-right">More</Link>
    </span>
  );
}

EmailRow.propTypes = {
  email: PropTypes.shape().isRequired
};
