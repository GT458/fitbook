import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';
import configureStore from './store/store';
import * as sessionActions from './actions/session_actions';

import { fetchAllPosts, receivePost, receiveAllPosts } from "./actions/post_actions";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: {[window.currentUser.id]: window.currentUser}
      },
      session: {id: window.currentUser.id}
    };
  
    store = configureStore(preloadedState);
    delete window.currentUser;

  } else {
    store = configureStore();
  }
  // TESTING
  // window.postActions = postActions;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.sessionActions = sessionActions;
  window.fetchPosts = fetchAllPosts;
  ReactDOM.render(<Root store={store} />, root);
})