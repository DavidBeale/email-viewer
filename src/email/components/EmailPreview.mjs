import React from 'react';
import PropTypes from 'prop-types';

export default function EmailPreview({ currentEmail }) {
  const { name, subjects, body } = currentEmail;
  return (
    <article>
      <div>
        <strong>Message Name</strong><span>{name}</span>
      </div>
      <div>
        <strong>Subject Line</strong><span>{subjects ? subjects.join() : null}</span>
      </div>
      <section>
        {body ? body.text : 'Loading...'}
      </section>
    </article>
  );
}

EmailPreview.propTypes = {
  currentEmail: PropTypes.shape().isRequired
};
