import React from 'react';

export default class EditCommentInput extends React.Component {

  constructor(props) {
    super(props);
    this.editButtonClicked = this.editButtonClicked.bind(this);
    this.state = {
      body: props.comment.body,
      author_id: props.comment.author_id,
      post_id: props.comment.post_id
    }
  }

  editButtonClicked(e) {
    e.preventDefault();
    if (e.currentTarget.value !== '') {
      this.props.updateComment(this.state)
      this.props.setEditState()
    }
  }
  update() {
    return e => this.setState({
      body: e.currentTarget.value
    })
  }
  render() {
    return (
    <div className='edit-comment-container'>
      <form className='edit-comment-form'>
        <input type='text' value={this.props.comment.body}></input>
        <button onClick={() => this.editButtonClicked()}>Edit</button>
      </form>
    </div>
    )
  }
}