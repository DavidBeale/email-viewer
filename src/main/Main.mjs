import React, { Fragment } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { history } from '../common/configureStore';

import EmailListContainer from '../email/EmailListContainer';
import EmailPreviewContainer from '../email/EmailPreviewContainer';
import NotFound from './components/NotFound';

export default function Main() {
  return (
    <ConnectedRouter history={history}>
      <Fragment>

        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to="/" className="navbar-brand">Email Viewer</Link>
            </div>
          </div>
        </nav>

        <main className="container">
          <Switch>
            <Route exact path="/">
              <EmailListContainer />
            </Route>
            <Route path="/email/:emailId">
              <EmailPreviewContainer />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </main>

      </Fragment>
    </ConnectedRouter>
  );
}
