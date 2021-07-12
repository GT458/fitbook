import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_actions';
import {RECEIVE_MODAL_ERROR} from '../../../actions/session_actions';
import { updateUser } from '../../../actions/user_actions';

const mSTP = state => ({

});

const mDTP = dispatch => ({

});

class PhotoModal extends React.Component {

  constructor(props) {
    super(props);

    this.setState({})
  }

  render() {

  }
}

export default connect(mSTP, mDTP)(PhotoModal);