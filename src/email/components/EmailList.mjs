import React from 'react';
import PropTypes from 'prop-types';

import EmailRow from './EmailRow';

export default function EmailList({ emails }) {
  return (
    <ul>
      {
        emails.map(email => (
          <li key={email.id}>
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
