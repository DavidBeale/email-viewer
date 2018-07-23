import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { history } from '../common/configureStore';

import EmailListContainer from '../email/EmailListContainer';
import EmailPreviewContainer from '../email/EmailPreviewContainer';
import NotFound from './components/NotFound';

export default function Main() {
  return (
    <ConnectedRouter history={history}>
      <main>
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
    </ConnectedRouter>
  );
}
