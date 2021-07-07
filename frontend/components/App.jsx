import React from 'react';
import SplashContainer from './splash_container';
import { Link, Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute } from '../util/route_util';
import Modal from './session/modal'
import Footer from './footer';
const App = () => (
  <>
  <div className='app'>
    {/* Eventually, remove splash container and have login form container, login form
    container will have login form that shows welcome, component to login, and button to sign up
    sign up button rendersa signup modal */}
    <SplashContainer />
    {/* AuthRoute: not logged in, / renders login form, ProtectedRoute means logged in, / renders what we have in splash container for now */}
    <Modal />
    <Switch>
      <AuthRoute exact path='/' component={LoginFormContainer}/>
      <Route path='/' component={SplashContainer} />
    </Switch>
    {/* <Route path='/login' component={LoginFormContainer}/> */}
    {/* "<Route path='/signup' component={SignupFormContainer}/> */}
  </div>
  <Footer />
  </>
)

export default App;