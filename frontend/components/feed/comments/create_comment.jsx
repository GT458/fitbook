import React from 'react';
import { connect } from "react-redux";
import { getCommentsByPostId } from '../../../reducers/selectors/comment_selector';
import { createComment } from '../../../actions/comment_actions';
import { getUser } from '../../../actions/user_actions';
import { Link } from 'react-router-dom';
const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  

})

const mDTP = dispatch => ({
  createComment: comment => dispatch(createComment(comment)),
  getUser: id => dispatch(getUser(id))
})

class CreateComment extends React.Component {

  componentDidMount() {
    this.setState({
      post_id: this.props.post_id,
      author_id: this.props.currentUser.id
    })
  }
  
  constructor(props) {
    super(props);

    
    this.state = {
      body: '',
      author_id: 0,
      post_id: 0,

    }
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.body.length > 0) {
      this.props.createComment(this.state)
    } else {
      console.log('empty comment')
    }
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value})
  }

  render() {
    return (
      <div className='create-comment-container'>
        <div className='profile-picture'>
          <Link to={`users/${this.props.currentUser.id}`}>
        <img src={`${this.props.currentUser.profile_photo}`}></img>
        </Link>
        </div>
        <form onSubmit={this.handleSubmit}className='create-comment-content'>
          <input type='text' className='comment-body' placeholder='Write a comment' onChange={this.update('body')}></input>
          <button type='submit'>submit</button>
        </form>
          
        </div>
      
    )
  }
}

export default connect(mSTP, mDTP)(CreateComment);