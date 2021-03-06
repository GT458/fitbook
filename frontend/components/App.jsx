import React from 'react';
import SplashContainer from './splash_container';
import { Link, Route, Switch , Redirect } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from './navigation/nav_bar_container';
import Modal from './session/modal'
import Footer from './footer';
import ProfileContainer from './profile/profile_container';
import ModalEdit from './profile/profile_components/modal_edit';
import PhotoModal from './profile/profile_components/photo_modal';
import PostModal from './feed/post_modal';
import CoverModal from './profile/profile_components/cover_modal';
import EditPostModal from './feed/edit_post_modal';
import Sidebar from './sidebar/sidebar';
import FriendsPage from './sidebar-pages/friend-page';

const App = () => (
  
  <>
  <div className='app'>
    {/* Eventually, remove splash container and have login form container, login form
    container will have login form that shows welcome, component to login, and button to sign up
    sign up button rendersa signup modal */}
    <AuthRoute exact path='/' component={LoginFormContainer}/>
    <ProtectedRoute path='/' component={NavBarContainer}/>
    <ProtectedRoute exact path='/' component={Sidebar} />
    {/* <SplashContainer /> */}
    {/* AuthRoute: not logged in, / renders login form, ProtectedRoute means logged in, / renders what we have in splash container for now */}
    <Modal />
    <ModalEdit />
    <PhotoModal />
    <PostModal />
    <CoverModal />
    <EditPostModal />
    <Switch>
      <ProtectedRoute exact path='/users/:userId/friends' component={FriendsPage} />
      <ProtectedRoute exact path = '/users/:userId' component={ProfileContainer} />
      <ProtectedRoute path='/' component={SplashContainer} />
      <Redirect to='/' />
    </Switch>
    {/* <Route path='/login' component={LoginFormContainer}/> */}
    {/* "<Route path='/signup' component={SignupFormContainer}/> */}
  </div>
  <Footer />
  </>
)

export default App;