import React from 'react'; // eslint-disable-line
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router'; // eslint-disable-line
import routes from './routes';

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
