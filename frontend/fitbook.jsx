import React from "react";
import ReactDOM from "react-dom";
import thanos from '../app/assets/images/thanos.gif'
import {signup, login, logout} from './util/session_api_util'
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(<><h1>Welcome to Fitbook!</h1><img src="https://media.tenor.com/images/a7587f87f98dcd024d4dcbc4587a3d4e/tenor.gif" alt="thanos"></img></>, root);
})