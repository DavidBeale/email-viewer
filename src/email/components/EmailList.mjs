import React from 'react';
import PropTypes from 'prop-types';

import EmailRow from './EmailRow';

export default function EmailList({ emails }) {
  return (
    <ul className="list-group">
      {
        Array.from(emails, ([id, email]) => (
          <li key={id} className="list-group-item">
            <EmailRow email={email} />
          </li>
        ))
      }
    </ul>
  );
}


EmailList.propTypes = {
  emails: PropTypes.instanceOf(Map).isRequired
};
