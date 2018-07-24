import React from 'react';
import PropTypes from 'prop-types';

import EmailRow from './EmailRow';

export default function EmailList({ emails }) {
  return (
    <ul className="list-group">
      {
        emails.map(email => (
          <li key={email.id} className="list-group-item">
            <EmailRow email={email} />
          </li>
        ))
      }
    </ul>
  );
}


EmailList.propTypes = {
  emails: PropTypes.arrayOf(PropTypes.shape()).isRequired
};
