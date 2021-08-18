import { connect } from "react-redux";
import React from 'react';
import { openModal } from "../../actions/modal_actions";
import { getUser } from "../../actions/user_actions";
import { formatFullName } from "../../util/format_name";
import { Link } from 'react-router-dom';
import { deletePost } from '../../actions/post_actions';
const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  author: state.entities.users[ownProps.post.author_id]
})

const mDTP = dispatch => ({
  getUser: (id) => dispatch(getUser(id)),
  deletePost: (id) => dispatch(deletePost(id))
})



class PostItem extends React.Component {
  
  componentDidMount() {
    if (!this.props.author) {

      this.props.getUser(this.props.post.author_id)
    }
  }
  constructor(props) {
    super(props);
    
  }

  render() {
    if (!this.props.author) {
      return null;
    }
    return (
    <div className='post-container'>
        <div className='delete-post-btn' onClick={() => this.props.deletePost(this.props.post.id)}>X</div>
        <Link to={`/users/${this.props.author.id}`}>
      <div className='post-top' >
        <div className='thumbnail'>
            <img src={this.props.author.profile_photo}></img>
            
        </div>
        <div className='post-user-name'>
          {formatFullName(this.props.author.fname, this.props.author.lname)}
        </div>
      </div>
      </Link>
      <div className='post-body'>
        <div className='body'>
          {this.props.post.body}
        </div>
      </div>
        <div className='post-photo'>
          {this.props.post.photo ? <img src={this.props.post.photo}></img> : null}
        </div>
    </div>)
  }
}

export default connect(mSTP, mDTP)(PostItem);



