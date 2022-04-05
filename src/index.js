import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import Store from './redux/configureStore';
import 'bootstrap/dist/css/bootstrap.min.css';

render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
