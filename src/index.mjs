import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import './index.less';

import Root from './common/Root';

render(
  <Root />,
  document.getElementById('root')
);
