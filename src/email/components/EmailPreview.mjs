import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import EmailTypeNav from './EmailTypeNav';
import HTMLFrame from '../../common/components/HTMLFrame';

import './EmailPreview.less';

export default function EmailPreview({ currentEmail }) {
  const {
    id, name, subjects, body
  } = currentEmail;
  return (
    <article className="email-preview">
      <dl className="dl-horizontal">
        <dt>Message Name</dt>
        <dd>{name}</dd>
      </dl>

      <dl className="dl-horizontal">
        <dt>Subject Line</dt>
        <dd>{subjects ? subjects.join(', ') : null}</dd>
      </dl>

      <nav className="text-center">
        {id ? <EmailTypeNav emailId={id} /> : null}
      </nav>

      <section className="jumbotron">
        {body ? (
          <Switch>
            <Route path={`/email/${id}/text`}>
              <pre>{body.text}</pre>
            </Route>
            <Route>
              <HTMLFrame>{body.html}</HTMLFrame>
            </Route>
          </Switch>
        ) : 'Loading...'}
      </section>
    </article>
  );
}

EmailPreview.propTypes = {
  currentEmail: PropTypes.shape().isRequired
};
