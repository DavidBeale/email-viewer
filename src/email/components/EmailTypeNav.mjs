import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

function EmailTypeNav({ emailId, location }) {
  const isText = location.pathname.toLowerCase() === `/email/${emailId}/text`;

  return (
    <div className="btn-group" role="group" aria-label="email-type">
      <Link
        to={`/email/${emailId}`}
        className={`btn btn-primary ${isText ? '' : 'active'}`}
      >HTML
      </Link>

      <Link
        to={`/email/${emailId}/text`}
        className={`btn btn-primary ${isText ? 'active' : ''}`}
      >Plain Text
      </Link>
    </div>
  );
}

export default withRouter(EmailTypeNav);

EmailTypeNav.propTypes = {
  emailId: PropTypes.string.isRequired,
  location: PropTypes.shape().isRequired
};
