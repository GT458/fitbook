import React from 'react';
import {Provider} from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App'

import ScrollToTop from './scroll_to_top';
const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <ScrollToTop>
      <App />
      </ScrollToTop>
    </HashRouter>
  </Provider>
)

export default Root;