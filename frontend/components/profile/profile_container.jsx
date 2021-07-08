import { connect } from 'react-redux';
import Profile from './profile';

const mSTP = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({

});


export default connect(mSTP, mDTP)(Profile);