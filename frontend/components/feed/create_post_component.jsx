import React from 'react';
import { openPostModal } from '../../actions/modal_actions';

import { connect } from 'react-redux';

const mSTP = state => ({
  modal: state.ui.modal,
  currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
  openModal: (modal) => dispatch(openPostModal(modal))
});

class CreatePostComponent extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div className='create-post'>
        <div className='create-post-top-half'>
          <div className='thumbnail-img'>

            <img src={this.props.currentUser.profile_photo}></img>
          </div>
          <input type='text' placeholder={`What's on your mind?`} onClick={() => this.props.openModal(this.props.modal)}></input>
        </div>
        {/* <div className='create-post-button'>
           <button>Add Photo</button> 
        </div> */}
      </div>
    )
  }
 }

 export default connect(mSTP, mDTP)(CreatePostComponent);